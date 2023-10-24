import React from "react";
import { Link, useLocation } from "react-router-dom";
import ModuleSwitch from "./components/ModuleSwitch";
import styles from "./sidebar.module.scss";

interface SidebarProps {
  items: {
    id: number;
    label: string;
    icon?: string;
    link: string;
    children?: { id: string; label: string; link: string }[];
  }[];
}

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  const [activeItem, setActiveItem] = React.useState<number | null>(null);

  const location = useLocation();

  const toggleDropdown = (id: number) => {
    if (activeItem === id) setActiveItem(null);
    else setActiveItem(id);
  };

  return (
    <div className={styles.container}>
      <ModuleSwitch />

      <div className={styles.menu_options}>
        <ul className={styles.parent_option}>
          {items.map((item) => (
            <li key={item.id}>
              <Link to={item.link}>
                <div
                  className={`${
                    location.pathname.includes(item.link)
                      ? styles.active
                      : styles.item
                  }`}
                  onClick={() => toggleDropdown(item.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      toggleDropdown(item.id);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  style={{
                    marginBottom: item.id === 5 ? "40px" : "20px",
                    marginTop: item.id === 6 ? "40px" : "0",
                  }}
                >
                  <div>
                    <img src={item.icon} alt="icon" />
                    {item.label}
                  </div>
                  {item.children && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke={
                        activeItem === item.id ? "currentColor" : "#2D416F"
                      }
                      className={`${styles.icon} ${
                        activeItem === item.id ? styles.rotate_icon : ""
                      }`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={
                          activeItem === item.id
                            ? "M5 15l7-7 7 7"
                            : "M19 9l-7 7-7-7"
                        }
                      />
                    </svg>
                  )}
                </div>
              </Link>
              {activeItem === item.id && item.children && (
                <ul className={styles.child_menu}>
                  {item.children.map((child) => (
                    <li
                      key={child.id}
                      className={`${
                        location.pathname.includes(child.link)
                          ? styles.active
                          : styles.child_link
                      }`}
                    >
                      {child.label}
                    </li>
                  ))}
                </ul>
              )}
              {item.id === 5 && <hr style={{ background: "#96A0B7" }} />}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
