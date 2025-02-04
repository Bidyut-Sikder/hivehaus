/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { items as defaultItems} from "../../constants/constant";



const ProductCarousel = ({ room }: any) => {
  const roomImages = room?.image?.length ? room.image : defaultItems;
  const [activeItem, setActiveItem] = useState(roomImages[0]);
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, [carousel]);

  return (
    <Fragment>
      <motion.div
        layoutId={"activeItems"}
        className="rounded-md pb-4 gap-2 items-center mx-auto cursor-auto"
        onClick={(e) => e.stopPropagation()}
      >
         <Fragment>
          {roomImages.map(
            (_imageSrc: string | { imgSrc: string }, index: number) => (
              <AnimatePresence mode="popLayout" initial={false} key={index}>
                 {roomImages.indexOf(activeItem) === index && (
                  <motion.figure
                    key={index}
                    className="dark:bg-gray-900/60 border rounded-md p-4 backdrop-blur-sm"
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: {
                          type: "ease",
                          ease: "easeInOut",
                          duration: 0.3,
                          delay: 0.2,
                        },
                      }}
                      exit={{
                        opacity: 0,
                        transition: {
                          type: "ease",
                          ease: "easeInOut",
                          duration: 0.2,
                        },
                      }}
                    >
                      <img
                        src={
                          typeof activeItem === "string"
                            ? activeItem
                            : activeItem.imgSrc
                        } // Adjust based on type
                        width={1000}
                        height={1000}
                        alt="preview_img"
                        className="object-contain h-96 mx-auto rounded-md"
                      />
                    </motion.div>
                  </motion.figure>
                )}
              </AnimatePresence>
            )
          )}
        </Fragment>
         <motion.div className="sm:w-[450px] mt-4 mx-auto overflow-hidden dark:bg-gray-900/60 bg-gray-100/60 border rounded-md">
          <motion.div
            ref={carousel}
            drag="x"
            dragElastic={0.2}
            dragConstraints={{ right: 0, left: -width }}
            dragTransition={{ bounceDamping: 30 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="flex"
          >
            {roomImages?.map(
              (imageSrc: string | { imgSrc: string }, index: number) => {
                return (
                  <motion.div
                    key={index}
                    className={`relative p-2 flex-shrink-0`}
                    onClick={() => setActiveItem(imageSrc)}
                  >
                    <img
                      src={
                        typeof imageSrc === "string"
                          ? imageSrc
                          : imageSrc.imgSrc
                      } // Handle both cases
                      width={400}
                      height={400}
                      alt="img"
                      className="w-28 h-16 object-cover cursor-pointer relative z-[2] rounded-md pointer-events-none"
                    />
                    {roomImages.indexOf(activeItem) === index && (
                      <motion.div
                        layoutId="slider"
                        transition={{
                          layout: {
                            duration: 0.2,
                            ease: "easeOut",
                          },
                        }}
                        className="absolute top-0 left-0 h-full w-full dark:bg-gray-100 bg-gray-800 rounded-md"
                      ></motion.div>
                    )}
                  </motion.div>
                );
              }
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </Fragment>
  );
};

export default ProductCarousel;

///////////////////////////////////////
// the beautifull one
///////////////////////////////////////


// const carouselItems = [
//   "https://picsum.photos/id/103/2592/1936",
//   "https://picsum.photos/id/104/3840/2160",
//   "https://picsum.photos/id/106/2592/1728",
//   "https://picsum.photos/id/107/5000/3333",
// ];

// import { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="relative w-full max-w-sm sm:max-w-3xl mx-auto overflow-hidden rounded-2xl">
//       {/* Carousel Items */}
//       <div className="relative h-40 sm:h-72 bg-gray-200">
//         <AnimatePresence initial={false} mode="wait">
//           <motion.img
//             key={currentIndex}
//             src={carouselItems[currentIndex]}
//             alt={`Slide ${currentIndex + 1}`}
//             initial={{ opacity: 0, x: 100 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -100 }}
//             transition={{ duration: 0.5 }}
//             className="absolute inset-0 w-full h-full object-cover rounded-2xl"
//           />
//         </AnimatePresence>
//       </div>

//       {/* Navigation Arrows */}
//       <button
//         className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
//         onClick={prevSlide}
//       >
//         <ChevronLeft className="w-5 h-5" />
//       </button>
//       <button
//         className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
//         onClick={nextSlide}
//       >
//         <ChevronRight className="w-5 h-5" />
//       </button>

//       {/* Carousel Indicators */}
//       {/* <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
//            {carouselItems.map((_, index) => (
//              <div
//                key={index}
//                onClick={() => setCurrentIndex(index)}
//                className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all ${
//                  currentIndex === index ? "bg-white" : "bg-white/50"
//                }`}
//              ></div>
//            ))}
//          </div> */}

//       {/* Image Slider Overview */}
//       {/* <div className="flex mt-4 gap-2 overflow-x-auto pb-2 no-scrollbar">
//         {carouselItems.map((item, index) => (
//           <motion.img
//             key={index}
//             src={item}
//             alt={`Thumbnail ${index + 1}`}
//             className={`w-16 h-10 sm:w-20 sm:h-14 object-cover cursor-pointer rounded-lg border-2 transition-transform hover:scale-105 ${
//               currentIndex === index ? "border-white" : "border-transparent"
//             }`}
//             onClick={() => setCurrentIndex(index)}
//           />
//         ))}
//       </div> */}





// <div className="flex mt-4 gap-2 overflow-x-auto pb-2 no-scrollbar">
//         {carouselItems.map((item, index) => (
//           <motion.img
//             key={index}
//             src={item}
//             alt={`Thumbnail ${index + 1}`}
//             className={`w-16 h-10 sm:w-20 sm:h-14 object-cover cursor-pointer rounded-lg border-2 transition-transform hover:scale-105 ${
//               currentIndex === index ? "border-black" : "border-transparent"
//             }`}
//             onClick={() => setCurrentIndex(index)}
//           />
//         ))}
//       </div>


//       {/* Fallback for Short Displays */}
//       <style>{`
//            .no-scrollbar::-webkit-scrollbar {
//              display: none;
//            }
//            .no-scrollbar {
//              -ms-overflow-style: none;
//              scrollbar-width: none;
//            }
//            @media (max-height: 300px) {
//              .carousel-overview {
//                display: none;
//              }
//            }
//          `}</style>
//     </div>
//   );
// };

// export default Carousel;














