import React from "react";
import styles from "./page.module.css";

const PrivacyPolicy = () => {
  return (
    <section className={styles.mainDiv}>
      <div className="boxWrapper">
        <h1>Privacy Policy</h1>
        <p>
          Fjbonacci Pty Ltd (&quot;Fjbonacci&quot;, &quot;we&quot;,
          &quot;us&quot;, &quot;our&quot;) is committed to protecting your
          privacy and handling your personal information with transparency,
          fairness, and security. This Privacy Policy explains how we collect,
          use, disclose, store, and protect your personal information when you
          use our website, fjbonacci.com (&quot;Site&quot;), or interact with
          our services.
        </p>
        <p>
          We have adopted the Australian Privacy Principles (APPs) contained in
          the Privacy Act 1988 (Cth). The APPs govern how we collect, use,
          disclose, store, secure, and dispose of your personal information. A
          copy may be obtained from{" "}
          <a
            href="https://www.oaic.gov.au/"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Office of the Australian Information Commissioner
          </a>
          .
        </p>

        <h4>1. We&apos;re here to help. Get in touch.</h4>
        <p>
          If you have any questions or complaints about how we handle your
          information, you can contact us anytime at{" "}
          <a href="mailto:support@fjbonacci.com">support@fjbonacci.com</a>.
        </p>

        <h4>2. What information do we collect?</h4>
        <p>
          We collect and hold various categories of information to deliver and
          improve our services:
        </p>
        <ul>
          <li>
            Your general personal information (e.g., name, address, date of
            birth, contact details)
          </li>
          <li>
            Payment and claim information (e.g., credit card, bank details)
          </li>
          <li>
            Sensitive health information provided by practitioners or about
            patients (pseudonymised)
          </li>
          <li>
            Device and location information (e.g., IP address, web log data)
          </li>
          <li>Additional information you provide via surveys or contact</li>
          <li>
            De-identified information used in aggregate for service improvement
          </li>
          <li>Information collected by cookies and analytics tools</li>
          <li>Information collected for recruitment purposes</li>
        </ul>
        <p>
          If you choose not to provide requested information, it may limit our
          ability to fully deliver services.
        </p>

        <h4>3. How do we collect your information?</h4>
        <p>We collect information directly from you and third parties:</p>
        <ul>
          <li>During registration on our website or Platform</li>
          <li>Through communication (emails, chats, surveys)</li>
          <li>
            From your interactions with our website, Platform, and services
          </li>
          <li>
            From third-party service providers, partners, or verification
            sources
          </li>
        </ul>

        <h4>4. How do we use your information?</h4>
        <p>
          Your information helps us provide, maintain, and improve our services,
          ensure compliance, and enhance user experience:
        </p>
        <ul>
          <li>Enable access to the website, Platform, and services</li>
          <li>Improve and manage services and your experience</li>
          <li>Facilitate delivery of healthcare services</li>
          <li>Use de-identified data for service improvement</li>
          <li>Send service updates and important notices</li>
          <li>Provide support and respond to inquiries</li>
          <li>Marketing (with opt-out options)</li>
          <li>Comply with laws and assist authorities</li>
          <li>Process employment applications</li>
        </ul>
        <p>
          We won’t use your health information for other purposes without your
          consent.
        </p>

        <h4>5. Marketing and how to opt out</h4>
        <p>
          You can opt out anytime from marketing communications by clicking
          “unsubscribe” or contacting us. We never use health information for
          marketing or share your data with third parties to market to you
          without consent.
        </p>

        <h4>6. Do we store or share information outside of your country?</h4>
        <p>
          We store personal data in your local jurisdiction (e.g., Australia).
          Some functionality depends on third-party providers whose servers may
          be overseas. We ensure compliance via data processing agreements to
          protect your data.
        </p>

        <h4>7. Who do we share your information with?</h4>
        <p>We may share your information with:</p>
        <ul>
          <li>Employees and related companies</li>
          <li>Third-party suppliers and service providers</li>
          <li>Advisers, dealers, agents</li>
          <li>Payment processors</li>
          <li>Parties involved in asset transfers</li>
          <li>Others authorised by you or required by law</li>
        </ul>

        <h4>8. Using our website and Platform</h4>
        <p>
          We use cookies to enhance functionality. You can adjust browser
          settings to manage cookies. We also use analytics tools (excluding any
          sensitive health data) to improve user experience.
        </p>

        <h4>9. How do we protect your information?</h4>
        <ul>
          <li>Staff training on data security</li>
          <li>Bank-grade encryption (at rest and in transit)</li>
          <li>De-identification tools for sensitive data</li>
          <li>Secure storage and handling practices</li>
          <li>Regular deletion or de-identification of data</li>
        </ul>

        <h4>10. Your rights</h4>
        <p>You may request to:</p>
        <ul>
          <li>Access your information</li>
          <li>Correct or update your information</li>
          <li>Complain about our privacy practices</li>
        </ul>
        <p>
          We aim to respond within 30 days. Verification may be required.
          Contact us at our compliance email if you have questions or wish to
          exercise your rights.
        </p>

        <h4>11. Employees</h4>
        <p>
          We also collect and handle specific personal data of current or former
          employees, including general info, education, sensitive info, work
          history, and financial data. Employees may contact us with any
          questions.
        </p>

        <h4>12. Changes to this policy</h4>
        <p>
          We may update this Privacy Policy and notify you via the Platform and
          website. We encourage you to review it periodically.
        </p>
        <p>
          <b>Effective:</b> June 2025
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
