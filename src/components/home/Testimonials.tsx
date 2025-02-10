/* eslint-disable @typescript-eslint/no-explicit-any */

import { useCallback, useRef } from "react";
// @ts-ignore
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import LeftArrow from "../../svgs/LeftArrow";
import RightARrow from "../../svgs/RightArrow";

const testimonials = [
  {
    image:
      "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    details:
      "HiveHaus provided us with a beautiful, fully equipped office space that elevated our team's productivity. The seamless booking process and fantastic amenities were beyond expectations.",
    name: "Sophia Patel",
    position: "Operations Manager, TechNest Solutions",
  },
  {
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    details:
      "Renting an office house through HiveHaus was one of the best decisions for our growing startup. The environment is conducive to creativity and collaboration, and we felt right at home.",
    name: "Aiden Walker",
    position: "Co-Founder, InnovateHub",
  },
  {
    image:
      "https://images.unsplash.com/photo-1589386417686-0d34b5903d23?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    details:
      "Our team needed a flexible and comfortable space to work on a critical project. HiveHaus delivered with premium office space and top-notch facilities.",
    name: "Liam Harris",
    position: "Project Manager, BrightPath Ventures",
  },
];

const Testimonial = () => {
  const sliderRef = useRef<any>(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <section className="pb-20 pt-20 dark:bg-dark lg:pb-[120px] lg:pt-[120px]">
      <div className="container mx-auto">
        <Swiper slidesPerView={1} ref={sliderRef}>
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <SingleTestimonial
                image={testimonial.image}
                details={testimonial.details}
                name={testimonial.name}
                position={testimonial.position}
              />
            </SwiperSlide>
          ))}
          <div className="absolute left-0 right-0 z-10 flex items-center justify-center gap-5 sm:bottom-0">
            <div className="prev-arrow cursor-pointer" onClick={handlePrev}>
              <button className="d flex h-[60px] w-[60px] items-center justify-center rounded-full border border-stroke bg-white text-dark transition-all hover:border-transparent hover:drop-shadow-testimonial dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:hover:drop-shadow-none">
                <LeftArrow />
              </button>
            </div>
            <div className="next-arrow cursor-pointer" onClick={handleNext}>
              <button className="d flex h-[60px] w-[60px] items-center justify-center rounded-full border border-stroke bg-white text-dark transition-all hover:border-transparent hover:drop-shadow-testimonial dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:hover:drop-shadow-none">
                <RightARrow />
              </button>
            </div>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;

interface Review {
  image?: string;
  reviewImg?: string;
  reviewAlt?: string;
  details?: string;
  name?: string;
  position?: string;
}

const SingleTestimonial = ({
  image,

  details,
  name,
  position,
}: Review) => {
  return (
    <div className="relative flex justify-center">
      <div className="relative w-full pb-16 md:w-11/12 lg:w-10/12 xl:w-8/12">
        <div className="w-full items-center md:flex">
          <div className="relative mb-12 w-full max-w-[310px] md:mb-0 md:mr-12 md:max-w-[250px] lg:mr-14 lg:max-w-[280px] 2xl:mr-16">
            <img
              src={image}
              loading="lazy"
              alt="image"
              className="w-full h-96 object-cover"
            />
          </div>
          <div className="w-full">
            <div>
              <p className="mb-11 text-base font-normal italic leading-[1.81] text-body-color dark:text-dark-6 sm:text-[22px]">
                {details}
              </p>

              <h4 className="mb-2 text-[22px] font-semibold leading-[27px] text-dark dark:text-white">
                {name}
              </h4>
              <p className="text-base text-body-color dark:text-dark-6">
                {position}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
