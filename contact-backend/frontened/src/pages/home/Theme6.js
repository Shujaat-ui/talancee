import React, { useState } from 'react';
import './Theme6.css';

const faqs = [
  {
    question: "What services does Talencee provide?",
    answer: "Talencee offers digital strategy, web & app development, UI/UX design, and marketing services."
  },
  {
    question: "How does Talencee ensure quality in every project?",
    answer: "We follow strict QA processes, regular code reviews, and client feedback cycles to ensure top-notch quality."
  },
  {
    question: "Can you customize services based on my business needs?",
    answer: "Absolutely! We tailor our solutions to fit your unique business goals and requirements."
  },
  {
    question: "What makes Talencee different from other agencies?",
    answer: "Our combination of creativity, strategy, and technology sets us apart, delivering end-to-end solutions."
  },
  {
    question: "How long does it take to complete a project?",
    answer: "Project timelines vary based on complexity, but we provide clear estimates and updates throughout the process."
  },
  {
    question: "Do you work with startups as well as established brands?",
    answer: "Yes! We collaborate with both emerging startups and well-established companies."
  },
  {
    question: "What if I don’t have a clear brand vision yet?",
    answer: "We help you define your brand vision through workshops, strategy sessions, and creative guidance."
  },
  {
    question: "How can I start a project with Talencee?",
    answer: "Simply reach out via our contact form or email, and we’ll schedule a consultation to kick things off."
  }
];

function Theme6() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        {/* Left Big Heading */}
       <div className="faq-left">
  <h1>
    FREQUENTLY<br /> 
    ASKED<br /> 
    QUESTIONS
  </h1>
  <p>Pages to find answers quickly.</p>
</div>


        {/* Right FAQ List */}
        <div className="faq-right">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                <span className="faq-toggle">{openIndex === index ? '-' : '+'}</span>
              </div>
              {openIndex === index && (
                <div className="faq-answer">
                  {faq.answer}
                </div>
              )}
              <hr />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Theme6;
