import React from "react";
import "../css/Footer.css";
export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="title">
          <p>CƠ CHẾ BẢO MẬT</p>
          <p>QUY TẮC HOẠT ĐỘNG</p>
          <p>THÔNG TIN HỖ TRỢ</p>
        </div>
        <div className="contact">
          <img src="src\assets\Logo.png" alt="Logo" />
          <p style={{ paddingTop: "12px" }}>
            Hotline : 19000000 - Email: cskh@hotro.nemosletter.vns
          </p>
          <p>
            Chịu Trách Nhiệm Quản Lý Nội Dung : Nguyễn Đăng Khoa - Email:
            dangkhoakow2002@gmail.com
          </p>
          <p>
            Địa chỉ : Nhà Văn Hóa Sinh Viên TP.HCM VRG2+27X, Đ.Lưu Hữu Phước, P.
            Đông Hòa, Tx. Dĩ An, Tỉnh Bình Dương
          </p>
        </div>

        <div className="policy">
            <div id="fade_top_line"></div>
          <p>2023 Mọi quyền được bảo lưu, Nemosletter</p>
          <p>Chính sách quyền riêng tư | Điều khoản</p>
        </div>
        <div></div>
      </div>
    </>
  );
}
