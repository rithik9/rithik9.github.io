"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { links } from "@/data";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState<{ text: string; error?: boolean } | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    setNotice(null);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID || "",
        formRef.current,
        process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY || ""
      )
      .then(
        () => {
          setNotice({ text: "Message sent. Thanks for reaching out, I'll get back to you shortly." });
          formRef.current?.reset();
        },
        (error) => {
          setNotice({ text: "Failed to send message. Please try again in a bit.", error: true });
          console.error(error);
        }
      )
      .finally(() => setLoading(false));
  }

  return (
    <section className="content-section container section-grid contact-section" id="contact">
      <aside className="section-rail reveal">
        <span className="rail-index">03 / 03</span>
        <span className="rail-name">CONTACT</span>
        <div className="rail-rule" />
      </aside>

      <div className="section-main">
        <div className="section-heading reveal">
          <p className="overline">GET IN TOUCH</p>
          <h2>
            Contact<span>.</span>
          </h2>
          <p>Use the form, or reach me on LinkedIn.</p>
        </div>

        <div className="contact-content">
          <div className="reveal">
            <p className="contact-large">
              Open to <em>full stack and backend roles.</em>
            </p>
            <div className="social-links">
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn <span className="arrow">↗</span>
              </a>
              <a href={links.github} target="_blank" rel="noopener noreferrer">
                GitHub <span className="arrow">↗</span>
              </a>
              <a href={links.resume} target="_blank" rel="noopener noreferrer">
                Résumé <span className="arrow">↗</span>
              </a>
            </div>
          </div>

          <form className="contact-form reveal" ref={formRef} onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="from_name">YOUR NAME</label>
              <input id="from_name" name="from_name" placeholder="Name" required maxLength={100} disabled={loading} />
            </div>
            <div className="form-group">
              <label htmlFor="reply_to">EMAIL ADDRESS</label>
              <input id="reply_to" name="reply_to" type="email" placeholder="you@example.com" required maxLength={160} disabled={loading} />
            </div>
            <div className="form-group">
              <label htmlFor="message">YOUR MESSAGE</label>
              <textarea id="message" name="message" placeholder="What do you have in mind?" rows={4} required maxLength={3000} disabled={loading} />
            </div>
            <button className="submit" type="submit" disabled={loading}>
              {loading ? "SENDING..." : "SEND MESSAGE"} <span>↗</span>
            </button>
            {notice && (
              <p className={`notice${notice.error ? " error" : ""}`} role="status">
                {notice.text}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
