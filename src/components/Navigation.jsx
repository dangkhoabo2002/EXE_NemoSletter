import React from "react";
import "../css/Navigation.css";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <div className="navbar">
        <div className="section">
          <img src="src\assets\Logo.png" alt="Logo" id="logo" />
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
          <div style={{ color: "#7357FF", backgroundColor: "#F9F8FF" }}>
            Đăng kí
          </div>
          <div style={{ color: "#FFFFFF", backgroundColor: "#7357FF" }}>
            Đăng nhập
          </div>
        </div>
      </div>
    </>
  );
}
