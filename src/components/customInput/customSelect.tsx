import React from "react";
import styles from "./customInput.module.scss";

interface CustomSelectProps {
  label: string;
  options: string[];
  disabled: boolean;
}
const CustomSelect = ({ label, options, disabled }: CustomSelectProps) => {
  const [selectedOptions, setSelectedOptions] = React.useState([]);

  const handleSelect = (option: string) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (!selectedOptions.includes(option)) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleDelete = (option: string) => {
    const updatedOptions = selectedOptions.filter((item) => item !== option);
    setSelectedOptions(updatedOptions);
  };
  return (
    <div className={styles.custom_select_container}>
      <span>{label}</span>
      <div
        className={selectedOptions.length > 0 ? styles.selected_options : ""}
      >
        {selectedOptions.map((option) => (
          <div key={option}>
            {option}
            <button type="button" onClick={() => handleDelete(option)}>
              x
            </button>
          </div>
        ))}
      </div>
      <div className="options">
        <select
          onChange={(e) => handleSelect(e.target.value)}
          disabled={disabled}
          style={{ backgroundColor: disabled ? "#E1E1E1" : "initial" }}
        >
          <option value="">Select</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CustomSelect;
