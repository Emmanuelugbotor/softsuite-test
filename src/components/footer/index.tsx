import styles from "./footer.module.scss";

const Footer = () => {
  const currentDate = new Date();

  return (
    <div className={styles.container}>
      <span>
        &copy; {currentDate.getFullYear()} SoftSuite. All right. reserved.
      </span>
      <span>support@softsuite.com</span>
    </div>
  );
};

export default Footer;
