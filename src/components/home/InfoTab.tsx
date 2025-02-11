// "use client";
// import React, { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { tabs } from "../../constants/constant";
// import { useMediaQuery } from "../../hooks/custom-hooks";



// function InfoTab() {
//   const [activeIndex, setActiveIndex] = useState<number | null>(0);

//   const handleClick = async (index: number) => {
//     setActiveIndex(activeIndex === index ? index : index);
//   };
//   const isDesktop = useMediaQuery("(min-width: 768px)");

//   return (
//     <>
//       <div className="md:grid grid-cols-12 p-2 items-center mx-0 md:mx-2 justify-center my-10 2xl:justify-items-center 2xl:w-11/12 2xl:mx-auto w-full h-full">
//         <div className="rounded-sm col-span-5">
//           {tabs.map((tab, index) => (
//             <motion.div
//               key={index}
//               className={`rounded-lg overflow-hidden mb-2  ${
//                 activeIndex === index
//                   ? "active border-2 dark:border-[#656fe2]  border-[#F2F2F2] dark:bg-[#E0ECFB] bg-[#F2F2F2]"
//                   : "bg-transparent border-2 dark:hover:border-[#656fe2]"
//               }
//             `}
//               onClick={() => handleClick(index)}
//             >
//               <h3
//                 className={`p-4 cursor-pointer transition-all font-semibold    dark:text-white text-black dark:hover:bg-[#1e2a78] hover:bg-[#F2F2F2] dark:hover:text-white hover:text-black flex justify-between items-center ${
//                   activeIndex === index
//                     ? "active  dark:bg-[#1e2a78] bg-[#F2F2F2] "
//                     : "dark:bg-[#11112b] bg-white"
//                 }
//                `}
//               >
//                 {tab.title}
//               </h3>
//               <AnimatePresence mode="sync">
//                 {activeIndex === index && (
//                   <motion.div
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: "auto", opacity: 1 }}
//                     exit={{ height: 0, opacity: 0 }}
//                     transition={{
//                       duration: 0.3,
//                       ease: "easeInOut",
//                       delay: 0.14,
//                     }}
//                   >
//                     <p className={`dark:bg-white bg-[#F2F2F2] text-black p-3`}>
//                       {tab.description}
//                     </p>
//                     <img
//                       src={tab.imageUrl}
//                       alt={tab.title}
//                       className="mb-2 max-w-full h-full md:hidden block  rounded-md object-cover"
//                     />
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </motion.div>
//           ))}
//         </div>
//         <>
//           {isDesktop &&
//             tabs.map((tab, index) => {
//               return (
//                 <React.Fragment key={index}>
//                   <AnimatePresence mode="popLayout" key={index}>
//                     {activeIndex === index && (
//                       <motion.div className="p-4 h-[400px] overflow-hidden col-span-7">
//                         <motion.img
//                           src={tab.imageUrl}
//                           alt={tab.title}
//                           className="mb-2 max-w-full h-full  rounded-md object-cover"
//                           width={800}
//                           initial={{ opacity: 0, overflow: "hidden" }}
//                           animate={{ opacity: 1, overflow: "hidden" }}
//                           exit={{ opacity: 0, overflow: "hidden" }}
//                           transition={{
//                             duration: 0.4,
//                             delay: 0.2,
//                           }}
//                           height={800}
//                         />
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </React.Fragment>
//               );
//             })}
//         </>
//       </div>
//     </>
//   );
// }

// export default InfoTab;





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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="flex flex-col md:flex-row max-w-4xl mx-auto mt-8 p-4 gap-8">
      {/* Left Side: QnA Section */}
      <div className="flex-1">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 mb-4">
            <button
              onClick={() => toggleAnswer(index)}
              className="w-full text-left py-3 text-lg font-semibold text-black"
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
          {activeIndex !== null && (
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





