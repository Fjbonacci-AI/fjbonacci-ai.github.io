import React from "react";
import styles from "./index.module.css";
import Image from "next/image";

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
          <h4>Why Choose Fjbonacci?</h4>
          {/* <p>
            Fjbonacci specializes in developing bespoke and off-the-shelf
            Generative AI products across various domains. Our solutions are
            designed to enhance creativity, automate complex tasks, and generate
            valuable insights.
          </p> */}
        </div>

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

export default HowWeWorkSection;
