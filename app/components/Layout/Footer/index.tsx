import React from "react";
import styles from "./index.module.css";
import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`boxWrapper ${styles.contentWrapper}`}>
        <div className={styles.logoWrapper}>
          <Image
            src={"/logo/dark/fjbonaccie_logo_landscape_dark_theme.png"}
            alt={"Logo"}
            className={styles.logo}
            width={1206}
            height={378}
          />
          <p>
            Unlock the Future of Innovation with Cutting-Edge Generative AI
            Products.
          </p>
        </div>

        <div className={styles.footerItemWrapper}>
          <h4>Quick Access</h4>
          <ul className={styles.links}>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={""}>Echo Note</Link>
            </li>
            <li>
              <Link href={"/privacy-policy"}>Privacy Policy</Link>
            </li>
            <li>
              <Link href={"/terms-and-conditions"}>Terms & Conditions</Link>
            </li>
          </ul>
        </div>

        <div className={styles.footerItemWrapper}>
          <h4>Contact Us</h4>
          <ul className={styles.contactDetails}>
            <li>
              <h6>Email</h6>
              <span>info@fjbonacci.com</span>
            </li>
            <li>
              <h6>Phone</h6>
              <span>+61 434 245 715</span>
              <span>+61 468 561 430</span>
            </li>
          </ul>
        </div>

        <div className={styles.footerItemWrapper}>
          <h4>Follow Us</h4>
          <ul className={styles.socialLinks}>
            <li>
              <Link href={"https://www.linkedin.com/company/fjbonacci/"}>
                <FaLinkedin />
              </Link>
            </li>
            <li>
              <Link href={"https://github.com/fjbonacci"}>
                <FaGithub />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
