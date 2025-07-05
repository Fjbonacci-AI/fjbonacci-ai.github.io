import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./index.module.css";
import { GoArrowUpRight } from "react-icons/go";

const HeroSection = () => {
  return (
    <section
      style={{ backgroundImage: "url('/images/home/hero-background.png')" }}
      className={styles.mainDiv}
    >
      <div className={`boxWrapper ${styles.contentWrapper}`}>
        <div className={styles.heroLeft}>
          <div className={styles.textWrapper}>
            <h1>
              FJbonacci: Redefining{" "}
              <span className={styles.highlightText}>Intelligence</span>
            </h1>
            <p>
              Unlock the Future of Innovation with Cutting-Edge Generative AI
              Products.
            </p>
          </div>
          <Link href={"https://app.fjbonacci.com/"} className="ctaBtn">
            <span>Echo Note</span>
            <GoArrowUpRight className="ctaArrow" />
          </Link>
        </div>
        <Image
          src={"/images/home/hero.jpg"}
          alt={"Hero"}
          className={styles.heroImage}
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default HeroSection;
