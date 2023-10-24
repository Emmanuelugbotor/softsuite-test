import styles from "../sidebar.module.scss";
// eslint-disable-next-line import/no-absolute-path
import SwWITCH_LOGO from "/icons/switch.png";

const ModuleSwitch = () => {
  return (
    <div className={styles.switch_container}>
      <img src={SwWITCH_LOGO} alt="switch_icon" />
      <div className={styles.selection_info}>
        <p>Switch Module</p>
        <h4>Payroll Management</h4>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="#2D416F"
          className={styles.icon}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default ModuleSwitch;
