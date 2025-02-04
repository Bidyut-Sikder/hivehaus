/* eslint-disable @typescript-eslint/no-explicit-any */

import { useCallback, useRef } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import LeftArrow from "../../svgs/LeftArrow";
import RightARrow from "../../svgs/RightArrow";
import DotShape from "../../svgs/DotShape";

const testimonials = [
  {
    image:
      "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    reviewImg:
      "https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/lineicon.svg",
    reviewAlt: "lineicon",
    details:
      "Working with this team has transformed our approach to marketing. Their innovative strategies helped us reach new heights in engagement and sales.",
    name: "Emma Johnson",
    position: "Marketing Manager",
  },
  {
    image:
      "https://images.unsplash.com/photo-1630026317249-c1c83b21ea07?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    reviewImg:
      "https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/lineicon.svg",
    reviewAlt: "lineicon",
    details:
      "The user experience design provided by this team is outstanding. They've made our application more intuitive and visually appealing.",
    name: "James Smith",
    position: "Product Designer",
  },
  {
    image:
      "https://images.unsplash.com/photo-1695927621677-ec96e048dce2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    reviewImg:
      "https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/lineicon.svg",
    reviewAlt: "lineicon",
    details:
      "Their development team is top-notch. They delivered our project on time and exceeded our expectations with their coding expertise.",
    name: "Brown Ledger",
    position: "Lead Developer",
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
                reviewImg={testimonial.reviewImg}
                reviewAlt={testimonial.reviewAlt}
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
  reviewImg,
  reviewAlt,
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
            <span className="absolute -left-6 -top-6 z-[-1] hidden sm:block">
              <DotShape />
            </span>
            <span className="absolute -bottom-6 -right-6 z-[-1]">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 32C3 15.9837 15.9837 3 32 3C48.0163 2.99999 61 15.9837 61 32C61 48.0163 48.0163 61 32 61C15.9837 61 3 48.0163 3 32Z"
                  stroke="#13C296"
                  strokeWidth="6"
                />
              </svg>
            </span>
          </div>
          <div className="w-full">
            <div>
              <div className="mb-7">
                <img src={reviewImg} alt={reviewAlt} />
              </div>

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
