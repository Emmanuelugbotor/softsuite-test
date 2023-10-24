import React from "react";
import { Link } from "react-router-dom";

import styles from "./breadcrumb.module.scss";

interface BreadcrumbItem {
  label: string;
  url: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className={styles.breadcrumb}>
        {items.map((item, index) => (
          <li
            key={item.label}
            className={`${styles.breadcrumb_item}${
              index === items.length - 1 ? styles.active : ""
            }`}
          >
            {index === items.length - 1 ? (
              <span className={styles.current_index}>{item.label}</span>
            ) : (
              <div className={styles.breadcrumb_content}>
                <Link to={item.url}>{item.label}</Link>
                <span className={styles.breadcrumb_separator}>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={styles.icon}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </span>
              </div>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
