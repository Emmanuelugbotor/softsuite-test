import Logo from "./components/Logo";
import UserProfile from "./components/UserProfile";
import Selection from "./components/Selection";
import SearchComponent from "./components/SearchComponent";
import Notification from "./components/Notification";
import { userProfileData, logoData } from "./data";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Logo src={logoData.src} />
        <div className={styles.left_child}>
          <Selection />
          <SearchComponent />
        </div>
      </div>
      <div className={styles.right}>
        <Notification />
        <UserProfile data={userProfileData} />
      </div>
    </div>
  );
};

export default Header;
