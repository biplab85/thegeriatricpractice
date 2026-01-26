"use client";

import { useState } from "react";

const steps = [
  {
    title: "Functional Screening",
    description:
      "Functional impairments, cognitive and affective problems are particularly prevalent among older patients, and can be improved with early recognition and treatment.",
    image: "/01.webp",
    imageAlt: "Functional Screening",
    backgroundClass: "box1"
  },
  {
    title: "Cognitive Wellness",
    description:
      "At The Geriatric Practice, we have a multidisciplinary group of geriatrician (with sub-speciality interest in cognition), nurse and neuropsychologists to help evaluate memory/ cognitive difficulties.",
    image: "https://www.thegeriatricpractice.sg/images/main-cognitive-wellness-and-brain-health.png",
    imageAlt: "Cognitive Wellness",
    backgroundClass: "box2"
  },
  {
    title: "Geriatric Syndromes",
    description:
      "Geriatric medicine is a specialty that focuses on health care of older adults. Common geriatric syndromes include impaired cognition, functional decline, falls, incontinence and sleep problems.",
    image: "https://www.thegeriatricpractice.sg/images/main-geriatric-syndromes_new.png",
    imageAlt: "Geriatric Syndromes",
    backgroundClass: "box3"
  },
  {
    title: "Advance Care Planning",
    description:
      "Involves conversations between healthcare professionals, patients and their family members about the patient's future healthcare plans.",
    image: "https://www.thegeriatricpractice.sg/images/main-advanced-care-planing.png",
    imageAlt: "Advance Care Planning",
    backgroundClass: "box4"
  }
];

export default function HowItWorksSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="works4-section-area sp6">
      <div className="container">
        <div className="heading4 text-center space-margin60">
          <h5 className="vl-section-subtitle">
            The Geriatric Practice<span> | </span> How it works
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="8" viewBox="0 0 13 8" fill="none">
              <path
                d="M0.667969 4.00033H11.049M8.00137 7.33366L11.3346 4.00033L8.0013 0.666992"
                stroke="#02015A"
                strokeWidth="1.5"
              />
            </svg>
          </h5>
          <div className="space24" />
          <h2 className="vl-section-title text-anime-style-3">
            <span className="block">Discover How The</span>
            <span className="block">Geriatric Practice Works</span>
          </h2>
        </div>
      </div>

      <div className="container">
        <div className="cs_case_study_1_list">
          {steps.map((step, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={step.title}
                className={`cs_case_study cs_style_1 cs_hover_active ${step.backgroundClass} ${
                  isActive ? "active" : ""
                }`}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                tabIndex={0}
                role="button"
                aria-pressed={isActive}
              >
                <div
                  className="cs_case_study_thumb cs_bg_filed"
                  style={{ backgroundImage: `url(${step.image})` }}
                  aria-hidden="true"
                />

                <div className="content-area1">
                  <div className="arrow">
                    <a href="#" onClick={(event) => event.preventDefault()}>
                      {index + 1}
                    </a>
                  </div>
                  <div className="text">
                    <a href="#" onClick={(event) => event.preventDefault()}>
                      {step.title}
                    </a>
                  </div>
                </div>

                <div className="content-area">
                  <div className="arrow2">
                    <a href="#" onClick={(event) => event.preventDefault()}>
                      {index + 1}
                    </a>
                  </div>
                  <div className="space32" />
                  <a href="#" className="head" onClick={(event) => event.preventDefault()}>
                    {step.title}
                  </a>
                  <div className="space16" />
                  <p>{step.description}</p>
                  <div className="space30" />
                  <div className="img1">
                    <img src={step.image} alt={step.imageAlt} loading="lazy" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
