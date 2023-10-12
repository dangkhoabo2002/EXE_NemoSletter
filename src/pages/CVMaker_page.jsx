import React from "react";
import Footer from "../components/Footer";
import "../css/CVMaker_page.css";
import { CVs } from "../data/ListofCV";
export default function CVMaker_page() {
  return (
    <>
      <div className="CVMaker_page_container">
        <h1>Danh sách các CV được ưa chuộng</h1>
        <div className="CVMaker_list">
          {CVs.map((cv) => (
            <div className="CVMaker_card">
              <img src={cv.img} alt="" />
              <h2>{cv.name}</h2>
              <p>{cv.club}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
