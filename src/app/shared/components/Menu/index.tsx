import React from "react";
import "./styles.scss";
import { NavLink, useRouteMatch } from "react-router-dom";

interface MenuItem {
  text: string;
  to: string;
  isExact?: boolean;
}
interface MenuWrapperProps {
  isHidden: boolean;
  menuItems?: Array<MenuItem>;
}
const Menu = ({ isHidden, menuItems = [] }: MenuWrapperProps) => {
  let match = useRouteMatch("/panel/furnance/:id");
  console.log(match);
  return (
    <nav className={`nav ${isHidden ? "translateX100" : ""}`}>
      {menuItems.map((item: MenuItem) => {
        if (item.to !== "/panel/furnance") {
          return (
            <NavLink
              key={item.text}
              exact={item.isExact}
              className="nav__link"
              activeClassName="nav__link--active"
              to={item.to}
            >
              {item.text}
            </NavLink>
          );
        }
        if (match) {
          return (
            <NavLink
              key={item.text}
              onClick={(e) => {
                e.preventDefault();
              }}
              exact={item.isExact}
              className="nav__link"
              activeClassName="nav__link--active"
              to={item.to}
            >
              {item.text}
            </NavLink>
          );
        }
      })}
    </nav>
  );
};
export default Menu;
