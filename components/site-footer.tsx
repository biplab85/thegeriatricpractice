import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const footerLinks = [
  { label: "Functional Screening", href: "#" },
  { label: "Cognitive Wellness", href: "#" },
  { label: "Geriatric Syndromes", href: "#" },
  { label: "Advance Care Planning", href: "#" }
];

export default function SiteFooter() {
  return (
    <footer className="footer-section relative overflow-hidden">
      <div
        className="pointer-events-none absolute right-[-160px] top-[-180px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.8),rgba(198,8,19,0.12))] blur-[1px]"
        aria-hidden="true"
      />
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>The Geriatric Practice</h3>
            <p>
              A personal relationship with medical excellence.
            </p>
            <a className="footer-link" href="#">
              Learn more <FiArrowUpRight aria-hidden="true" focusable="false" />
            </a>
            <div className="footer-social">
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
          <div className="footer-links">
            <h4>Consultation Services</h4>
            <ul>
              {footerLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Contact Info</h4>
            <p>101 Irrawaddy Road, #20-08</p>
            <p>Royal Square Medical Centre</p>
            <p>Singapore 329565</p>
            <p>
              Tel: <a href="#">(65) 6262 2864</a>
            </p>
            <p>
              Email:{" "}
              <a href="#">
                info@thegeriatricpractice.sg
              </a>
            </p>
            <p>
              24-hour hotline: <a href="#">(65) 8498 7384</a>
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>The Geriatric Practice</p>
          <p>A personal relationship with medical excellence.</p>
        </div>
      </div>
    </footer>
  );
}
