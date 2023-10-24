/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import PropTypes from "prop-types";
import styles from "./customInput.module.scss";

interface CustomInputProps {
  label: string;
  type: "text" | "select" | "textarea" | "date";
  placeholder: string;
  options?: string[];
  value: string;
  onInputChange: (value: string) => void;
  disabled?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  type,
  placeholder,
  options,
  value,
  onInputChange,
  disabled,
}) => {
  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    onInputChange(event.target.value);
  };
  return (
    <>
      <div className={styles.col}>
        <span>{label}</span>
        {type === "text" && (
          <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
          />
        )}
        {type === "date" && (
          <input
            type="date"
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
          />
        )}
        {type === "select" && (
          <select value={value} onChange={handleChange} disabled={disabled}>
            {options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
      </div>
      {type === "textarea" && (
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      )}
    </>
  );
};

export default CustomInput;

CustomInput.propTypes = {
  disabled: PropTypes.bool,
  // @ts-ignore
  options: PropTypes.arrayOf(PropTypes.string),
};

CustomInput.defaultProps = {
  disabled: false,
  options: [""],
};
