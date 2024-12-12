"use client";
import React, { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";
import CInput from "@/utils/CInput/CInput";
import CSelect from "@/utils/CSelect/CSelect";
import CButton from "@/utils/CButton/CButton";
import CTextArea from "@/utils/CTextArea/CTextArea";
import CFileInput from "@/utils/CFileinput/CFileinput";
import { successAlert } from "@/utils/alert-function";
import {
  useGetSingleProductQuery,
  useUpdateProductMutation,
} from "@/Redux/Features/admin/product/admin-product-slice";
import Image from "next/image";

// Define types for the form data
interface GeneralSize {
  s: number;
  m: number;
  l: number;
  xl: number;
  xxl: number;
  xxxl: number;
}

interface FormData {
  title: string;
  description: string;
  category: string;
  subCategory: string[];
  price: number;
  previousPrice: number;
  isTopSelling: boolean;
  isFreeDelivery: boolean;
  generalSize: GeneralSize;
  fabrics: string;
  images: string[];
  stock: number;
}

const categories = [
  { value: "men", label: "Men" },
  { value: "women", label: "Women" },
  { value: "Kids", label: "kids" },
  { value: "bulk_order", label: "Bulk Order" },
];

const subcategories = {
  men: [
    "short_sleeve_t_shirt",
    "long_sleeve_t_shirt",
    "polo_shirt",
    "sports_jersey",
    "dress_shirt",
    "casual_shirt",
    "katua",
    "panjabi",
    "pajama",
    "trouser",
    "cargo_pant",
    "under_wear",
    "tank_top",
    "sweat_shirt",
    "hoodie",
  ],
  women: ["comfy_top_bottom_set", "kurti_tunic_tops"],
  kids: [
    "top_bottom_set",
    "t_shirt",
    "polo_shirt",
    "sleeve_less_t_shirt",
    "3_quarter_shorts",
    "trouser",
  ],
  "bulk_order": ["bulk_order"],
} as any;

const initialSize: GeneralSize = { s: 0, m: 0, l: 0, xl: 0, xxl: 0, xxxl: 0 };

const UpdateProductForm: React.FC<{ id: string }> = ({ id }) => {
  const { data: product, isLoading: isFetchingProduct } =
    useGetSingleProductQuery(id);
  const [updateProduct, { isLoading, data }] = useUpdateProductMutation();

  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    category: "",
    subCategory: [],
    price: 0,
    previousPrice: 0,
    isTopSelling: false,
    isFreeDelivery: false,
    generalSize: initialSize,
    fabrics: "",
    images: [],
    stock: 0,
  });
  const [imageFiles, setImageFiles] = useState<File[]>([]);

  useEffect(() => {
    if (product) {
      setFormData({
        title: product.title,
        description: product.description,
        category: product.category,
        subCategory: product.subCategory,
        price: product.price,
        previousPrice: product.previousPrice,
        isTopSelling: product.isTopSelling,
        isFreeDelivery: product.isFreeDelivery,
        generalSize: product.generalSize,
        fabrics: product.fabrics,
        images: product.images,
        stock: Object.values(product.generalSize).reduce(
          (acc, size) => (acc as any) + size,
          0
        ) as any,
      });
    }
  }, [product]);

  const handleInputChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSizeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      generalSize: { ...prev.generalSize, [name]: parseInt(value) || 0 },
    }));
  };

  const handleCategoryChange = (selectedOption: { value: string }) => {
    setFormData({
      ...formData,
      category: selectedOption?.value || "",
      subCategory: [], // Reset subcategories on category change
    });
  };

  const handleSubCategoryChange = (
    selectedOptions: { value: string; label: string }[]
  ) => {
    const selectedValues = selectedOptions.map((option) => option.value);
    setFormData({
      ...formData,
      subCategory: [...new Set([...formData.subCategory, ...selectedValues])],
    });
  };

  const handleImageUpload = async () => {
    const uploadedUrls: string[] = [];
    const imgbbApiKey = "3fbf0c0e3d8b4bed768a636369b91f87";

    for (let file of imageFiles) {
      const formData = new FormData();
      formData.append("image", file);

      try {
        const res = await axios.post(
          `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`,
          formData
        );
        uploadedUrls.push(res.data.data.url);
      } catch (error) {
        console.error("Image upload failed:", error);
      }
    }

    return uploadedUrls;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Upload images to ImgBB
    const imageUrls = await handleImageUpload();
    const finalData = { ...formData, images: imageUrls ? imageUrls : formData?.images };

    // Send formData to the backend
    try {
      const resp = await updateProduct({
        id,
        productData: finalData,
      })?.unwrap();
      console.log("Product updated:", resp);
      successAlert({
        title: "Product Updated!",
        text: "Product updated successfully.",
      });
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div className="">
      <div className="my-5">
        <Image src={formData?.images[0] as any} height={100} width={100} alt="product image" className="mx-auto rounded-md" />
      </div>
      <form onSubmit={handleSubmit} className="p-4 space-y-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div>
            <CInput
              label="Title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <CInput
              label="Fabrics"
              name="fabrics"
              value={formData.fabrics}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div>
            <CInput
              label="Price"
              name="price"
              type="number"
              value={formData.price}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <CInput
              label="Previous Price"
              name="previousPrice"
              type="number"
              value={formData.previousPrice}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div>
          <label>Images</label>
          <CFileInput
            type="file"
            accept="image/*"
            files={imageFiles}
            multiple
            onChange={(e) => setImageFiles(Array.from(e.target.files || []))}
          />
        </div>

        <CTextArea
          label="Description"
          name="description"
          defaultValue={formData.description}
          onChange={handleInputChange}
        />

        <CSelect
          label="Category"
          options={categories}
          value={formData.category}
          onChange={handleCategoryChange}
        />

        {formData.category && (
          <CSelect
            label="Sub Category"
            options={subcategories[formData.category]?.map((sub: string) => ({
              value: sub,
              label: sub,
            }))}
            isMulti={true} // Ensure multiple selections are allowed
            defaultValue={formData.subCategory.map((value) => ({
              value: value,
              label: value,
            }))}
            onChange={handleSubCategoryChange}
          />
        )}

        <div>
          <label>General Size Available Product</label>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            {Object.keys(initialSize).map((size) => (
              <div key={size}>
                <CInput
                  label={size.toUpperCase()}
                  name={size}
                  type="number"
                  value={formData.generalSize[size as keyof GeneralSize]}
                  onChange={handleSizeChange}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div>
            <label>
              <input
                type="checkbox"
                name="isTopSelling"
                checked={formData.isTopSelling}
                onChange={handleInputChange}
              />
              Top Selling
            </label>
          </div>

          <div>
            <label>
              <input
                type="checkbox"
                name="isFreeDelivery"
                checked={formData.isFreeDelivery}
                onChange={handleInputChange}
              />
              Free Delivery
            </label>
          </div>
        </div>

        <CButton variant="solid" type="submit" disabled={isLoading}>
          {isLoading ? "Updating..." : "Update Product"}
        </CButton>
      </form>
    </div>
  );
};

export default UpdateProductForm;
