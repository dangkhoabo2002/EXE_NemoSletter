import React from "react";
import "../css/Newsletter_page.css";
import Footer from "../components/Footer";

export default function Newsletter_page() {
  return (
    <>
      <div className="landing_newsletter">
        <div className="" id="taonewsletter">
          <img
            src="https://s3-alpha-sig.figma.com/img/b656/fe7d/619f103cd4beec52d3d969d110a52a33?Expires=1697414400&Signature=no55heBZjmb3jEtJz2zWNkvDD8WpvgZFLQg0F2cwZfYiYKbr1qMQC41H94f-PSbgHOUJcpktPAX8eFRad8yQSqcjR~6N3w2F3S5NwCXyxhsv~ydQnOalWlp8q-BbhTcwFav57CYk-kjXioUwyj4gS81uX96h2DR9Ss5G1R6JHhn8YO8HGxSCjEfvZa57zx~oH3wq2iaH2~5UQUW148WH6qfBkgcyhwBuhQE9cAMmsQxd69SGZAWilV7Y2kGsC-sVA1QZu1EyIf~dbicRx8qQ-fin~CTiWFtzIMpyC97gJDOyYjJzqVYnH4sEQcrvALA7kx0CN2AIhSaPLhEpo8CV-w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
          <div className="newsletter_page_top_titlesection">
            <p
              style={{
                fontWeight: "bold",
                fontSize: "68px",
                marginBottom: "0px",
                width: "700px",
              }}
            >
              Bạn có muốn mail trở nên khác biệt?
            </p>
            <p
              style={{
                fontSize: "1.5rem",
                color: "#858585",
                marginTop: "12px",
                width: "500px",
              }}
            >
              Tùy biến email gửi đi theo cách riêng của bạn với những mẫu
              newsletter sáng tạo.
            </p>
            <div
              className="button"
              id="button_dangkyngay"
              style={{ height: "50px", padding: "6px" }}
            >
              Tạo newsletter
            </div>
          </div>
          <div className=" "></div>
        </div>

        <div className="landing_newsletter_content">
          <div className="landing_newsletter_content_title">
            <div
              className="landing_section"
              style={{ paddingTop: "60px", paddingBottom: "60px" }}
            >
              <h1
                className="landing_cv_section_title"
                style={{ width: "600px" }}
              >
                Tạo newsletter riêng cho mail của bạn{" "}
              </h1>
              <p
                style={{
                  fontSize: "1.5rem",
                  color: "#858585",
                  width: "560px",
                  textAlign: "center",
                  margin: "unset",
                }}
              >
                Chúng tôi cung cấp đa dạng các mẫu newsletter để tối ưu hóa lựa
                chọn của người dùng
              </p>
            </div>
            <div className="landing_newsletter_section_choosingbar">
              <div
                className="choosingbar_title_newsletter"
                id="choosingbar_title_active"
              >
                Miễn phí{" "}
              </div>
              <div className="choosingbar_title_newsletter">Trả phí</div>
            </div>
          </div>
          <div
            className="landing_newsletter_section_img"
            style={{ paddingBottom: "100px", paddingTop: "80px" }}
          >
            <div className="landing_newsletter_section_img_frame">
              <img
                src="https://s3-alpha-sig.figma.com/img/6bbc/306b/65cacf44404573e819bc8964b75ac7ec?Expires=1697414400&Signature=lqt6Q09izjPlxuVtxoQP0fdhbPlBioNhMJIAu2F4o2jimbT7fSqCVpeWDLyyscx-ixFF434dkCq6zwC~9wnYxbvJVxZuqVz9t0maUY4HXFRVoAn2zhPuAj0deb3hhrEHrEGmQZToHUXJO4RlB2PSmsHGhws~a3MJxsHESeo80Xs2iOL-8Nj9GDvXWdfWPVw429ImnRtM7LoA2LKqj4lCLoY8AphndjSXTl5dMg6CznxwEEC9DrqlAofsXxY87XKOjA3-H9Thv7ROkC7fBaSD4D4Qpxi6HintbaP88YEDIgTmPeLtIV08DgAkIU4Zdw1HoGTPD34Fc2vcyo8D~Sx2Cg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
              />
            </div>
            <div className="landing_newsletter_section_img_frame">
              <img
                src="https://s3-alpha-sig.figma.com/img/5747/826a/39cddc08ad5ec9af681084989457fed4?Expires=1697414400&Signature=axD~Mt-hRCrEXDVOF4A6xjGyb~nOr8MLqd1sW7EPxhP6Nspoo5ezG802NagU6YoWELc5eHxsF7bNZvKTys3~raqO3tIZKLMWlPKjAS4Nf5wqX9guK0mp~wfPlsYSkkBzOqITeWcH-omQZ4PA~UcCMZ4KQtWxIUMAug-HFsHD2ZUvlUe5mm8sqJPT4qiJlYZB2-Yablm8~1dK3VLJNB2FWdntQn52wrQh5IItr6MEiH9Kqh13F6aSXqvS72UEPncIKJ1sA4Kyvavk4n9lupeSOq4bjD5TNi3BVXStc3to~AncjJX~V98Yl3~sCKsr1452OIvtp1F7LfHbqDc9uuyOSA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
              />
            </div>
            <div className="landing_newsletter_section_img_frame">
              <img
                src="https://s3-alpha-sig.figma.com/img/e9d7/a438/69330765b62ddb373ce3327651a39dad?Expires=1697414400&Signature=l1pKImK5fJGqT1I8NaGw~-~gpLeoN~U8~GF0OXAte3btKi2f9oLMNyimeMPpVWuLnpHh7ALVEss7A6IrFQ-AABDARljpyCpqD0sH93U3joOq3QaGhEQ3xMES86360g2u6tHcll1AoR8aydHyqzQeHXA5c-DXSpd06BSNqCz8X4PUHMS7-DjDQsHD~gI6WczWlQ5kkwbFD0lZbVTty6cxa65-4gs8yadOY0MJQ9VZ4AeVKGU0rAiVJgcDGoDfYQfcqA6BFIIBOSl3qontWeA5O~uaAbseviKRaaXumOkXUkmiy8jrKeX-Omc7vNx1GSenDZTJy3dzo0zfF1dXazz9Jw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
              />
            </div>

            <div className="landing_newsletter_section_img_frame">
              <img
                src="https://s3-alpha-sig.figma.com/img/1e30/3ed4/a163053e5f37b1888ff9f9a9f39c977e?Expires=1697414400&Signature=FLODg7x2STTVSccVt1wTeEI29DTUrjgIgzXwF~slu4WHDEj6YDNZFaTP-ujb2tcNpfR6I2WtC1O2NZZZZS49tE1xRWekPcN~DPHWGSmSO2vZuje5TBwtosazNX4LSTbzLGkN7HAyTzgq~8s-q4SyQPxkt3D9Sho4qu9Cy8nIlH-I8gWBEmLiRP2zI9BDyZV-IDts9~jmCf7LevO-7Hrbt1Z3YYao6nXQn5nXnHE79TmU9enZYTiieP7lY94~LuFy4qKZ85~kNDoPFJValzvcJDQ5emYBFFUo8wJYu~qXbFNHLs8kmHxY0oXQZGGVdwp5L2Dc1B8Bfj2AlnpVPuEvKA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
              />
            </div>
            <div className="landing_newsletter_section_img_frame">
              <img
                src="https://s3-alpha-sig.figma.com/img/73fd/434e/1da08af2a74e6252ddab2a5e35338e29?Expires=1697414400&Signature=TSTzIIVBR6csaLGe5cly7NeEI53p3-zLGh0BVa~SYyhjH2JEIkHmPm~JvvXDMbf68TOONOYroVgCH6~QIX7HOdysDMr2~Ukycx-faWvdz2uonIQv9~f7ys1u9zzdJQSMXNaKz5BWWDxtBs1eJaAPPprlvSScm5eN3FVRS~TjGiN7mjyuoPjxao-vvz7078KuUsMY0Vu~POp05l7MNg~DdASvBwQ~8ZR77W3KxmWRSBFy2zGfA6-cw6VeA46xR3CJ8yw~sKNTWQVoXulMLgIwbANvARwlxONRAzCqHsk4ghPL9biJaAWllVRi9cD718MIQjcD-hMACi6S8ZH9vEQKow__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
              />
            </div>
            <div className="landing_newsletter_section_img_frame">
              <img
                src="https://s3-alpha-sig.figma.com/img/c791/63ca/cc3b2ad93d763abdec29fc746fe430a3?Expires=1697414400&Signature=oUlLlmqK9OJKlwT19iRqr8M-Ee3yeEvXIGA9mYrtQq-nRrLxNSvfmRkvUYXkEZEH0rc2EjA~fgK4stMXh~pzq~ip0U5WpEninVT-azVtJCyC-lZ2Vmk2EZSqs03YZBTYexp2LjEoBCpaDdQYFy3wu9puQVyj6fNntq4NPjutkDIXMi60vs53LTNzL-~GoH1UZjmaSF8jm6P3hrs7049ZHN59cUXtyXMW~djjdTxnCZruXcMFQxURk6sHkRcP1ZenWa7bQDKrydF6oeguWulXll1PCfQlgbAQaX4UXkgSjEH3PBG2cfeoBm8CVdMl8NpUWqeGY-bzbERhZdJduWif4g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
