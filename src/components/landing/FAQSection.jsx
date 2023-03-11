import { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div>
      <button
        className="flex items-center justify-between w-full p-4 font-medium text-left text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline-blue"
        onClick={handleToggle}
      >
        <span className="text-xl">{question}</span>
        <span>{isOpen ? <BsChevronUp /> : <BsChevronDown />}</span>
      </button>
      {isOpen && (
        <div className="px-4 py-2 text-lg text-gray-700 bg-gray-100 rounded-b-lg">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  const faqData = [
    {
      question: "What is a habit tracker app?",
      answer:
        "A habit tracker app is a tool that allows you to monitor and track your habits and routines over time. By keeping a record of your daily activities, you can identify patterns and make positive changes to your behavior.",
    },
    {
      question: "How does a habit tracker app work?",
      answer:
        "A habit tracker app typically allows you to create a list of habits you want to track, and then record whether or not you completed each habit each day. The app can generate reports and visualizations to help you see your progress and identify areas for improvement.",
    },
    {
      question: "Can I use a habit tracker app to build new habits?",
      answer:
        "Yes! A habit tracker app can be a great tool for building new habits. By setting specific goals and tracking your progress, you can stay motivated and hold yourself accountable.",
    },
    {
      question: "Is my data private and secure?",
      answer:
        "We take data privacy and security very seriously. All of your data is encrypted and stored securely, and we will never share your information with third parties without your permission.",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto py-24 border-t border-gray-300">
      <h2 className="text-4xl font-bold mb-12 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <FaqItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
