"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards } from "swiper/modules";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Dr Chong Mei Sian",
    role: "Senior Consultant Geriatrician",
    image: "https://www.thegeriatricpractice.sg/images/dr-chong-mei-sian.png",
    quote:
      "Dr Chong is an experienced geriatrician who is passionate about geriatric care, in particular dementia care."
  },
  {
    name: "Dr Chong Mei Sian",
    role: "Senior Consultant Geriatrician",
    image: "https://www.thegeriatricpractice.sg/images/dr-chong-mei-sian.png",
    quote:
      "With The Geriatric Practice, she hopes to bring a state of health and well being to older persons as much as possible, and to work with their families to improve the quality of life for older persons and their caregivers."
  },
  {
    name: "Dr Chong Mei Sian",
    role: "Senior Consultant Geriatrician",
    image: "https://www.thegeriatricpractice.sg/images/dr-chong-mei-sian.png",
    quote:
      "The scope of geriatric care spans healthy ageing (functional screening), through geriatric syndromes to attending to the care of older adults in the home setting."
  }
];

export default function TestimonialSection() {
  return (
    <section className="testimonial-section style-2">
      <div className="container">
        <div className="top-mediic-section testimonial-title">
          <div className="mediic-section-title">
            <h1>Testimonial</h1>
          </div>
        </div>
        <div className="testimonial-layout">
          <div className="testimonial-media">
            <img src="/testimonial-hero.jpg" alt="Doctor consultation" />
            <div className="testimonial-cta">
              <h4>Get Free Consultation</h4>
              <a href="contact-us.html">
                Appointment <span aria-hidden="true">&#8599;</span>
              </a>
            </div>
          </div>
          <div className="testimonial-swiper">
            <Swiper
              effect="cards"
              modules={[Autoplay, EffectCards]}
              autoplay={{ delay: 3200, disableOnInteraction: false }}
              cardsEffect={{ slideShadows: false, perSlideOffset: 10, perSlideRotate: 2 }}
              grabCursor
              loop
              className="testimonial-cards"
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={`${item.name}-${index}`}>
                  <div className="testimonial-card">
                    <div className="testimonial-quote" aria-hidden="true">
                      <span>&ldquo;</span>
                    </div>
                    <ul className="testimonial-rating" aria-label="Five star rating">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <li key={`star-${index}-${starIndex}`}>
                          <FaStar aria-hidden="true" focusable="false" />
                        </li>
                      ))}
                    </ul>
                    <p>{item.quote}</p>
                    <div className="testimonial-user">
                      <img src={item.image} alt={item.name} />
                      <div>
                        <h4>{item.name}</h4>
                        <span>{item.role}</span>
                      </div>
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
