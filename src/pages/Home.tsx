import FeaturedRoom from "@/components/home/FeaturedRoom"
// import Hero from "@/components/home/Hero"
import HowItWorks from "@/components/home/HowItworks"
import InfoTab from "@/components/home/InfoTab"
import Services from "@/components/home/Services"
import Testimonial from "@/components/home/Testimonials"


function Home() {
  return (
  <>
  {/* <Hero /> */}
  <FeaturedRoom />
  <Services />
  <HowItWorks />
  <InfoTab />
  <Testimonial />
  </>
  )
}

export default Home