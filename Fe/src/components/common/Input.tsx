import React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Icon hiển thị bên trái input (như user, mail, lock) */
  icon?: React.ReactNode;
  /** Label tùy chọn nằm trên input */
  label?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ icon, label, type = "text", placeholder, className = "", ...props }, ref) => {
    return (
      <div className="flex flex-col w-full gap-1.5 mb-4">
        {label && (
          <label className="text-sm font-medium text-gray-700 ml-2">
            {label}
          </label>
        )}
        <div className="relative flex items-center w-full">
          {icon && (
            <div className="absolute left-4 text-gray-500 flex items-center justify-center">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            type={type}
            placeholder={placeholder}
            className={`w-full px-5 py-3.5 bg-gray-100/80 border border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all rounded-full text-gray-800 placeholder:text-gray-400 ${
              icon ? "pl-12" : ""
            } ${className}`}
            {...props}
          />
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";
