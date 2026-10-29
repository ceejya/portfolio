import { useState } from "react";

const projects = [
  {
    name: "StoreCraft",
    description: "A commerce project shaped around making online shopping feel simple.",
    category: "E-commerce",
    url: "https://store-craft-blue.vercel.app",
    preview: "/images/storecraft-placeholder.jpg",
    previewAlt: "Temporary stock photo of a clothing display; the StoreCraft screenshot is coming soon.",
  },
  {
    name: "Oluwakemi Powerwerpol Ventures",
    description: "A business website built to give a brand a clear and welcoming home online.",
    category: "Business website",
    url: "https://oluwakemipowerwerpolventures.com",
    preview: "/images/ventures-placeholder.jpg",
    previewAlt: "Temporary stock photo of a bright office; the project screenshot is coming soon.",
  },
  {
    name: "Chat Application",
    description: "A messaging project exploring how people can connect through software.",
    category: "Web application",
    url: "https://chat-application-bdd32.web.app",
    preview: "/images/chat-placeholder.jpg",
    previewAlt: "Temporary stock photo of someone using a laptop; the project screenshot is coming soon.",
  },
];

const interests = [
  "Chess",
  "Rubik’s cubes",
  "Gaming",
  "Good conversations",
  "Learning new things",
];

function Wordmark({ footer = false }) {
  return (
    <a
      className={`wordmark${footer ? " footer-wordmark" : ""}`}
      href="#top"
      aria-label="John Ojasanya, home"
    >
      <span className="wordmark-mark" aria-hidden="true">JO</span>
      <span>John Ojasanya</span>
    </a>
  );
}

function Header() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <Wordmark />
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#work">Selected work</a>
          <a href="#about">A little about me</a>
          <a className="nav-contact" href="#contact">
            Say hello <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>
    </>
  );
}

function Hero() {
  return (
    <section className="hero page-width" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="availability-dot" aria-hidden="true" />
          Full-stack developer <span className="eyebrow-divider">/</span> Ibadan, Nigeria
        </p>
        <h1 id="hero-title">
          I like figuring out how things work — then making them{" "}
          <span>work better.</span>
        </h1>
        <p className="hero-intro">
          I’m John Ojasanya Similoluwa: a curious full-stack developer who turns
          real problems into thoughtful software, one question and one idea at a
          time.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">
            Explore my work <span aria-hidden="true">↘</span>
          </a>
          <a className="text-link" href="#about">
            Get to know me <span aria-hidden="true">↘</span>
          </a>
        </div>
        <div className="hero-footnote">
          <span className="footnote-line" aria-hidden="true" />
          <p>Curious by nature.<br />Developer by craft.</p>
        </div>
      </div>
      <div className="hero-portrait">
        <div className="portrait-frame">
          <img
            src="https://res.cloudinary.com/kpgyitec/image/upload/f_auto,q_auto,w_1000,c_fill,g_face/v1793274450/photo_2026-10-29_12-43-46.jpg"
            alt="Portrait of John Ojasanya Similoluwa"
            width="960"
            height="1280"
            fetchPriority="high"
            decoding="async"
          />
          <div className="portrait-caption">
            <span className="caption-index">01 / THE HUMAN</span>
            <span>Usually wondering “why?”</span>
          </div>
        </div>
        <span className="portrait-stamp" aria-hidden="true">
          JO<span>✳</span>
        </span>
      </div>
      <a className="scroll-cue" href="#work">
        <span aria-hidden="true">↓</span> Scroll to explore
      </a>
    </section>
  );
}

function Work() {
  return (
    <section className="work-section section-pad" id="work" aria-labelledby="work-title">
      <div className="page-width">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A few things I’ve made</p>
            <h2 id="work-title">
              Work with a reason<br />behind it<span className="accent-mark">.</span>
            </h2>
          </div>
          <p className="section-aside">
            Different ideas, same instinct: understand the problem first, then
            build something useful.
          </p>
        </div>
        <ul className="project-grid">
          {projects.map((project, index) => (
            <li
              className={`project-card${index === 0 ? " project-featured" : ""}`}
              key={project.name}
            >
              <figure className="project-preview">
                <img
                  src={project.preview}
                  alt={project.previewAlt}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
                <figcaption className="preview-label">
                  Temporary image <span aria-hidden="true">·</span> screenshot coming soon
                </figcaption>
              </figure>
              <div className="project-details">
                <p className="project-category">
                  {index === 0 ? "Featured project" : project.category}
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </p>
                <h3 className="project-name">{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <a
                  className="project-visit"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.name}, opens in a new tab`}
                >
                  View live project <span aria-hidden="true">↗</span>
                </a>
              </div>
            </li>
          ))}
        </ul>
        <p className="work-note">
          <span aria-hidden="true">✳</span> More projects are in the works.
          There’s always another problem worth exploring.
        </p>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about-section section-pad" id="about" aria-labelledby="about-title">
      <div className="page-width about-layout">
        <div className="about-heading">
          <p className="eyebrow">Away from the keyboard</p>
          <h2 id="about-title">
            There’s more to me than <span>the stack.</span>
          </h2>
          <div className="about-mark" aria-hidden="true">
            <span className="mark-square mark-square-one" />
            <span className="mark-square mark-square-two" />
            <span className="mark-square mark-square-three" />
            <span className="mark-square mark-square-four" />
          </div>
        </div>
        <div className="about-copy">
          <p className="about-lead">
            I’ve always been the person who wants to know what’s happening under
            the hood.
          </p>
          <p>
            That curiosity follows me everywhere: into a tricky bug, a chess
            game, a Rubik’s cube, or a conversation with someone who sees the
            world differently. I love learning, sharing what I know, and being
            around good people. And I’m just as happy taking a little time to
            myself to recharge.
          </p>
          <p>
            For me, building software isn’t only about writing code. It’s about
            asking better questions, seeing the moving parts, and finding a
            clear way forward.
          </p>
          <div className="interest-list" aria-label="Things I enjoy">
            {interests.map((interest) => <span key={interest}>{interest}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const isSubmitting = status.type === "submitting";

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.reportValidity() || isSubmitting) {
      return;
    }

    setStatus({ type: "submitting", message: "" });

    try {
      const response = await fetch(form.action, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const result = response.headers.get("content-type")?.includes("application/json")
        ? await response.json()
        : null;

      if (!response.ok) {
        throw new Error(
          result?.message
            || "Your note couldn’t be sent right now. Please try again or email me directly.",
        );
      }

      form.reset();
      setStatus({
        type: "success",
        message: "Thanks for reaching out. Your note is on its way.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error
          ? error.message
          : "Your note couldn’t be sent right now. Please try again or email me directly.",
      });
    }
  }

  return (
    <form
      className="contact-form"
      action="/api/contact"
      method="post"
      onSubmit={handleSubmit}
      aria-busy={isSubmitting}
    >
      <div className="form-heading">
        <span className="form-number">01 — DROP A NOTE</span>
        <span className="form-decoration" aria-hidden="true">✳</span>
      </div>
      <div className="form-field">
        <label htmlFor="name">Your name</label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          maxLength={100}
          required
          disabled={isSubmitting}
        />
      </div>
      <div className="form-field">
        <label htmlFor="email">Your email</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          maxLength={254}
          required
          disabled={isSubmitting}
        />
      </div>
      <div className="form-field">
        <label htmlFor="message">What’s on your mind?</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          maxLength={4000}
          required
          disabled={isSubmitting}
        />
      </div>
      <button className="button button-primary form-submit" type="submit" disabled={isSubmitting}>
        <span className="submit-label">{isSubmitting ? "Sending…" : "Send your note"}</span>
        <span className="submit-arrow" aria-hidden="true">↗</span>
      </button>
      <p className="form-status" data-state={status.type} role="status" aria-live="polite">
        {status.message}
      </p>
    </form>
  );
}

function Contact() {
  return (
    <section className="contact-section section-pad" id="contact" aria-labelledby="contact-title">
      <div className="page-width contact-layout">
        <div className="contact-copy">
          <p className="eyebrow">Have a good one in mind?</p>
          <h2 id="contact-title">
            Let’s make<br />something <span>meaningful.</span>
          </h2>
          <p>
            Have a problem to solve, an idea to explore, or just want to talk
            tech? I’d like to hear from you.
          </p>
          <a className="email-link" href="mailto:johnojasanya57@gmail.com">
            johnojasanya57@gmail.com <span aria-hidden="true">↗</span>
          </a>
          <div className="social-links" aria-label="Social profiles">
            <a href="https://github.com/ceejya" target="_blank" rel="noopener noreferrer">
              GitHub <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://www.linkedin.com/in/john-ojasanya-573438277"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-width footer-inner">
        <Wordmark footer />
        <p>Made with curiosity in Ibadan, Nigeria.</p>
        <a className="back-to-top" href="#top">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
