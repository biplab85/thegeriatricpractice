import { FiArrowUpRight } from "react-icons/fi";

const posts = [
  {
    title: "Functional Screening",
    excerpt:
      "Functional impairments, cognitive and affective problems are particularly prevalent among older patients, and can be improved with early recognition and treatment.",
    image: "https://www.thegeriatricpractice.sg/images/main-functional-screening.png",
    href: "#",
    date: "May 08, 2024",
    author: "The Geriatric Practice"
  },
  {
    title: "Cognitive Wellness",
    excerpt:
      "At The Geriatric Practice, we have a multidisciplinary group of geriatrician (with sub-speciality interest in cognition), nurse and neuropsychologists to help evaluate memory/ cognitive difficulties.",
    image:
      "https://www.thegeriatricpractice.sg/images/main-cognitive-wellness-and-brain-health.png",
    href: "#",
    date: "May 02, 2024",
    author: "The Geriatric Practice"
  },
  {
    title: "Geriatric Syndromes",
    excerpt:
      "Geriatric medicine is a specialty that focuses on health care of older adults. Common geriatric syndromes include impaired cognition, functional decline, falls, incontinence and sleep problems.",
    image: "https://www.thegeriatricpractice.sg/images/main-geriatric-syndromes_new.png",
    href: "#",
    date: "Apr 22, 2024",
    author: "The Geriatric Practice"
  }
];

export default function LatestBlogSection() {
  return (
    <section className="blog-section">
      <div className="container">
        <div className="top-mediic-section">
          <div className="mediic-section-title">
            <h1>
              Read Our
              <br />
              Latest Blog
            </h1>
          </div>
          <div className="mediic-btn">
            <a href="#">Read More</a>
          </div>
        </div>
        <div className="blog-grid">
          {posts.map((post) => (
            <article className="blog-single-box" key={post.title}>
              <div className="blog-thumb">
                <img src={post.image} alt={post.title} loading="lazy" />
                <div className="mediic-hover-box hover-bx" aria-hidden="true" />
                <div className="mediic-hover-box hover-bx2" aria-hidden="true" />
                <div className="mediic-hover-box hover-bx3" aria-hidden="true" />
                <div className="mediic-hover-box hover-bx4" aria-hidden="true" />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span>{post.date}</span>
                  <span className="blog-meta-dot" aria-hidden="true" />
                  <span>{post.author}</span>
                </div>
                <div className="blog-title">
                  <h2>
                    <a href={post.href}>{post.title}</a>
                  </h2>
                </div>
                <p className="blog-excerpt">{post.excerpt}</p>
                <a className="blog-link" href={post.href}>
                  Read More <FiArrowUpRight aria-hidden="true" focusable="false" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
