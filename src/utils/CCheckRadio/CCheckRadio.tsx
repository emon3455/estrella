import React, { useState } from "react";

interface CheckRadioProps {
  type: "radio" | "checkbox";
  id?: string;
  name?: string;
  className?: string;
  disabled?: boolean;
  label?: string;
  defaultChecked?: boolean;
  checked?: boolean; // Add checked prop for checkboxes
  onClick?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const CCheckRadio = ({
  type,
  id,
  name,
  className,
  label,
  defaultChecked,
  checked, // Include checked prop
  onClick,
  onChange,
  onBlur,
  onFocus,
  disabled,
}: CheckRadioProps) => {
  const [isChecked, setIsChecked] = useState(defaultChecked || false);

  const handleClick = () => {
    setIsChecked(!isChecked);
    if (onClick) {
      onClick();
    }
  };

  return (
    <>
      <input
        onClick={handleClick}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        type={type}
        name={name}
        id={id}
        defaultChecked={defaultChecked}
        checked={type === "checkbox" ? isChecked : checked} // Use isChecked for checkboxes
        className={className || "cursor-pointer"}
        disabled={disabled}
      />
       <label
        className={`cursor-pointer ${isChecked ? "text-blue-500 font-semibold ml-1" : "ml-1"}`}
        htmlFor={id}
      >
        {label}
      </label>
    </>
  );
};

export default CCheckRadio;
