import React from "react";
import PropTypes from "prop-types";

const Input = ({
  type = "text",
  label,
  value,
  onChange,
  placeholder,
  required = true,
}) => {
  return (
    <div className="">
      {label && (
        <label
          className=""
        >
          {label}
        </label>
      )}
      <div className="">
        <input
          type={type}
          required={required}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className=""
        />
      </div>
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.node,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
};

export default Input;
