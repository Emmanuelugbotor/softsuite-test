import styles from "../header.module.scss";

interface UserProfileData {
  data: {
    name: string;
    title: string;
    userAvatar: string;
  };
}
const UserProfile = ({ data }: UserProfileData) => {
  return (
    <div className={styles.profile_container}>
      <div className={styles.user_img}>
        <img src={data.userAvatar} alt="user_img" />
      </div>
      <div className={styles.user_info}>
        <h4>{data.name}</h4>
        <p>{data.title}</p>
      </div>
    </div>
  );
};

export default UserProfile;
