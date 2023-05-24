import { Link } from "react-router-dom/cjs/react-router-dom.min";

const MenuItem = ({ text }) => {
  return (
    <li>
      <Link to={`/${text}`}>{text}</Link>
    </li>
  );
};

export default MenuItem;
