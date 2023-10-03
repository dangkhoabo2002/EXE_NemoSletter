import React from "react";
import "../css/Navigation.css";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <div className="navbar">
        <div className="section">
          <Link to={``} style={{ textDecoration: "none" }}>
            <img src="src\assets\Logo.png" alt="Logo" id="logo" />
          </Link>
        </div>

        <div className="section">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="section" id="menu">
          <Link to={`mail`} style={{ textDecoration: "none" }}>
            <div>Quản lý mail</div>
          </Link>
          <Link to={`newsletter`} style={{ textDecoration: "none" }}>
            <div>Newsletter</div>{" "}
          </Link>

          <Link to={`cv`} style={{ textDecoration: "none" }}>
            <div>Thiết kế CV</div>{" "}
          </Link>
        </div>
        <div className="section" id="authen">
          <div style={{ color: "#FFFFFF", backgroundColor: "#7357FF" }}>
            Đăng nhập
          </div>
        </div>
      </div>
    </>
  );
}
