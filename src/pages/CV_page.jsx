import React from "react";
import "../css/CV_page.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function CV_page() {
  return (
    <>
      <div className="landing_cv">
        <div className="CV_section_top">
          <div className="CV_section_top_title" id="dangkyngay">
            <p
              style={{
                fontWeight: "bold",
                fontSize: "68px",
                marginBottom: "0px",
                width: "450px",
              }}
            >
              Bạn muốn có CV riêng?
            </p>
            <p
              style={{
                fontSize: "1.5rem",
                color: "#858585",
                marginTop: "12px",
                width: "620px",
              }}
            >
              Nemosletwgiúp bạn dễ dàng tạo thiết kế chuyên nghiệp, chia sẻ và
              in ấn.
            </p>
            <div
              className="button"
              id="button_dangkyngay"
              style={{ width: "300px", height: "80px" }}
            >
              Taọ CV ngay{" "}
            </div>
          </div>
          <div className="CV_section_top_image">
            <img
              src="https://s3-alpha-sig.figma.com/img/2548/46ae/71a3734b4547d4dd8a00d0dc33d89795?Expires=1697414400&Signature=Rk2CYjlUU61aPBbz1oYetCPgOEsCuoTyuP52wRoIMEPfH~0mnVoJpzQETVFNXY-9pnIQYJzsscR3ubRWuY6CUeWOOqqctRCU5reO8y2HAhJSF2~9ZVBMxdouI2t4XfS59oI0gJKpWmcXQuVaxKKrtspJsK99crqBc~d36SkawGFhTiirJKI314po5bZ6ytu~UiWploOaWo83yHr7PemWFgqEh7pDXxNCzt1Ajacrniik~4A-doarIGH5lJWs-jOdgIRrf8UUEySrAZPnXR0CnAv8aylcWD8jqLA9n8hPtAUgVyOcUV7jdx5bBak3CU2k~Mb6A2gUzXJCRAWPBfNrVQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            />
          </div>
        </div>
        <div
          className="landing_section"
          style={{ paddingTop: "60px", paddingBottom: "60px" }}
        >
          <h1
            className="landing_cv_section_title"
            style={{ paddingBottom: "32px", width: "600px" }}
          >
            Tham khảo các mẫu CV theo phân loại{" "}
          </h1>
          <div className="landing_cv_section_choosingbar">
            <div className="choosingbar_title" id="choosingbar_title_active">
              Xu hướng
            </div>
            <div className="choosingbar_title">Học tập</div>
            <div className="choosingbar_title">Trường cao đẳng</div>
            <div className="choosingbar_title">Màu sắc</div>
            <div className="choosingbar_title">Công ty</div>
            <div className="choosingbar_title">Đồ họa</div>
          </div>
          <div
            className="landing_section_img"
            style={{ paddingBottom: "100px", paddingTop: "80px" }}
          >
            <div className="landing_section_img_frame">
              <img
                src="https://s3-alpha-sig.figma.com/img/8a6c/9a46/ad18635a4adf6cacf4defffac2ff08b7?Expires=1697414400&Signature=e9od0UIkiu6RYrr9dZvqiNW1ZFNS3pcpr~d1r9~5owdUGNetiREgMULf0y~w8vA7WSloKcdaANyi5npNxptRlk9GSZjZZhNRE7CZq2YXR1u9OILhFP-VrF1p3pyx39nU3mYMT7fjz65ZrMujSK~JgiWgnt1teCxJbQRlI8JHas2RKiznoz10hGjHgpVU6hqd6kd3v-TkeiOZGkZos2xb8KVUKJ7~qdaMVU-9~Lg2sISUW9ERPlP2l-N4aorMb59XznUQIeVJM3dbBaIzf2ocarEfS-qsiL-8nScs~rX4Lb5T14KujWEKUmnb8ROwdN61kX6VvXw8n7VOUDct-FSufA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
              />
            </div>
            <div className="landing_section_img_frame">
              <img
                src="https://s3-alpha-sig.figma.com/img/34e1/1436/c6592d59af970212c0f1e9039f935898?Expires=1697414400&Signature=jgSpa9IyW7beTLCschNIhpt6N2a9WhzywvOitbtsiEb3fwwrtlC37Ri1HIVF6lJbetBs30e2Ju8HssLMWd9egslLIUVD4Ob~grCGPtOb4gkXJLxdubOBv74JostCBiyTFdCR2dWSmK1rF~j0fXI7sK5DFKxBA3DOEPPpEu6Cn1WZIaeOjtKgO3w4xDPsG9JNs05A-eSFs5~gwKnq9XRHk--X5s-0xyzNhUWWcIdvO-q5BUfxzm-s99ik7NsesJImnOqKvGGp-2y4tysrqwuYQ7CA2GYKPoOYazVLuF2cI99lXulAUKsSzInf1BeLAUg0flM8ibzPcTqlKokc30LT5w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
              />
            </div>
            <div className="landing_section_img_frame">
              <img
                src="https://s3-alpha-sig.figma.com/img/14b9/93c3/d05cf1cee7ceed1f7be9f78af01b7984?Expires=1697414400&Signature=MVo05RHrf90FapRLeQPwER-a87BPBuSIRQvnAwHbN7IFgnKheBXMpE~NtP~atEpo1VvGRGnlQurmw3ciqqqVPd0l0fxKh7J8M4eIuCIKKzU79nUeIZ0Xb0Tb~iu3ibmADSjlzgV8Ex0FnjJj24D8XV4dgZFOmBTt0D8awezEYXQy7O41W6~ZlArBFs1KrFlEKwwXhPC~qZoWQrsEqCFScmKMOZUpZ~XJmXzGQiYEwpew~oZE4Rv~Ne4-GcyeQE13Vz1PbvVWC9D~xevqD0J3fyDzfJRQsY7jbmdFcf45MfmRvJd-E6qKSwtFAIuPqsLdTfBYO9NZxQUIMmShtLcqaA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
              />
            </div>

            <div className="landing_section_img_frame">
              <img
                src="https://s3-alpha-sig.figma.com/img/d001/b653/eaeb9274cf7ed6ca697524277d27ded1?Expires=1697414400&Signature=lkAxad1v~ysJLTwums31A1GrEScXNEOqJNHBnvmcIphANcPKrnVo-8u~4PJBCrjMUT~3EDKxdo~GZnDMaJKIWGqHHlNf4tSxb8wUVMsxyRoPfY9rN6ZgnTUY~~sdVOPSWftDpUVjUCV7tEZD6rDZl0ZMWJq9C4SVTdMlzobR8wy2B4-c-XonnTWPy1A0mpR0npEb5boX2Dx0g7ijPXw7gqcWeTZjovdcweHjZa20eHYM3vneVCmhJ60i66G6TrsmMnLmyqvIV2F9NagoUn13OLoxItenEhJwwfDtDi9tufXg5SxIEchwtZtHCzc7Z5~9cvJtydUMpWExgCbZoBGRLA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
              />
            </div>
            <div className="landing_section_img_frame">
              <img
                src="https://s3-alpha-sig.figma.com/img/1001/af85/7a4727cef67510a491a34ea91bf5e6e4?Expires=1697414400&Signature=g27XmYKOS6xz0Y4w~rmhPJTCMi1D7MWBUsBkRjhyiWFcQlE9yidiw8~TpWEBfC7FiCONBIxvBZ4wuhBYFH4rYz5A2g1lwVvOomoA5yCEWO9ij1KbPjnKWjfEeQgPsurSz7mo9N3HyLnU0gLZiI3K~z9W2n7~moyzcFMnd1eYFQek68SEJ4CM0kuu~vPTegrjvM0mh3EaEHdaMMfXfIbbpt8oj-BjTD1ziZCqt9cJp4qDP-0CxaiZzuZjSjNQHnq~yzzNq55sQq12~ljlxODaLuOOR57Ft5mEVLqL4n-TCZs1SZe0zdga57qeqch4BwfQGZtmbI2xYhPhmKXSmMHg0g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
              />
            </div>
            <div className="landing_section_img_frame">
              <img
                src="https://s3-alpha-sig.figma.com/img/6f2e/4f49/60ae1351f1b91a036045ea43f38fce26?Expires=1697414400&Signature=oLI5EZnxytO-hVgI3CO~Q2e7ryKjX28ATLXJvFz0RlLEO4kxpvHahEtaBln5f0A1tqBvKlFUPoicTfTJM7Zn5zUhqWcK-i74WrPWZg-q9FvCSX6ilseBOFoYt55v5OlXSk2tQ~HtHSvVChSu3xaz-Xrjdh6rBjbyo2Uh6HADo5XYt~3GCs4ks7s9ptFWNqf8Ms5N7XdsZrtlu587IRFoGu0nEFnBpAgv-SMOvnug9j~YaftU8VI~DtKuQnzH9xA~09sSwHT~PQ3s95FVK97aRE508L7YrJjJ-ZKL58kq02DTphdAU7mI4VE-NDmw6f--gB34i8Pj3Tfhd0CB4ThzQA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
              />
            </div>
          </div>
          <Link to={`cv_maker`} style={{ textDecoration: "none" }}>
            <div
              className="button"
              id="button_formore"
              style={{ fontWeight: "bold", fontSize: "22px" }}
            >
              Thiết kế ngay
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
