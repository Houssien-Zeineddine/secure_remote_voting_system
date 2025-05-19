import React, { useState } from "react";
import collapse from "../../assets/Shape.svg";
import expand from "../../assets/expand.svg";
import "./style.css";

const Questions = () => {
  const questions = [
    {
      question: "Can I vote more than once?",
      answer:
        "No. Each voter is allowed to cast only one vote. Any attempt to vote more than once will be blocked and logged for security review.",
    },
    {
      question: "Why do you need my location and IP address?",
      answer:
        "Your location and IP are used to confirm that you're voting from an approved region and to prevent fraud. This information is securely processed and never shared.",
    },
    {
      question: "What devices and browsers are supported?",
      answer:
        "You can vote using most modern web browsers on desktop, tablet, or smartphone. However, avoid using VPNs, outdated browsers, or automated tools (like scripts), which may cause your session to be flagged.",
    },
    {
      question: "Can I change my vote after submitting it?",
      answer:
        "No. Once a vote is submitted and confirmed, it is final and cannot be changed. Please review your choices carefully before voting.",
    },
    {
      question: "What if I lose connection while voting?",
      answer:
        "If your session is interrupted before you submit your vote, you may log back in and complete the process. If you already submitted your vote, it will be saved and confirmed.",
    },
    {
      question: "How is my personal data protected?",
      answer:
        "Your data is encrypted and stored securely in accordance with best practices. We do not share personal information with any third parties.",
    },
    {
      question: "Who can I contact if I need help?",
      answer:
        "You can reach our support team info through the 'Contact Us' link on your dashboard. We're here to assist you throughout the voting process.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="questions-container">
      {questions.map((question, index) => (
        <div
          className={`question-box ${activeIndex === index ? "active" : ""}`}
          key={index}
        >
          <div
            className="question-header"
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          >
            <h4>{question.question}</h4>
            <div className="toggle-icon">
              <img
                src={activeIndex === index ? collapse : expand}
                alt={
                  activeIndex === index
                    ? "Collapse Question"
                    : "Expand Question"
                }
                width="24"
                height="24"
              />
            </div>
          </div>
          <div className="question-answer">
            <p>{question.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Questions;
