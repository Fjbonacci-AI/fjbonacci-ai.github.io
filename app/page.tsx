import FeatureSection from "./components/Products/Scribe/FeatureSection";
import HeaderSection from "./components/Products/Scribe/HeaderSection";
import OverviewSection from "./components/Products/Scribe/OverviewSection";
import SubscriptionSection from "./components/Products/Scribe/SubscriptionSection";
import WhyScribeSection from "./components/Products/Scribe/WhyScribe";
import styles from "./page.module.css";
// import ContactUsSection from "./components/Home/ContactUsSection";
// import HeroSection from "./components/Home/HeroSection";
// import OurTeamSection from "./components/Home/OurTeamSection";
// import ScribeProductSection from "./components/Home/ScribeProductSection";
// import TestimonialsSection from "./components/Home/TestimonialsSection";

export default function Home() {
  return (
    // <div className={styles.mainDiv}>
    //   <HeroSection />
    //   <ScribeProductSection />
    //   <TestimonialsSection />
    //   <OurTeamSection />
    //   <ContactUsSection />
    // </div>

    <div className={styles.mainDiv}>
      <HeaderSection />
      <OverviewSection />
      <FeatureSection />
      <WhyScribeSection />
      <SubscriptionSection />
    </div>
  );
}
