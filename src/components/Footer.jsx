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
          <img
            src="https://scontent.xx.fbcdn.net/v/t1.15752-9/382319422_2948265998637115_607065943778768597_n.png?_nc_cat=100&ccb=1-7&_nc_sid=aee45a&_nc_ohc=m9fJTcTFQz4AX_Bijza&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSjYZQEYrvqERmSRe1mafU8au2SJgYf9-b7ZAqn47_f0w&oe=6545A431"
            alt="Logo"
          />
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
