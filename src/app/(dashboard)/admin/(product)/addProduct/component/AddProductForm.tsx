"use client";
import React, { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";
import CInput from "@/utils/CInput/CInput";
import CSelect from "@/utils/CSelect/CSelect";
import CButton from "@/utils/CButton/CButton";
import CTextArea from "@/utils/CTextArea/CTextArea";
import CFileInput from "@/utils/CFileinput/CFileinput";
import { successAlert } from "@/utils/alert-function";
import { useAddProductMutation } from "@/Redux/Features/admin/product/admin-product-slice";

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
  { value: "Men", label: "Men" },
  { value: "Women", label: "Women" },
  { value: "Kids", label: "Kids" },
  { value: "Bulk Order", label: "Bulk Order" },
];

const subcategories = {
  Men: [
    "Short sleeve t-shirt",
    "Long sleeve t-shirt",
    "Polo shirt",
    "Sports jersey",
    "Dress shirt",
    "Casual shirt",
    "Katua",
    "Panjabi",
    "Pajama",
    "Trouser",
    "Cargo pant",
    "Under wear",
    "Tank top",
    "Sweat shirt",
    "Hoodie",
  ],
  Women: ["Comfy top bottom set", "Kurti, Tunic, & Tops"],
  Kids: [
    "Top bottom set",
    "T-shirt",
    "Polo shirt",
    "Sleeve less t-shirt",
    "3quarter shorts",
    "Trouser",
  ],
  "Bulk Order": ["Bulk Order"],
} as any;

const initialSize: GeneralSize = { s: 0, m: 0, l: 0, xl: 0, xxl: 0, xxxl: 0 };

const AddProductForm: React.FC = () => {
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
  const [addProduct,{isLoading, data}] = useAddProductMutation();

  // Calculate stock based on generalSize
  useEffect(() => {
    const totalStock = Object.values(formData.generalSize).reduce(
      (acc, size) => acc + size,
      0
    );
    setFormData((prev) => ({ ...prev, stock: totalStock }));
  }, [formData.generalSize]);

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
    const finalData = { ...formData, images: imageUrls };

    // Send formData to the backend
    try {
      const resp = addProduct(finalData)?.unwrap()
      console.log("Product created:", resp);
      successAlert({title:"Product Added!", text:"Product added successfully."})
    } catch (error) {
      console.error("Error submitting product:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="">
          <CInput
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="">
          <CInput
            label="Fabrics"
            name="fabrics"
            value={formData.fabrics}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="">
          <CInput
            label="Price"
            name="price"
            type="number"
            value={formData.price}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="">
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
        value={formData.description}
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

      <CInput
        label="Total In Stock"
        name="stock"
        type="number"
        value={formData.stock}
        readOnly
      />

      <div className="flex gap-4">
        <label>
          <input
            type="checkbox"
            name="isTopSelling"
            checked={formData.isTopSelling}
            onChange={handleInputChange}
          />
          Top Selling
        </label>
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

      <CButton variant="solid" type="submit" loading={isLoading}>
        Submit
      </CButton>
    </form>
  );
};

export default AddProductForm;
