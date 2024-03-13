import React from 'react';

const TextInput = ({ label, name, value, onChange }: any) => {
  const handleInputChange = (e: any) => {
    onChange(e.target.value);
  };

  return (
    <div className="field-container">
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default TextInput;
