import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiArrowUpRight, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const quickLinks = ["Home", "About Us", "Our Doctors", "Contact"];
const popularServices = [
  "Functional Screening",
  "Cognitive Wellness",
  "Geriatric Syndromes",
  "Advance Care Planning"
];

const contactItems = [
  {
    icon: FiMapPin,
    text: "101 Irrawaddy Road, #20-08, Royal Square Medical Centre, Singapore 329565"
  },
  { icon: FiPhone, text: "(65) 6262 2864" },
  { icon: FiMail, text: "info@thegeriatricpractice.sg" }
];

export default function BottomFooter() {
  return (
    <section className="vl-footer4-section-area">
      <div class="pointer-events-none absolute right-[-160px] top-[-180px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.8),rgba(198,8,19,0.12))] blur-[1px]"></div>
      <div className="container">
        <div className="vl-footer4-grid">
          <div className="vl-footer4-newsletter">
            <h3>Stay Connected With The Geriatric Practice</h3>
            <p>
              Receive clinic updates, eldercare insights, and resources for families supporting
              older adults.
            </p>
            <form className="vl-footer4-form" action="#">
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                aria-label="Email address"
                required
              />
              <button type="submit">
                Subscribe <FiArrowUpRight aria-hidden="true" focusable="false" />
              </button>
            </form>
          </div>
          <div className="vl-footer4-links">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="vl-footer4-links">
            <h4>Popular Services</h4>
            <ul>
              {popularServices.map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="vl-footer4-contact">
            <h4>Contact</h4>
            <ul className="vl-footer4-contact-list">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.text}>
                    <span className="icon">
                      <Icon aria-hidden="true" focusable="false" />
                    </span>
                    <span>{item.text}</span>
                  </li>
                );
              })}
            </ul>
            <div className="vl-footer4-social">
              <a href="#" aria-label="Facebook">
                <FaFacebookF aria-hidden="true" focusable="false" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn aria-hidden="true" focusable="false" />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram aria-hidden="true" focusable="false" />
              </a>
            </div>
          </div>
        </div>
        <div className="vl-footer4-bottom-area">
          <p>Copyright 2024 The Geriatric Practice. All rights reserved.</p>
          <div className="vl-footer4-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Support</a>
          </div>
        </div>
      </div>
    </section>
  );
}
