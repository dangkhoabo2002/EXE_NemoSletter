import React from "react";
import "../css/Home_page.css";
export default function Home_page() {
  return (
    <>
      <div className="landing">
        <div className="landing_section" id="dangkyngay">
          <p
            style={{
              fontWeight: "bold",
              fontSize: "68px",
              paddingTop: "100px",
              marginBottom: "0px",
            }}
          >
            Bạn muốn thiết kế gì?
          </p>
          <p
            style={{
              fontSize: "1.5rem",
              color: "#858585",
              marginTop: "12px",
            }}
          >
            Nemosletter giúp bạn dễ dàng tạo thiết kế chuyên nghiệp, chia sẻ và
            in ấn.
          </p>
          <div className="button" id="button_dangkyngay">
            Đăng kí ngay
          </div>
        </div>
        <div className="landing_section" id="section_vechungtoi">
          <h1 className="landing_section_title">Về chúng tôi</h1>
          <p className="landing_section_content">
            Chào mừng bạn đến với trang web của chúng tôi - nơi tạo ra trải
            nghiệm trực tuyến tuyệt vời cho bạn. Tại đây, chúng tôi mong muốn
            mang đến cho bạn giải pháp tích hợp trên nền tảng điện tử để giải
            quyết những vấn đề thực tế của cuộc sống hằng ngày.
          </p>
        </div>
        <div className="landing_section">
          <h1 className="landing_section_title">Nemosletter cho mọi người</h1>
          <div className="landing_section_inside">
            <div className="landing_section_inside_box" id="lsib1">
              <img src="src\assets\Logo.png" alt="" />
              <div>
                <h2 className="landing_section_inside_box_title">asdasd</h2>
              </div>
            </div>
            <div className="landing_section_inside_box" id="lsib2">
              <img src="src\assets\Logo.png" alt="" />
              <div>
                <h2 className="landing_section_inside_box_title">asdasd</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="landing_section">Cv trailer</div>
      </div>
    </>
  );
}
