import React from "react";
import styles from "./index.module.css";
import Image from "next/image";

const FeatureSection = () => {
  const features = [
    {
      title: "Time-Saving",
      img: "/images/scribe/time-illustration.png",
      description: "Automate documentation and focus on patient care",
    },
    {
      title: "Security",
      img: "/images/scribe/security-illustration.png",
      description: "End-to-end encryption with local data storage in Australia",
    },
    {
      title: "24/7 Support",
      img: "/images/scribe/contact-illustration.png",
      description: "Reliable assistance for uninterrupted workflow",
    },
    {
      title: "Intuitive Design",
      img: "/images/scribe/idea-illustration.png",
      description: "Seamless user experience with minimal training",
    },
    {
      title: "Automation",
      img: "/images/scribe/robot-illustration.png",
      description: "AI-powered reporting and summarization",
    },
  ];
  return (
    <section className={styles.mainDiv}>
      <div className={`boxWrapper ${styles.contentWrapper}`}>
        <div className={styles.headerTextSection}>
          <h2>Key Highlights of Scribe App</h2>
          <p>
            Comprehensive Features Designed to Transform Your Healthcare
            Documentation Workflow
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
              <Image
                src={feature.img}
                alt={feature.title}
                width={500}
                height={500}
              />
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
