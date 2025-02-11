
import  { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    question: "What is HiveHaus?",
    answer: "HiveHaus is a platform for renting premium office houses.",
    image: "https://res.cloudinary.com/doozndhqq/image/upload/v1739197966/robert-bye-f6bKycd4UFc-unsplash_v9mieq.jpg"
  },
  {
    question: "How can I book a space?",
    answer: "You can book a space directly through our app or website.",
    image: "https://res.cloudinary.com/doozndhqq/image/upload/v1739197966/phil-desforges-IUrdCYJm1u4-unsplash_lcfbn8.jpg"
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept credit cards, bank transfers, and mobile payments through Sslcommerz",
    image: "https://i.imgur.com/QH1SUwO.jpeg"
  },
];

const QnASection = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0); // Default first question open

  const toggleAnswer = (index: number) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div className="flex flex-col mb-2 md:flex-row max-w-4xl mx-auto mt-8 p-4 gap-8">
      {/* Left Side: QnA Section */}
      <div className="flex-1">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 mb-4">
            <button
              onClick={() => toggleAnswer(index)}
              className={`w-full text-left py-3 text-lg font-semibold ${
                activeIndex === index ? "text-blue-600" : "text-black"
              }`}
            >
              {faq.question}
            </button>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden"
                >
                  <p className="p-3 text-gray-700">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Right Side: Image Changes */}
      <div className="flex-1">
        <AnimatePresence mode="wait">
          {activeIndex >= 0 && (
            <motion.img
              key={faqs[activeIndex].image}
              src={faqs[activeIndex].image}
              alt={`QnA image for ${faqs[activeIndex].question}`}
              className="w-full rounded-xl shadow-md"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default QnASection;





