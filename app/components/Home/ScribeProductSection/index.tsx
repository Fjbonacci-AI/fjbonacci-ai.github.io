import Image from "next/image";
import React from "react";
import styles from "./index.module.css";

const ScribeProductSection = () => {
  return (
    <section className={styles.mainDiv} id="projects">
      <div className={`boxWrapper ${styles.contentWrapper}`}>
        <div className={styles.header}>
          <h4>What We Do (Our Products/Solutions)</h4>
          <p>
            Fjbonacci specializes in developing bespoke and off-the-shelf
            Generative AI products across various domains. Our solutions are
            designed to enhance creativity, automate complex tasks, and generate
            valuable insights.
          </p>
          {/* <Link href={"/scribe"} className="ctaBtn">
            <span>Learn More</span>
            <GoArrowUpRight className="ctaArrow" />
          </Link> */}
        </div>

        <div className={styles.imageGrid}>
          <div>
            <Image
              src={"/images/home/echonote.png"}
              alt={"Scribe Product"}
              width={500}
              height={500}
            />
            <h4>Echo Note</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScribeProductSection;
