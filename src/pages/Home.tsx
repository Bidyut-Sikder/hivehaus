import { Fragment } from "react";
import FeaturedRoom from "../components/home/FeaturedRoom";
// import HowItWorks from "../components/home/HowItworks";
import InfoTab from "../components/home/InfoTab";
import Services from "../components/home/Services";
import Testimonial from "../components/home/Testimonials";
import HeroSection from "../components/home/Hero";
import CarouselSection from "../components/home/CarouselSection";

function Home() {
  return (
    <Fragment>
      <HeroSection />
      <FeaturedRoom />

        <Services />
  

      <CarouselSection />

      {/* <HowItWorks /> */}

      <Testimonial />
      <InfoTab />
    </Fragment>
  );
}

export default Home;
