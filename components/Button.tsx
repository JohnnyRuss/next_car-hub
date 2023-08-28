"use client";

import React from "react";
import Image from "next/image";

interface ButtonT {
  title: string;
  disabled?: boolean;
  type?: "submit" | "button";
  textStyles?: string;
  containerStyles?: string;
  rightIcon?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonT> = ({
  title,
  onClick,
  type = "button",
  disabled = false,
  textStyles,
  containerStyles,
  rightIcon,
}) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className={`custom-btn ${containerStyles || ""}`}
      onClick={onClick}
    >
      <span className={`flex-1 ${textStyles || ""}`}>{title}</span>
      {rightIcon && (
        <Image src={rightIcon} alt="button icon" width={20} height={20} />
      )}
    </button>
  );
};

export default Button;
