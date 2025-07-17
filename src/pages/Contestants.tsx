import { FunctionComponent } from "react";
import Header1 from "../components/Header1";
import Footer1 from "../components/Footer1";
import styles from "./Contestants.module.css";

const ContestantsPage: FunctionComponent = () => {
  return (
    <div className={styles.pageContainer}>
      <Header1 sticky={false} />
      <main className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <h1 className={styles.pageTitle}>Let's Meet the 2025 Contestants</h1>
          <p className={styles.paragraph}>
            2025's highly-anticipated event will feature 50 men from around the
            globe vying for the job of Mister International, selected via
            events including personal statements, in-depth interviews, evening
            wear, and swimwear. The evening will culminate with the 16th Mister
            International, Samuel Nwajagu, crowning his successor.
          </p>
          <p className={styles.comingSoon}>COMING SOON</p>
        </div>
      </main>
      <Footer1 />
    </div>
  );
};

export default ContestantsPage;