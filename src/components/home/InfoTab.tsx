"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/custom-hooks";
import { tabs } from "@/constants/constant";


function InfoTab() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleClick = async (index: number) => {
    setActiveIndex(activeIndex === index ? index : index);
  };
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <>
      <div className="md:grid grid-cols-12 p-2 items-center mx-0 md:mx-2 justify-center my-10 2xl:justify-items-center 2xl:w-11/12 2xl:mx-auto w-full h-full">
        <div className="rounded-sm col-span-5">
          {tabs.map((tab, index) => (
            <motion.div
              key={index}
              className={`rounded-lg overflow-hidden mb-2  ${
                activeIndex === index
                  ? "active border-2 dark:border-[#656fe2]  border-[#F2F2F2] dark:bg-[#E0ECFB] bg-[#F2F2F2]"
                  : "bg-transparent border-2 dark:hover:border-[#656fe2]"
              }
            `}
              onClick={() => handleClick(index)}
            >
              <h3
                className={`p-4 cursor-pointer transition-all font-semibold    dark:text-white text-black dark:hover:bg-[#1e2a78] hover:bg-[#F2F2F2] dark:hover:text-white hover:text-black flex justify-between items-center ${
                  activeIndex === index
                    ? "active  dark:bg-[#1e2a78] bg-[#F2F2F2] "
                    : "dark:bg-[#11112b] bg-white"
                }
               `}
              >
                {tab.title}
              </h3>
              <AnimatePresence mode="sync">
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      delay: 0.14,
                    }}
                  >
                    <p className={`dark:bg-white bg-[#F2F2F2] text-black p-3`}>
                      {tab.description}
                    </p>
                    <img
                      src={tab.imageUrl}
                      alt={tab.title}
                      className="mb-2 max-w-full h-full md:hidden block  rounded-md object-cover"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        <>
          {isDesktop &&
            tabs.map((tab, index) => {
              return (
                <React.Fragment key={index}>
                  <AnimatePresence mode="popLayout" key={index}>
                    {activeIndex === index && (
                      <motion.div className="p-4 h-[400px] overflow-hidden col-span-7">
                        <motion.img
                          src={tab.imageUrl}
                          alt={tab.title}
                          className="mb-2 max-w-full h-full  rounded-md object-cover"
                          width={800}
                          initial={{ opacity: 0, overflow: "hidden" }}
                          animate={{ opacity: 1, overflow: "hidden" }}
                          exit={{ opacity: 0, overflow: "hidden" }}
                          transition={{
                            duration: 0.4,
                            delay: 0.2,
                          }}
                          height={800}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </React.Fragment>
              );
            })}
        </>
      </div>
    </>
  );
}

export default InfoTab;
