import React from 'react'
import HeaderContent from '../Components/HeaderContent/HeaderContent'
import Footer from '../Components/Footer/Footer'
import './PrivacyPolicy.css'

function PrivacyPolicy() {
  return (
    <>
      <HeaderContent />
      <div className="privacy-policy-container">
        <h1>Privacy Policy</h1>
        <p>
          <strong>Brew My Job</strong> (“we”, “us”, or “our”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
        </p>

        <section>
          <h2>1. Information We Collect</h2>
          <p>We collect several types of information to provide and improve our services:</p>
          <ul>
            <li><b>Personal Information:</b> Such as your name, email address, and contact details when you register or use our contact form.</li>
            <li><b>Usage Data:</b> Information on how you interact with our site, such as pages visited, time spent, and referring website.</li>
            <li><b>Uploaded Documents:</b> Resumes, cover letters, and other files you choose to upload for analysis.</li>
            <li><b>Cookies & Tracking:</b> We use cookies to enhance your experience and analyze traffic.</li>
          </ul>
        </section>

        <section>
          <h2>2. How We Use Your Information</h2>
          <ul>
            <li>To provide and maintain our service.</li>
            <li>To personalize your experience and offer relevant features.</li>
            <li>To communicate with you regarding updates, promotions, or support.</li>
            <li>To improve our platform based on user feedback and analytics.</li>
            <li>To detect, prevent, and address technical issues or abuse.</li>
          </ul>
        </section>

        <section>
          <h2>3. Sharing Your Information</h2>
          <ul>
            <li>We do <strong>not</strong> sell or rent your personal information to third parties.</li>
            <li>We may share data with trusted service providers who help us operate our site, provided they uphold strict privacy standards.</li>
            <li>We may disclose your information if required by law, regulation, or to protect our legal rights.</li>
          </ul>
        </section>

        <section>
          <h2>4. Cookies and Tracking Technologies</h2>
          <p>
            Brew My Job uses cookies and similar tracking technologies to enhance user experience, remember preferences, and gather usage analytics. You may adjust your browser settings to refuse cookies, but some site features may not function properly.
          </p>
        </section>

        <section>
          <h2>5. Data Security</h2>
          <p>
            We use commercially reasonable measures to protect your information. However, no online transmission or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2>6. Third-Party Links</h2>
          <p>
            Our site may contain links to third-party websites or services that are not operated by us. We are not responsible for the content or privacy practices of these third-party sites.
          </p>
        </section>

        <section>
          <h2>7. Children’s Privacy</h2>
          <p>
            Our service is not intended for children under 16. We do not knowingly collect personal information from children under 16. If we discover such data has been collected, we will take steps to delete it promptly.
          </p>
        </section>

        <section>
          <h2>8. Your Choices and Rights</h2>
          <ul>
            <li>You can access, update, or delete your personal information by contacting us.</li>
            <li>You may unsubscribe from promotional communications at any time.</li>
            <li>For any privacy-related questions or requests, contact us at <a href="mailto:ranishkalakshangsc@gmail.com">ranishkalakshangsc@gmail.com</a>.</li>
          </ul>
        </section>

        <section>
          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted here, and your continued use of Brew My Job after such changes constitutes acceptance.
          </p>
        </section>

        <section>
          <h2>10. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or our practices, please email us at <a href="mailto:ranishkalakshangsc@gmail.com">ranishkalakshangsc@gmail.com</a>.
          </p>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default PrivacyPolicy
