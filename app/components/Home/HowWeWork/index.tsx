import React from "react";
import styles from "./index.module.css";

const HowWeWorkSection = () => {
  const features = [
    {
      title: "Discovery & Consultation",
      img: "/images/scribe/time-illustration.png",
      description:
        "We begin by understanding your unique challenges and objectives.",
    },
    {
      title: "Solution Design",
      img: "/images/scribe/security-illustration.png",
      description:
        "Our experts craft a tailored Generative AI solution roadmap.",
    },
    {
      title: "Development & Integration",
      img: "/images/scribe/contact-illustration.png",
      description:
        "We build and seamlessly integrate our AI products into your existing infrastructure.",
    },
    {
      title: "Deployment & Optimization",
      img: "/images/scribe/idea-illustration.png",
      description:
        "We ensure smooth deployment and continuously optimize for peak performance.",
    },
    {
      title: "Ongoing Support & Innovation",
      img: "/images/scribe/robot-illustration.png",
      description:
        "We provide continuous support and explore new opportunities for AI-driven growth.",
    },
  ];
  return (
    <section className={styles.mainDiv}>
      <div className={`boxWrapper ${styles.contentWrapper}`}>
        <div className={styles.header}>
          <h4>How We Work</h4>
        </div>

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

export default HowWeWorkSection;
