import React, { useState } from "react";
import { Link } from "react-router-dom";

interface MenuItem {
  label: string;
  path: string;
  children?: MenuItem[];
}

interface MenuProps {
  items: MenuItem[];
}

const Menu: React.FC<MenuProps> = ({ items }) => {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const handleMouseEnter = (label: string) => {
    setOpenSubmenu(label);
  };

  const handleMouseLeave = () => {
    setOpenSubmenu(null);
  };

  return (
    <ul className="menu z-10">
      {items.map((item) => (
        <li
          key={item.label}
          className={`menu-item ${item.children ? "menu-item-has-children" : ""}`}
          onMouseEnter={() => item.children && handleMouseEnter(item.label)}
          onMouseLeave={handleMouseLeave}
        >
          <Link to={item.path} className="tc-menu-inner">
            {item.label}
          </Link>
          {item.children && openSubmenu === item.label && (
            <ul className="sub-menu">
              {item.children.map((child) => (
                <li key={child.label} className="menu-item">
                  <Link to={child.path} className="tc-menu-inner tc-megamenu-title">
                    {child.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          {item.children && <span className="icon-toggle"><i className="fa fa-angle-down"></i></span>}
        </li>
      ))}
    </ul>
  );
};

export default Menu;