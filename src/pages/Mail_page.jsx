import React from "react";
import "../css/Mail_page.css";

export default function Mail_page() {
  return (
    <>
      <div
        className="landing_email_container"
        style={{ backgroundColor: "#F6F7F9", paddingLeft: "25px" }}
      >
        <div className="email_sidebar">
          <div className="email_sidebar_section" id="create_button">
            <i class="fa-solid fa-plus"></i>Soạn thư
          </div>
          <div className="email_sidebar_section" id="active_section">
            <i class="fa-regular fa-envelope"></i>
            <p style={{ width: "92px" }}>Hộp thư đến</p>
            <div className="notice_number">99+</div>
          </div>
          <div className="email_sidebar_section">
            <i class="fa-regular fa-star"></i>
            <p>Quan trọng</p>
          </div>
          <div className="email_sidebar_section">
            <i class="fa-regular fa-paper-plane"></i>
            <p>Đã gửi</p>
          </div>
          <div className="email_sidebar_section">
            <i class="fa-solid fa-triangle-exclamation"></i> <p>Spam</p>
          </div>
          {/* <div className="email_sidebar_section">
            <p>Trò chuyện</p>
          </div>
          <div className="email_sidebar_section">
            <p>Nhóm</p>
          </div> */}
          <div className="email_sidebar_section" id="logout_section">
            <i class="fa-solid fa-arrow-right-from-bracket"></i>
            <p>Đăng xuất</p>
          </div>
        </div>
        <div className="email_mail_box_container">
          <div className="email_mail_box">
            <div className="email_mail_section_content">
              <div className="email_mail_section_content_avatar">
                <img
                  src="https://w.wallhaven.cc/full/1p/wallhaven-1pd1o9.jpg"
                  alt=""
                />
              </div>
              <div className="mail_content">
                <div className="mail_content_title">
                  <h2
                    style={{
                      fontWeight: "bold",
                      fontSize: "large",
                    }}
                  >
                    Thư mời : Mentoring Session 2
                  </h2>
                  <div style={{ display: "flex", columnGap: "6px" }}>
                    <i class="fa-regular fa-star"></i>
                    <p>10:00 AM</p>
                  </div>
                </div>
                <h5>Duong To</h5>
                <p
                  style={{
                    height: "90px",
                    overflow: "hidden",
                  }}
                >
                  Buổi Seminar sắp tới với chủ đề : "Mastering Market Research,
                  Startup Fundraising, and Venture Investment" của diễn giả
                  Nguyễn Công Thuỷ - CEO - Chuyên gia tư vấn cấp cao công ty
                  JobTest. Tại đây, sinh viên sẽ có cơ hội học hỏi từ các chuyên
                  gia ngành và những doanh nhân thành công đã đi trước trong
                  việc nghiên cứu thị trường, gọi vốn cho start-up, và đầu tư dự
                  án khởi nghiệp. Thời gian và Địa điểm: Thời gian: Thứ 5 ngày
                  28/09/2023 ( 6:00 PM - 7:30 PM ) Địa điểm: Nhà văn hoá sinh
                  viên Đại học Quốc gia Hồ Chí Minh Những điều bạn sẽ học được
                  khi tham gia buổi Seminar ngày (28/09/2023): Khắc phục nghiên
                  cứu thị trường: Nắm vững vai trò quan trọng của nghiên cứu thị
                  trường và học cách phân tích thị trường mục tiêu, đánh giá đối
                  thủ cạnh tranh và tìm hiểu sâu hơn về hành vi của khách hàng.
                  Chiến lược gọi vốn cho Start-up: Khám phá các phương án gọi
                  vốn cho doanh nghiệp khởi nghiệp, từ tự tài trợ và gọi vốn
                  cộng đồng đến các nhà đầu tư thiên thần và quỹ đầu tư rủi ro.
                  Nhận được những gợi ý cụ thể về cách chuẩn bị một bài thuyết
                  trình gọi vốn thành công. Kiến thức về Đầu tư Dự án Khởi
                  nghiệp: Đào sâu vào thế giới của đầu tư dự án khởi nghiệp. Học
                  cách thu hút các nhà đầu tư, thương lượng thỏa thuận và xây
                  dựng cơ sở cho sự phát triển bền vững của start-up. Đừng bỏ lỡ
                  cơ hội để khám phá những bí quyết thành công trong thế giới
                  khởi nghiệp. Hãy tham gia tại "Mastering Market Research,
                  Startup Fundraising, and Venture Investment" vào ngày 28 tháng
                  09, 2023!
                </p>
              </div>
            </div>
            <div
              className="email_mail_section_content"
              id="email_mail_box_selected"
            >
              <div className="email_mail_section_content_avatar">
                <img
                  src="https://w.wallhaven.cc/full/1p/wallhaven-1pd1o9.jpg"
                  alt=""
                />
              </div>
              <div className="mail_content">
                <div className="mail_content_title">
                  <h2
                    className="contain"
                    style={{
                      fontWeight: "bold",
                      fontSize: "large",
                    }}
                  >
                    Thư mời : Mentoring Session 2
                  </h2>
                  <div style={{ display: "flex", columnGap: "6px" }}>
                    <i class="fa-regular fa-star"></i>
                    <p>10:00 AM</p>
                  </div>
                </div>
                <h5>Duong To</h5>
                <p
                  style={{
                    height: "90px",
                    overflow: "hidden",
                  }}
                >
                  Buổi Seminar sắp tới với chủ đề : "Mastering Market Research,
                  Startup Fundraising, and Venture Investment" của diễn giả
                  Nguyễn Công Thuỷ - CEO - Chuyên gia tư vấn cấp cao công ty
                  JobTest. Tại đây, sinh viên sẽ có cơ hội học hỏi từ các chuyên
                  gia ngành và những doanh nhân thành công đã đi trước trong
                  việc nghiên cứu thị trường, gọi vốn cho start-up, và đầu tư dự
                  án khởi nghiệp. Thời gian và Địa điểm: Thời gian: Thứ 5 ngày
                  28/09/2023 ( 6:00 PM - 7:30 PM ) Địa điểm: Nhà văn hoá sinh
                  viên Đại học Quốc gia Hồ Chí Minh Những điều bạn sẽ học được
                  khi tham gia buổi Seminar ngày (28/09/2023): Khắc phục nghiên
                  cứu thị trường: Nắm vững vai trò quan trọng của nghiên cứu thị
                  trường và học cách phân tích thị trường mục tiêu, đánh giá đối
                  thủ cạnh tranh và tìm hiểu sâu hơn về hành vi của khách hàng.
                  Chiến lược gọi vốn cho Start-up: Khám phá các phương án gọi
                  vốn cho doanh nghiệp khởi nghiệp, từ tự tài trợ và gọi vốn
                  cộng đồng đến các nhà đầu tư thiên thần và quỹ đầu tư rủi ro.
                  Nhận được những gợi ý cụ thể về cách chuẩn bị một bài thuyết
                  trình gọi vốn thành công. Kiến thức về Đầu tư Dự án Khởi
                  nghiệp: Đào sâu vào thế giới của đầu tư dự án khởi nghiệp. Học
                  cách thu hút các nhà đầu tư, thương lượng thỏa thuận và xây
                  dựng cơ sở cho sự phát triển bền vững của start-up. Đừng bỏ lỡ
                  cơ hội để khám phá những bí quyết thành công trong thế giới
                  khởi nghiệp. Hãy tham gia tại "Mastering Market Research,
                  Startup Fundraising, and Venture Investment" vào ngày 28 tháng
                  09, 2023!
                </p>
              </div>
            </div>
            <div className="email_mail_section_content">
              <div className="email_mail_section_content_avatar">
                <img
                  src="https://w.wallhaven.cc/full/1p/wallhaven-1pd1o9.jpg"
                  alt=""
                />
              </div>
              <div className="mail_content">
                <div className="mail_content_title">
                  <h2
                    style={{
                      fontWeight: "bold",
                      fontSize: "large",
                    }}
                  >
                    Thư mời : Mentoring Session 2
                  </h2>
                  <div style={{ display: "flex", columnGap: "6px" }}>
                    <i class="fa-regular fa-star"></i>
                    <p>10:00 AM</p>
                  </div>
                </div>
                <h5>Duong To</h5>
                <p
                  className=""
                  style={{
                    height: "90px",
                    overflow: "hidden",
                  }}
                >
                  Buổi Seminar sắp tới với chủ đề : "Mastering Market Research,
                  Startup Fundraising, and Venture Investment" của diễn giả
                  Nguyễn Công Thuỷ - CEO - Chuyên gia tư vấn cấp cao công ty
                  JobTest. Tại đây, sinh viên sẽ có cơ hội học hỏi từ các chuyên
                  gia ngành và những doanh nhân thành công đã đi trước trong
                  việc nghiên cứu thị trường, gọi vốn cho start-up, và đầu tư dự
                  án khởi nghiệp. Thời gian và Địa điểm: Thời gian: Thứ 5 ngày
                  28/09/2023 ( 6:00 PM - 7:30 PM ) Địa điểm: Nhà văn hoá sinh
                  viên Đại học Quốc gia Hồ Chí Minh Những điều bạn sẽ học được
                  khi tham gia buổi Seminar ngày (28/09/2023): Khắc phục nghiên
                  cứu thị trường: Nắm vững vai trò quan trọng của nghiên cứu thị
                  trường và học cách phân tích thị trường mục tiêu, đánh giá đối
                  thủ cạnh tranh và tìm hiểu sâu hơn về hành vi của khách hàng.
                  Chiến lược gọi vốn cho Start-up: Khám phá các phương án gọi
                  vốn cho doanh nghiệp khởi nghiệp, từ tự tài trợ và gọi vốn
                  cộng đồng đến các nhà đầu tư thiên thần và quỹ đầu tư rủi ro.
                  Nhận được những gợi ý cụ thể về cách chuẩn bị một bài thuyết
                  trình gọi vốn thành công. Kiến thức về Đầu tư Dự án Khởi
                  nghiệp: Đào sâu vào thế giới của đầu tư dự án khởi nghiệp. Học
                  cách thu hút các nhà đầu tư, thương lượng thỏa thuận và xây
                  dựng cơ sở cho sự phát triển bền vững của start-up. Đừng bỏ lỡ
                  cơ hội để khám phá những bí quyết thành công trong thế giới
                  khởi nghiệp. Hãy tham gia tại "Mastering Market Research,
                  Startup Fundraising, and Venture Investment" vào ngày 28 tháng
                  09, 2023!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="email_mail_content">
          <div className="content_mail_container">
            <div className="content_mail">
              <div className="top">
                <div className="email_mail_section_content_avatar">
                  <img
                    src="https://w.wallhaven.cc/full/1p/wallhaven-1pd1o9.jpg"
                    alt=""
                  />
                </div>
                <div className="title_container">
                  <div className="email_mail_section_content_name">
                    <h2 style={{ margin: "unset" }}>Duong To</h2>
                    <p style={{ margin: "unset", color: "#B1B1B1" }}>
                      duongtt@gmail.com
                    </p>
                  </div>
                  <div className="email_mail_section_content_time">
                    <i class="fa-regular fa-star"></i>
                    <p>10:00 AM</p>
                  </div>
                </div>
              </div>

              <div className="email_message">
                Buổi Seminar sắp tới với chủ đề : "Mastering Market Research,
                Startup Fundraising, and Venture Investment" của diễn giả Nguyễn
                Công Thuỷ - CEO - Chuyên gia tư vấn cấp cao công ty JobTest. Tại
                đây, sinh viên sẽ có cơ hội học hỏi từ các chuyên gia ngành và
                những doanh nhân thành công đã đi trước trong việc nghiên cứu
                thị trường, gọi vốn cho start-up, và đầu tư dự án khởi nghiệp.
                Thời gian và Địa điểm: Thời gian: Thứ 5 ngày 28/09/2023 ( 6:00
                PM - 7:30 PM ) Địa điểm: Nhà văn hoá sinh viên Đại học Quốc gia
                Hồ Chí Minh Những điều bạn sẽ học được khi tham gia buổi Seminar
                ngày (28/09/2023): Khắc phục nghiên cứu thị trường: Nắm vững vai
                trò quan trọng của nghiên cứu thị trường và học cách phân tích
                thị trường mục tiêu, đánh giá đối thủ cạnh tranh và tìm hiểu sâu
                hơn về hành vi của khách hàng. Chiến lược gọi vốn cho Start-up:
                Khám phá các phương án gọi vốn cho doanh nghiệp khởi nghiệp, từ
                tự tài trợ và gọi vốn cộng đồng đến các nhà đầu tư thiên thần và
                quỹ đầu tư rủi ro. Nhận được những gợi ý cụ thể về cách chuẩn bị
                một bài thuyết trình gọi vốn thành công. Kiến thức về Đầu tư Dự
                án Khởi nghiệp: Đào sâu vào thế giới của đầu tư dự án khởi
                nghiệp. Học cách thu hút các nhà đầu tư, thương lượng thỏa thuận
                và xây dựng cơ sở cho sự phát triển bền vững của start-up. Đừng
                bỏ lỡ cơ hội để khám phá những bí quyết thành công trong thế
                giới khởi nghiệp. Hãy tham gia tại "Mastering Market Research,
                Startup Fundraising, and Venture Investment" vào ngày 28 tháng
                09, 2023!
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
