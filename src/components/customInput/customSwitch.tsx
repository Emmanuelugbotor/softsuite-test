import React from "react";

import styles from "./customInput.module.scss";

interface CustomSwitchProps {
  label: string;
  checked: boolean;
  onChange: (value: boolean) => void;
}

const CustomSwitch = ({ label, checked, onChange }: CustomSwitchProps) => {
  const [isChecked, setIsChecked] = React.useState(checked);

  const toggleSwitch = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    onChange(newChecked);
  };

  return (
    <div className={styles.switch_container}>
      <span>{label}</span>
      <div className={styles.switch}>
        <div className={styles.switch_content}>
          <input type="checkbox" checked={isChecked} onChange={toggleSwitch} />
          <span
            className={`${styles.round} ${
              isChecked ? styles.active : styles.slider
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomSwitch;
