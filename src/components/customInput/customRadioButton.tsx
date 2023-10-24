import React from "react";
import styles from "./customInput.module.scss";

interface CustomRadioProps {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  selectedValue: string;
  onRadioChange: (value: string) => void;
}

const CustomRadio: React.FC<CustomRadioProps> = ({
  label,
  name,
  options,
  selectedValue,
  onRadioChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onRadioChange(event.target.value);
  };

  return (
    <div className={styles.radio_group}>
      <span>{label}</span>
      <div className={styles.label}>
        {options.map((option) => (
          // eslint-disable-next-line jsx-a11y/label-has-associated-control
          <label key={option.value} className={styles.radioLabel}>
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={option.value === selectedValue}
              onChange={handleChange}
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default CustomRadio;
