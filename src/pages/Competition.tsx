import { FunctionComponent } from "react";
import Header1 from "../components/Header1";
import Footer1 from "../components/Footer1";
import styles from "./Competition.module.css";

const CompetitionPage: FunctionComponent = () => {
  return (
    <div className={styles.pageContainer}>
      <Header1 />
      <main className={styles.mainContent}>
        {/* Container để căn giữa toàn bộ nội dung */}
        <div className={styles.contentWrapper}>
          
          {/* Title to rõ ràng */}
          <h1 className={styles.mainTitle}>MISTER KING INTERNATIONAL®</h1>
          <h2 className={styles.subTitle}>COMPETITION DETAILS</h2>

          {/* Đoạn văn bản đầu tiên */}
          <p className={styles.paragraph}>
            2023’s highly-anticipated event will feature 40 men from around the
            globe vying for the job of Mister King International, selected via
            events including personal statements, in-depth interviews, evening
            wear, and swimwear. The evening will culminate with the 1st Mister
            King International, Mark Anthony, crowning his successor.
          </p>
          <p className={styles.date}>September 25, 2025</p>

          {/* Dòng kẻ ngang */}
          <hr className={styles.divider} />

          {/* Đoạn text màu cam vàng */}
          <p className={styles.highlightText}>
            Mister King International 2023
          </p>

          <p className={styles.highlightText}>
            Presented by
          </p>

          {/* Bức ảnh đầu tiên */}
          <img
            src="/Picture2.png" // TODO: Thay thế ảnh của bạn
            alt="Competition Stage"
            className={styles.image}
          />

          

          {/* Subtitle */}
          <h3 className={styles.sectionTitle}>Mister King International 2023</h3>
          <h3 className={styles.sectionTitle}>Upcoming Events</h3>
          
          {/* Minisubtitle */}
          <p className={styles.miniSubtitle}>
            No events at the moment
          </p>

          {/* Ảnh 2 và 3 */}
          <img
            src="Copy of IG0.png" // TODO: Thay thế ảnh của bạn
            alt="Contestants in swimwear"
            className={styles.image}
          />
          <img
            src="Picture3.png" // TODO: Thay thế ảnh của bạn
            alt="Contestants in evening wear"
            className={styles.image}
          />

          <div className={styles.sponsorSection}>
            <h3 className={styles.sectionTitle}>OUR SPONSORS</h3>

            <div className={styles.finalImageContainer}>
              <img 
                src="/Copy of IG20.jpg"
                alt="Finalist 1" 
                className={styles.finalImage} 
              />
              <img 
                src="/Copy of IG21.jpg"
                alt="Finalist 2" 
                className={styles.finalImage} 
              />
              <img 
                src="Copy of IG22.jpg"
                alt="Finalist 3" 
                className={styles.finalImage} 
              />
            </div>
          </div>

        </div>
      </main>
      <hr className={styles.footerDivider} />
      <Footer1 />
    </div>
  );
};

export default CompetitionPage;