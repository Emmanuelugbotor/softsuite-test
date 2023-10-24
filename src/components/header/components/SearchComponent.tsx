import styles from "../header.module.scss";

const SearchComponent = () => {
  return (
    <div className={styles.search_container}>
      <input type="text" placeholder="Search for anything..." />
      <div className={styles.search_icon_container}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#ffffff"
          className={styles.icon}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
    </div>
  );
};

export default SearchComponent;
