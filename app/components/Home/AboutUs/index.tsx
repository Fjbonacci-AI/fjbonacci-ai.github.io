import Image from "next/image";
import React from "react";
import styles from "./index.module.css";

const AboutUsSection = () => {
  return (
    <section className={styles.mainDiv}>
      <div className={`boxWrapper ${styles.contentWrapper}`}>
        <Image
          src={"/images/home/about-us.jpg"}
          alt={"Hero"}
          className={styles.heroImage}
          width={500}
          height={500}
        />
        <div className={styles.heroLeft}>
          <div className={styles.textWrapper}>
            <h2>About Us</h2>
            <div>
              <p>
                At Fjbonacci, we believe that the future of intelligence is
                generative. Named after the visionary Fibonacci sequence, which
                underpins growth and patterns in nature, we are dedicated to
                developing groundbreaking Generative AI products that empower
                businesses and individuals to innovate, create, and thrive in an
                ever-evolving world.
              </p>
              <p>
                Our mission is to redefine intelligence by building AI systems
                that don&apos;t just process information, but truly understand,
                learn, and generate novel solutions. We&apos;re a team of
                passionate AI researchers, engineers, and visionaries committed
                to pushing the boundaries of what&apos;s possible with
                artificial intelligence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
