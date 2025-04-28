import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import styles from "./index.module.css";

const OverviewSection = () => {
  return (
    <section className={styles.mainDiv}>
      <div className={`boxWrapper ${styles.contentWrapper}`}>
        <div className={styles.headerTextSection}>
          <h2>AI-Powered Medical Scribing for Smarter Healthcare</h2>
          <p>Save time, enhance accuracy, and streamline your workflow</p>
        </div>
        <div className={styles.overviewWrapper}>
          <div className={styles.overviewContent}>
            <p>
              Our AI-powered medical scribing platform revolutionizes the way
              healthcare providers manage patient documentation. By automating
              the note-taking process, we help clinicians reclaim valuable time,
              reduce administrative burden, and minimize human error. With
              real-time transcription, intelligent summarization, and seamless
              EHR integration, our technology ensures that every patient
              encounter is accurately captured — freeing you to focus more on
              patient care rather than paperwork.
              <br />
              <br />
              Whether you’re in a busy hospital, a private practice, or a
              telehealth setting, our solution adapts to your workflow, improves
              documentation consistency, and enhances billing accuracy. Secure,
              HIPAA-compliant, and easy to deploy, our platform is built to
              support the future of healthcare — where clinical excellence meets
              operational efficiency.
            </p>
            <Link href={""} className="ctaBtn">
              <span>Get Started for Free</span>
              <GoArrowUpRight className="ctaArrow" />
            </Link>
          </div>
          <Image
            src={"/images/home/hero-image.png"}
            alt={"Overview"}
            className={styles.overviewImage}
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
