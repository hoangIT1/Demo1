// src/pages/WLight1.tsx
import { FunctionComponent } from "react";
import Header1 from "../components/Header1";
import ImageSlider from "../components/ImageSlider"; // <--- 1. IMPORT COMPONENT MỚI
import Section1 from "../components/Section1";
import Footer1 from "../components/Footer1";
import styles from "./WLight1.module.css";

const WLight1: FunctionComponent = () => {
  return (
    <div className={styles.pageContainer}>
      <Header1 />

      <main className={styles.mainContent}>
        {/* === Hero Section === */}
        <section className={`${styles.heroSection} ${styles.sectionPadding}`}>
          <div className={styles.centeredContent}>
            <h1 className={styles.mainTitle}>
              MISTER
              <br />
              INTERNATIONAL
            </h1>
            <h2 className={styles.subTitle}>- Distinctively Confident -</h2>
          </div>
        </section>

        {/* === SLIDER ĐƯỢC CHÈN VÀO ĐÂY === */}
        <ImageSlider /> 

        {/* === Who We Are & Initiatives Section === */}
        <section className={`${styles.infoSection} ${styles.sectionPadding}`}>
          <div className={styles.centeredContent}>
            <h2 className={styles.sectionTitle}>WHO WE ARE</h2>
            {/* ... nội dung còn lại giữ nguyên ... */}
            <p className={styles.paragraph}>
              The Mister International Organization (MIO) is a global, inclusive
              organization that celebrates all cultures, backgrounds and
              religions. We create and provide a safe space for men to share
              their stories and drive impact personally, professionally, and
              philanthropically. The men who participate in this international
              platform serve as inspirational leaders and role models to their
              communities and fans around the world.
            </p>
            <h2 className={styles.sectionTitle}>OUR INITIATIVES</h2>
            <p className={styles.paragraph}>
              MIO prioritizes giving back to our communities through an
              international platform of charitable partnerships. As leaders and
              role models, our delegates and titleholders create positive
              change by volunteering, fundraising, and advocacy.
            </p>
          </div>
          <img
            className={styles.fullWidthImage}
            alt="Stage with contestants"
            src="/container-1@2x.png"
          />
        </section>

        {/* ... các section còn lại giữ nguyên ... */}
        
        <section className={`${styles.sectionPadding}`}>
          <div className={styles.centeredContent}>
            <h2 className={styles.sectionTitle}>WHAT DRIVES US</h2>
            <p className={styles.paragraph}>
              The Mister International Organization exists to advocate for a
              future forged by men - men with the courage to push the limits of
              what’s possible, who are curious enough to make world-shaking
              discoveries, and audacious enough to do this over and over. We
              believe that the future of humanity rests on reaching gender
              equity around the world.
            </p>
          </div>

          <div className={styles.twoColumns}>
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>RUN FOR MEN</h3>
              <p className={styles.paragraph}>
                MIO empowers men to realize their Personal, Professional and
                ambition and build self-confidence as a catalyst for future
                success. The MIO community is a brotherhood that is committed to
                uplifting one another. We celebrate handsomeness, All form of
                it, And Provide the tools that help men to feel their most
                handsome.
              </p>
              <img
                className={styles.columnImage}
                alt="Run for men"
                src="/container-2@2x.png"
              />
            </div>
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>CREATING OPPORTUNITIES</h3>
              <p className={styles.paragraph}>
                MIO delegates and titleholders are able to cultivate their
                personal, professional, and philanthropic goals. These young
                men are forward-thinking and motivated not just to talk about
                change, but to enact it.
              </p>
              <img
                className={styles.columnImage}
                alt="Creating opportunities"
                src="/container-3@2x.png"
              />
            </div>
          </div>
        </section>

        <Section1 />
      </main>

      <Footer1 />
    </div>
  );
};

export default WLight1;