// hoangit1/demo2/Demo2-9855f584a63b8f581c2297b365b2a42bf8b33caa/src/components/Footer.tsx
import { FunctionComponent } from "react";
import styles from "./Footer1.module.css";

export type FooterType = {
  className?: string;
};

// Đổi tên component Footer thành tên có ý nghĩa hơn nếu cần, ví dụ: MainFooter
const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    // Sử dụng thẻ footer của HTML5
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.contentWrapper}>
        {/* Cột thông tin liên hệ */}
        <div className={styles.contactSection}>
          <h4>GET IN TOUCH</h4>
          <p>
            Talent Appearance: <a href="mailto:email">Email</a>
          </p>
          <p>
            National Directors and Brand Partnerships: <a href="mailto:email">Email</a>
          </p>
          <p>
            Public Relations: MIO Communications | <a href="mailto:email">Email</a>
          </p>
        </div>

        {/* Cột mạng xã hội */}
        <div className={styles.socialSection}>
          <h4>FOLLOW US</h4>
          <div className={styles.socialIcons}>
            <a href="#"><img alt="Facebook" src="/item--link--alttextlabelfacebook--alttextlabelfacebook@2x.png" /></a>
            <a href="#"><img alt="Instagram" src="/item--link--alttextlabelinstagram--alttextlabelinstagram@2x.png" /></a>
            <a href="#"><img alt="Twitter" src="/item--link--twitter--twitter@2x.png" /></a>
            <a href="#"><img alt="YouTube" src="/item--link--youtube--youtube@2x.png" /></a>
            <a href="#"><img alt="TikTok" src="/item--link--tiktok--tiktok@2x.png" /></a>
          </div>
        </div>
      </div>

      {/* Phần bản quyền */}
      <div className={styles.copyright}>
        ©2024 Mister International Company Limited dba Mister International
        Organization. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;