export default function AboutSection() {
  const CheckIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0" />
      <path
        d="m6.93 10.588 4.12-4.119a.5.5 0 0 1 .707.707l-4.473 4.472a.5.5 0 0 1-.708 0L4.243 9.315a.5.5 0 1 1 .707-.707z"
        fill="#fff"
      />
    </svg>
  );

  return (
    <section className="about-serction">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="top-mediic-section">
            <div className="mediic-section-title">
              <h1>
                About Medical
                <span>
                  <img
                    src="https://html.tf.dreamitsolution.net/mediic1/assets/images/resource/star.png"
                    alt=""
                    aria-hidden="true"
                  />
                </span>
              </h1>
            </div>
              <div className="counter-single-box bx-2">
                <div className="odometer-wrapper counter-box-title">
                  <h1 className="odometer">10</h1>
                  <h1>+</h1>
                  <p className="counter-desc">YEARS OF EXPERIENCE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row about-bg align-items-center">
          <div className="col-lg-7">
            <div className="about-thumb">
              <img
                src="https://html.tf.dreamitsolution.net/mediic1/assets/images/resource/about.png"
                alt="Medical specialists meeting"
              />
              <div className="thumbs-bxs">
                <div className="icon">
                  <img
                    src="https://html.tf.dreamitsolution.net/mediic1/assets/images/resource/heart.png"
                    alt=""
                    aria-hidden="true"
                  />
                </div>
                <div className="text-circle" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250.5 250.5">
                    <path
                      d="M.25,125.25a125,125,0,1,1,125,125,125,125,0,0,1-125-125"
                      id="about-circle-path"
                    />
                    <text>
                      <textPath href="#about-circle-path" startOffset="0%">
                        NEOROLOGIST * GYNOCLOGIST * HEALTHCARE *
                      </textPath>
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="mediic-section-title2">
              <h4>ABOUT COMPANY</h4>
              <h3>
                Since 2007 We're working Medical group of more than 1200+ Patients help from our
                medical
              </h3>
            </div>
            <div className="about-service-list">
              <h4>We're Putting your Comfort List</h4>
              <ul>
                <li>
                  <CheckIcon />
                  Completely to syndicate
                  <span className="list-pd">
                    <CheckIcon />
                    24 Hrs Aumbulance Service
                  </span>
                </li>
                <li>
                  <CheckIcon />
                  Medical Surgical Services
                  <span className="list-pd">
                    <CheckIcon />
                    100% Satisfaction Rate
                  </span>
                </li>
                <li className="border-style">
                  <CheckIcon />
                  Instant Operations System
                  <span className="list-pd">
                    <CheckIcon />
                    Professional Doctors
                  </span>
                </li>
              </ul>
            </div>
            <div className="mediic-btn">
              <a href="#" data-text="More About">
                More About
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="mediic-shape" aria-hidden="true">
            <img
              src="https://html.tf.dreamitsolution.net/mediic1/assets/images/resource/dctr.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
