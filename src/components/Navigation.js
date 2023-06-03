import MenuBar from "./MenuBar";
import styles from "./Navigation.module.css";
const Navigation = () => {
  const menuItems = ["Home", "Popular", "NowPlaying", "About"];

  return (
    <div className={styles.nav}>
      <div className={styles.nav_logo}>Logo</div>
      <div className={styles.nav_menu}>
        <ul>
          <MenuBar menuItems={menuItems} />
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
