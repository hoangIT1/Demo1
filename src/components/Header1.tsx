// hoangit1/demo2/Demo2-9855f584a63b8f581c2297b365b2a42bf8b33caa/src/components/Header1.tsx
import { FunctionComponent, useState } from "react";
import styles from "./Header1.module.css";

export type Header1Type = {
  className?: string;
  sticky?: boolean;
};

const Header1: FunctionComponent<Header1Type> = ({ className = "" }, sticky = true) => {
  // State để quản lý việc menu có đang mở hay không
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
     <header className={[styles.header, !sticky && styles.nonSticky, className].filter(Boolean).join(" ")}>
      <div className={styles.headerContent}>
        {/* Logo */}
        <a href="/" className={styles.logoLink}>
          <img
            className={styles.logo}
            loading="lazy"
            alt="Mister International Logo"
            src="/Copy of IG0.png" // Giữ lại src logo của bạn
          />
        </a>

        {/* Nút Hamburger cho Mobile */}
        <button
          className={styles.hamburgerButton}
          onClick={() => setMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {/* Bạn có thể dùng icon ☰ hoặc đơn giản là 3 thẻ div */}
          <div className={styles.hamburgerLine} />
          <div className={styles.hamburgerLine} />
          <div className={styles.hamburgerLine} />
        </button>

        {/* Menu (Bao gồm cả nav links và social icons) */}
        {/* Thêm class 'menuOpen' khi isMenuOpen là true */}
        <div className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ""}`}>
          <nav className={styles.navLinks}>
            <a href="/">HOME</a>
            <a href="/mark-anthony">MARK ANTHONY</a>
            <a href="/competition">COMPETITION</a>
            <a href="/national-directors">NATIONAL DIRECTORS</a>
            <a href="/contestants">CONTESTANTS</a>
            <a href="/press">PRESS</a>
          </nav>
          <div className={styles.socialIcons}>
            <a href="#"><img alt="Facebook" src="/link--alttextlabelfacebook@2x.png" /></a>
            <a href="#"><img alt="Instagram" src="/link--alttextlabelinstagram@2x.png" /></a>
            <a href="#"><img alt="Twitter" src="/link--twitter@2x.png" /></a>
            <a href="#"><img alt="YouTube" src="/link--youtube@2x.png" /></a>
            <a href="#"><img alt="TikTok" src="/link--tiktok@2x.png" /></a>
          </div>
        </div>
      </div>
      <div className={styles.horizontalDivider} />
    </header>
  );
};

export default Header1;