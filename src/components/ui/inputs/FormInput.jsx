import React from "react";

const FormInput = ({ labelText, name, value, handleChange, ...rest }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="font-medium">
        {labelText}
      </label>
      <input
        type="text"
        value={value}
        id={name}
        name={name}
        onChange={handleChange}
        className="px-4 py-2 bg-gray-200 rounded-md"
      />
    </div>
  );
};

export default FormInput;
