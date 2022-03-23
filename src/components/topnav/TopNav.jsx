import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "../dropdown/Dropdown";
import ThemeMenu from "../thememenu/ThemeMenu";
import "./topnav.css";
import notifications from "../../assets/JsonData/notification.json";
import user_image from "../../assets/images/user.png";
import user_menu from "../../assets/JsonData/user_menus.json";

const current_user = {
  display_name: "Jane Dang",
  image: user_image,
};

const renderNotificationItem = (item, index) => {
  return (
    <div className="notification-item" key={index}>
      <i className={item.icon}></i>
      <span>{item.content}</span>
    </div>
  );
};

const renderUserToggle = (user) => {
  return (
    <div className="topnav__right-user">
      <div className="topnav__right-user__image">
        <img src={user.image} alt="user_image" />
      </div>
      <div className="topnav__right-user__name">{user.display_name}</div>
    </div>
  );
};

const renderUserMenu = (item, index) => {
  return (
    <Link to="/" key={index}>
      <div className="notification-item">
        <i className={item.icon}></i>
        <span>{item.content}</span>
      </div>
    </Link>
  );
};

const TopNav = () => {
  return (
    <div className="topnav">
      <div className="topnav__search">
        <input type="text" placeholder="Search here..." />
        <i className="bx bx-search"></i>
      </div>
      <div className="topnav__right">
        <div className="topnav__right-item">
          {/* dropdown here */}
          <Dropdown
            customToggle={() => renderUserToggle(current_user)}
            contentData={user_menu}
            renderItems={(item, index) => renderUserMenu(item, index)}
          />
        </div>
        <div className="topnav__right-item">
          {/* dropdown here */}{" "}
          <Dropdown
            icon="bx bx-bell"
            badge="12"
            contentData={notifications}
            renderItems={(item, index) => renderNotificationItem(item, index)}
            renderFooter={() => <Link to="/">View All</Link>}
          />
        </div>
        <div className="topnav__right-item">
          {/* theme setting */} <ThemeMenu />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
