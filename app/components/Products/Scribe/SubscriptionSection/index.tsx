import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

const SubscriptionSection = () => {
  const subscriptionPlans = [
    {
      title: "Free Plan",
      imageUrl: "/images/scribe/feature1.png",
      price: "0$",
      priceType: "/month",
      description:
        "Ideal for individuals who want to try our medical scribing solution with limited usage.",
      features: [
        "Limited number of consultations per month",
        "Basic AI-powered transcription",
        "Secure cloud storage",
        "Access to standard templates",
      ],
      redirectUrl: "/",
      highlight: false,
    },
    {
      title: "Practitioner Plan",
      imageUrl: "/images/scribe/feature1.png",
      price: "XX$",
      priceType: "/month per user",
      description:
        "Designed for General Practitioners and Specialists who need reliable medical scribing for daily consultations.",
      features: [
        "Unlimited consultations",
        "Advanced AI-powered transcription with improved accuracy",
        "Customizable templates for specialties",
        "Telehealth integration",
        "Additional login for nurse/secretary",
        "Priority support",
      ],
      redirectUrl: "/",
      highlight: true,
    },
    {
      title: "Enterprise Plan",
      imageUrl: "/images/scribe/feature1.png",
      price: "Custom Pricing",
      priceType: "",
      description:
        "Tailored for healthcare organizations requiring scalable, high-performance scribing solutions with dedicated infrastructure.",
      features: [
        "All Practitioner Plan features",
        "Custom features based on organizational needs",
        "Dedicated hosting for enhanced security",
        "API access and integrations",
        "EHR system integration",
        "24/7 enterprise support",
      ],
      redirectUrl: "/",
      highlight: false,
      altBuyText: (
        <span>
          Interested in the Enterprise Plan?{" "}
          <span className={styles.highlightText}>Contact us</span> for a
          customized solution.
        </span>
      ),
    },
  ];
  return (
    <section className="boxWrapper">
      <div className={styles.contentWrapper}>
        <div className={styles.headerTextSection}>
          <h2>Get Started with Scribe</h2>
          <p>
            Flexible Subscription Options Tailored to Your Practice&apos;s
            Unique Documentation Needs
          </p>
        </div>
        {/* <div className={styles.header}>
          <h4>Get Started with Scribe</h4>
          <p></p>
        </div> */}

        <div className={styles.subscriptionGrid}>
          {subscriptionPlans.map((plan, index) => (
            <div
              key={index}
              className={`${styles.plan} ${
                plan.highlight ? styles.highlight : ""
              }`}
            >
              <h4>{plan.title}</h4>
              <Image
                src={plan.imageUrl}
                alt={plan.title}
                width={500}
                height={500}
              />
              <div>
                <span className={styles.price}>{plan.price}</span>
                <span className={styles.planFrequency}>{plan.priceType}</span>
              </div>
              <p className={styles.planDescription}>{plan.description}</p>
              <ul className={styles.features}>
                {plan.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              {plan.altBuyText ? (
                <div className={styles.altBuyTextWrapper}>
                  <p className={styles.altTextCta}>{plan.altBuyText}</p>
                  <Link href={plan.redirectUrl} className="ctaBtn">
                    <span>Contact Us</span>
                    <GoArrowUpRight className="ctaArrow" />
                  </Link>
                </div>
              ) : (
                <div className={styles.altBuyTextWrapper}>
                  <Link
                    href={plan.redirectUrl}
                    className={`ctaBtn ${styles.ctaBtnWrapper}`}
                  >
                    <span>Buy Now</span>
                    <GoArrowUpRight className="ctaArrow" />
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubscriptionSection;
