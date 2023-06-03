import { Link } from "react-router-dom/cjs/react-router-dom.min";

const MenuItem = ({ text }) => {
  const handleClickMenu = () => {
    if (text === "Home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    if (text === "Popular") {
      window.scrollTo({
        top: 30,
        behavior: "smooth",
      });
    }
    if (text === "NowPlaying") {
      window.scrollTo({
        top: 1000,
        behavior: "smooth",
      });
    }
  };

  return (
    <li>
      <Link to={`/${text.toLowerCase()}`} onClick={handleClickMenu}>
        {text}
      </Link>
    </li>
  );
};

export default MenuItem;
