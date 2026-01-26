"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { FaBehance, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const partners = [
  {
    name: "Dr Donald Yeo",
    role: "Clinical Neuropsychologist",
    credentials: ["DPsych (Clinical Neuropsychology)"],
    image: "https://www.thegeriatricpractice.sg/images/Dr-Donald-Yeo.jpg"
  },
  {
    name: "Charmaine Magnus",
    role: "Principal Occupational Therapist",
    credentials: [
      "Diploma in Occupational Therapy (NYP, SG)",
      "BHSc (Occupational Therapy) (SYD, AUST)"
    ],
    image: "https://www.thegeriatricpractice.sg/images/Charmaine-Magnus.jpg"
  },
  {
    name: "Esther Goh",
    role: "Senior Physiotherapist",
    credentials: [
      "Diploma in Physiotherapy (NYP, SG)",
      "Msc in Neurological Physiotherapy (HKPU)"
    ],
    image: "https://www.thegeriatricpractice.sg/images/Ester-Goh.jpg"
  },
  {
    name: "Lynnette Chan",
    role: "Principal Speech Therapist",
    credentials: [
      "MHlthSCI (Sp-Lang Pathology) SYD, Aust",
      "BAppSc (Speech Pathology) SYD, Aust"
    ],
    image: "https://www.thegeriatricpractice.sg/images/Lynnette-Chan.jpg"
  },
  {
    name: "Dr Joy Lim",
    role: "Clinical Psychologist",
    credentials: ["B.Sc.(Hons)", "DPsych(Clin)"],
    image: "https://www.thegeriatricpractice.sg/images/dr-joy-lim.jpg"
  },
  {
    name: "Jenny Tan",
    role: "Principal Physiotherapist",
    credentials: [
      "Diploma in Physiotherapy, NYP, SG",
      "Bachelor of Physiotherapy, Curtin, AU",
      "MPhysio(NeuroPhysio), Unimelb, AU"
    ],
    image: "https://www.thegeriatricpractice.sg/images/jenny-tan.jpg"
  },
  {
    name: "Goh Lay Yen",
    role: "Principal Physiotherapist",
    credentials: [
      "BSc (Physiotherapy), Curtin, AU",
      "ACSM Clinical Exercise Physiologist, USA"
    ],
    image: "https://www.thegeriatricpractice.sg/images/goh-lay-yen.jpg"
  },
  {
    name: "Mong Yiqin",
    role: "Senior Physiotherapist",
    credentials: [
      "Diploma in Physiotherapy (NYP, SG)",
      "Msc in Physiotherapy (HKPU)"
    ],
    image: "https://www.thegeriatricpractice.sg/images/mong-yiqin.jpg"
  },
  {
    name: "Charmaine Toh",
    role: "Consultant Dietitian",
    credentials: ["BSc(Nutr), PGDipDiet"],
    image: "https://www.thegeriatricpractice.sg/images/charmaine-toh.jpg"
  },
  {
    name: "Michele Wong",
    role: "Principal Dietitian",
    credentials: ["Bsc(Nutr), M.Nutr.Diet., Grad.Cert.Sports Nutr, APD"],
    image: "https://www.thegeriatricpractice.sg/images/michele-wong.jpg"
  },
  {
    name: "Prithvi Balaji",
    role: "Physiotherapist",
    credentials: ["BPT, CLT(Klose, US)"],
    image: "https://www.thegeriatricpractice.sg/images/prithvi-balaji.jpg"
  },
  {
    name: "Wang CuiJing",
    role: "Principal Physiotherapist",
    credentials: [
      "BSc Physiotherapy (Hons), GCU (UK)",
      "Polestar Pilates trained (Asia)"
    ],
    image: "https://www.thegeriatricpractice.sg/images/wang-cuijing.jpg"
  },
  {
    name: "Lee Tien Li",
    role: "Wound and Stoma Care Nurse Clinician",
    credentials: ["BHSc (nursing), WOCN, Wound Expert ICW"],
    image: "https://www.thegeriatricpractice.sg/images/lee-tien-li.jpg"
  }
];

export default function PartnersTeamSection() {
  return (
    <section className="team-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="top-mediic-section">
              <div className="mediic-section-title">
                <h1>
                  Meet Our
                  <br />
                  Partners
                </h1>
              </div>
              <div className="counter-single-box bx-2">
                <div className="odometer-wrapper counter-box-title">
                  <h1>{partners.length}</h1>
                  <h1>+</h1>
                  <p className="counter-desc">OUR PARTNERS</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mediic-shape" aria-hidden="true">
            <img
              src="https://html.tf.dreamitsolution.net/mediic1/assets/images/resource/crcle-bg.png"
              alt=""
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Swiper
              modules={[Autoplay, EffectCoverflow]}
              effect="coverflow"
              coverflowEffect={{
                rotate: 22,
                stretch: 0,
                depth: 140,
                modifier: 1,
                slideShadows: false
              }}
              centeredSlides
              loop={partners.length > 3}
              autoplay={{ delay: 3200, disableOnInteraction: false }}
              grabCursor
              spaceBetween={24}
              breakpoints={{
                0: { slidesPerView: 1.1, spaceBetween: 16 },
                640: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 24 }
              }}
              className="style-2 team"
            >
              {partners.map((partner) => (
                <SwiperSlide key={partner.name}>
                  <div className="team-single-box">
                    <div className="team-thumb">
                      <img src={partner.image} alt={partner.name} />
                      <div className="social-icon" aria-hidden="true">
                        <ul>
                          <li>
                            <a href="#" aria-label="Facebook">
                              <FaFacebookF aria-hidden="true" focusable="false" />
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="LinkedIn">
                              <FaLinkedinIn aria-hidden="true" focusable="false" />
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="Behance">
                              <FaBehance aria-hidden="true" focusable="false" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="team-content text-center">
                      <h5>{partner.role}</h5>
                      <h2>{partner.name}</h2>
                      {partner.credentials.map((line) => (
                        <p className="team-credentials" key={line}>
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
