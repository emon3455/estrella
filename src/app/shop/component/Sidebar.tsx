"use client";

import React, { useState } from "react";

const Sidebar = () => {
  const categories = [
    { value: "men", label: "Men" },
    { value: "women", label: "Women" },
    { value: "kids", label: "Kids" },
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
    Kids: [
      "top_bottom_set",
      "t_shirt",
      "polo_shirt",
      "sleeve_less_t_shirt",
      "3_quarter_shorts",
      "trouser",
    ],
    "bulk_order": ["bulk_order"],
  
  } as Record<string, string[]>;

  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([]);

  const handleCategoryClick = (category: string) => {
    if (selectedCategory !== category) {
      setSelectedCategory(category); // Set the new category
      setSelectedSubcategories([]); // Reset subcategories when category changes
    } else {
      setSelectedCategory(""); // Deselect category if clicked again
    }
  };

  const handleSubcategoryClick = (subcategory: string) => {
    setSelectedSubcategories((prev) =>
      prev.includes(subcategory)
        ? prev.filter((item) => item !== subcategory) // Remove if already selected
        : [...prev, subcategory] // Add if not selected
    );
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Select Categories</h1>

      {/* Category and Subcategories */}
      <div className="space-y-4">
        {categories.map((category) => (
          <div key={category.value} className="border-b pb-2">
            {/* Category Button */}
            <button
              onClick={() => handleCategoryClick(category.value)}
              className={`flex items-center justify-between w-full text-left px-3 py-2 rounded-lg border transition-all duration-300 ease-in-out ${
                selectedCategory === category.value
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {category.label}
              {selectedCategory === category.value ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4 transition-transform duration-300 ease-in-out rotate-180"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4 transition-transform duration-300 ease-in-out rotate-0"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </button>

            {/* Subcategories */}
            <div
              className={`mt-2 pl-6 space-y-2 overflow-hidden transition-all duration-500 ease-in-out ${
                selectedCategory === category.value
                  ? "max-h-[1400px] opacity-100 translate-y-0"
                  : "max-h-0 opacity-0 -translate-y-2"
              }`}
            >
              {subcategories[category.value]?.map((sub, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSubcategoryClick(sub)}
                  className={`flex items-center justify-between w-full text-left px-3 py-2 rounded-lg border transition-all duration-300 ease-in-out ${
                    selectedSubcategories.includes(sub)
                      ? "bg-green-500 text-white border-green-600"
                      : "bg-gray-100 text-gray-800 border-gray-300"
                  } hover:shadow-md`}
                >
                  <span>{sub}</span>
                  {selectedSubcategories.includes(sub) ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4 transition-transform duration-300 ease-in-out transform rotate-45"
                    >
                     <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4 transition-transform duration-300 ease-in-out transform rotate-0"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
