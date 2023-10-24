// eslint-disable-next-line import/no-absolute-path
import HOME_ICON from "/icons/home.svg";
import styles from "../header.module.scss";

const Selection = () => {
  return (
    <div className={styles.selection_container}>
      <div>
        <img src={HOME_ICON} alt="home" />
      </div>
      <div className={styles.selection_info}>
        <p>Change Organization</p>
        <h4>PaperSoft Limited</h4>
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

export default Selection;
