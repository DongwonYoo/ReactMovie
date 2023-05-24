import React from "react";
import MenuItem from "./MenuItem";
const MenuBar = ({ menuItems }) => {
  return (
    <ul>
      {menuItems.map((item, index) => (
        <MenuItem key={index} text={item} />
      ))}
    </ul>
  );
};

export default MenuBar;
