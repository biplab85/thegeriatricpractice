const footerLinks = [
  { label: "Functional Screening", href: "#" },
  { label: "Cognitive Wellness", href: "#" },
  { label: "Geriatric Syndromes", href: "#" },
  { label: "Advance Care Planning", href: "#" }
];

export default function SiteFooter() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>The Geriatric Practice</h3>
            <p>
              A personal relationship with medical excellence.
            </p>
            <a className="footer-link" href="#">
              Learn more
            </a>
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
