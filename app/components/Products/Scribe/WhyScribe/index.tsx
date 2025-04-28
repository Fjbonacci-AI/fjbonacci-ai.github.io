import React from "react";
import styles from "./index.module.css";

const WhyScribeSection = () => {
  const features = [
    {
      title: "Reduce Documentation Time",
      description: "Spend more time with patients, less on paperwork",
    },
    {
      title: "Improve Accuracy",
      description: "AI-powered scribing ensures precise documentation",
    },
    {
      title: "Enhance Efficiency",
      description:
        "Seamless workflow integration with telehealth & EHR (Enterprise)",
    },
    {
      title: "Secure & Compliant",
      description: "HIPAA-compliant data storage for maximum security",
    },
  ];
  return (
    <section className={styles.mainDiv}>
      <div className={`boxWrapper ${styles.contentWrapper}`}>
        <div className={styles.headerTextSection}>
          <h2>Why Scribe?</h2>
          <p>
            Delivering Unparalleled Value Through Time-Saving Automation and
            Clinical Precision
          </p>
        </div>
        {/* <div className={styles.header}>
          <h4>Why Scribe?</h4>
          <p>
            Key Highlights of Scribe that make it the best choice for your
            practice
          </p>
        </div> */}

        <div className={styles.featureGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.feature}>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyScribeSection;
