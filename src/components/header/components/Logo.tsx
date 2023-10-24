import styles from "../header.module.scss";

interface CompanyLogo {
  src: string;
}

const Logo = ({ src }: CompanyLogo) => {
  return (
    <div className={styles.brand_logo}>
      <img src={src} alt="brand_loog" />
    </div>
  );
};

export default Logo;
