import { FiArrowUpRight, FiPhone } from "react-icons/fi";

export default function CtaFourSection() {
  return (
    <section className="cta4-section-area">
      <div className="container">
        <div className="cta4-grid">
          <div className="cta-content-area">
            <h2>Start Your Journey to Better Health Now</h2>
            <p>
              Contact us today to schedule your appointment and begin your journey to better
              health.
            </p>
            <div className="cta-actions">
              <a href="#" className="vl-btn4">
                Schedule an Appointment <FiArrowUpRight aria-hidden="true" focusable="false" />
              </a>
              <a href="#" className="phone">
                <FiPhone aria-hidden="true" focusable="false" /> (65) 6262 2864
              </a>
            </div>
          </div>
          <div className="cta-circle-area" aria-hidden="true">
            <div className="bg1">
              <img
                src="/cta/cta-bg1.webp"
                alt=""
              />
            </div>
            <div className="img1">
              <img
                src="/cta/cta-img4.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
