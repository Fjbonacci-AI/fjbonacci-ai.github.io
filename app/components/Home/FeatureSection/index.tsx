import React from "react";
import styles from "./index.module.css";
import Image from "next/image";

const WhyUsSection = () => {
  const features = [
    {
      title: "Pioneering Expertise",
      img: "/images/scribe/time-illustration.png",
      description:
        "We are at the forefront of Generative AI research and development, bringing you the latest advancements.",
    },
    {
      title: "Customized Solutions",
      img: "/images/scribe/security-illustration.png",
      description:
        "We understand that every business is unique. Our products are flexible and can be tailored to your specific needs.",
    },
    {
      title: "Scalability & Performance",
      img: "/images/scribe/contact-illustration.png",
      description:
        "Our AI solutions are built for performance, designed to handle large-scale operations and deliver results efficiently.",
    },
    {
      title: "Ethical AI Practices",
      img: "/images/scribe/idea-illustration.png",
      description:
        "We are committed to developing and deploying AI responsibly, with a focus on fairness, transparency, and accountability.",
    },
    {
      title: "Dedicated Support",
      img: "/images/scribe/robot-illustration.png",
      description:
        "Our team of experts provides comprehensive support, from integration to ongoing optimization.",
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

export default WhyUsSection;
