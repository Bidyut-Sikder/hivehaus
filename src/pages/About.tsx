// import AboutBanner from "../components/about/AboutBanner";
// import OurMission from "../components/about/OurMission";
// import Team from "../components/about/Team";

// const About = () => {
//   return (
//     <section>
//       <AboutBanner />
//       <OurMission />
//       <Team />
//     </section>
//   );
// };

// export default About;

// const AboutUs = () => {
//   return (
//     <section>
//       <div className="about-us-page t-20 bg-slate-50 text-slate-900">
//         {/* Hero Section */}
//         <section className="hero pt-18 bg-indigo-600 text-white py-12 text-center">
//           <h1 className="text-4xl font-bold">Welcome to HiveHaus</h1>
//           <p className="mt-4 text-lg">
//             Redefining the way professionals and businesses think about office
//             spaces.
//           </p>
//         </section>

//         {/* Who We Are Section */}
//         <section className="who-we-are py-12 px-4 md:px-16 flex flex-col md:flex-row items-center gap-6">
//           <img
//             src={
//               "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             }
//             alt="Modern Office Space"
//             className="w-full md:w-1/2 rounded-xl"
//           />
//           <div className="text-content md:w-1/2">
//             <h2 className="text-3xl font-semibold">Who We Are</h2>
//             <p className="mt-4 text-lg">
//               HiveHaus is more than just a rental service; we are a community
//               built for innovation, collaboration, and growth.
//             </p>
//           </div>
//         </section>

//         {/* Our Vision Section */}
//         <section className="vision bg-slate-100 py-12 px-4 md:px-16">
//           <h2 className="text-3xl font-semibold text-center">Our Vision</h2>
//           <p className="mt-4 text-center text-lg">
//             To become a leading provider of dynamic and comfortable office
//             spaces that empower individuals and companies to thrive.
//           </p>
//         </section>

//         {/* Why Choose Us Section */}
//         <section className="why-choose-us py-12 px-4 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div className="features">
//             <h2 className="text-3xl font-semibold">Why Choose Us?</h2>
//             <ul className="list-disc mt-4 ml-5 space-y-2">
//               <li>
//                 Innovative Spaces: Thoughtfully designed for creativity and
//                 collaboration.
//               </li>
//               <li>
//                 Flexible Rentals: Options for short-term or long-term needs.
//               </li>
//               <li>Prime Locations: Vibrant and accessible neighborhoods.</li>
//               <li>
//                 Modern Amenities: High-speed internet, meeting rooms, essential
//                 utilities.
//               </li>
//               <li>
//                 Community Events: Opportunities to network and collaborate.
//               </li>
//             </ul>
//           </div>
//           <img
//             src={
//               "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             }
//             alt="Collaboration Space"
//             className="w-full rounded-xl"
//           />
//         </section>

//         {/* Community Section */}
//         <section className="community bg-slate-900 text-slate-50 py-12 px-4 md:px-16 text-center">
//           <h2 className="text-3xl font-semibold">Join Our Community</h2>
//           <p className="mt-4 text-lg">
//             Whether you're a startup or an established business, we have a space
//             for you.
//           </p>
//           <img
//             src={
//               "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             }
//             alt="Community Events"
//             className="w-full mt-6 rounded-xl"
//           />
//         </section>

//         {/* Contact Section */}
//         {/* <section className="contact py-12 px-4 md:px-16 bg-indigo-50 text-center">
//           <h2 className="text-3xl font-semibold">Get in Touch</h2>
//           <p className="mt-4">
//             Have questions or want to schedule a visit? Contact us today!
//           </p>
//           <div className="contact-details mt-6 space-y-2">
//             <p>
//               <strong>Email:</strong> support@hivehaus.com
//             </p>
//             <p>
//               <strong>Phone:</strong> (555) 123-4567
//             </p>
//             <p>
//               <strong>Address:</strong> 123 Hive Street, Business City, CA
//             </p>
//           </div>
//         </section> */}
//       </div>
//     </section>
//   );
// };

// export default AboutUs;






const AboutUs = () => {
  return (
    <div className="about-us-page  bg-slate-50 text-slate-900">
      {/* Hero Section */}
      <section className="hero pt-20 bg-indigo-600 text-white py-12 text-center">
        <h1 className="text-4xl font-bold">Welcome to HiveHaus</h1>
        <p className="mt-4 text-lg">Redefining the way professionals and businesses think about office spaces.</p>
      </section>

      {/* Who We Are Section */}
      <section className="who-we-are py-12 px-4 md:px-16 flex flex-col md:flex-row items-center gap-6">
        <img src={'https://images.unsplash.com/photo-1560264357-8d9202250f21?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt="Modern Office Space" className="w-full md:w-1/2 rounded-xl" />
        <div className="text-content md:w-1/2">
          <h2 className="text-3xl font-semibold">Who We Are</h2>
          <p className="mt-4 text-lg">
            HiveHaus is more than just a rental service; we are a community built for innovation, collaboration, and growth. Our spaces are designed to empower businesses and creative professionals to thrive in an inspiring environment.
          </p>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="vision bg-slate-100 py-12 px-4 md:px-16">
        <h2 className="text-3xl font-semibold text-center">Our Vision</h2>
        <p className="mt-4 text-center text-lg">
          To become a leading provider of dynamic and comfortable office spaces that empower individuals and companies to thrive and innovate without boundaries.
        </p>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us py-12 px-4 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="features">
          <h2 className="text-3xl font-semibold">Why Choose Us?</h2>
          <p className="mt-4 text-lg">
            At HiveHaus, we provide more than just office space. Our offerings are tailored to meet the evolving needs of modern businesses.
          </p>
          <ul className="list-disc mt-4 ml-5 space-y-2">
            <li>Innovative Spaces: Thoughtfully designed for creativity and collaboration.</li>
            <li>Flexible Rentals: Options for short-term or long-term needs.</li>
            <li>Prime Locations: Vibrant and accessible neighborhoods.</li>
            <li>Modern Amenities: High-speed internet, meeting rooms, essential utilities.</li>
            <li>Community Events: Opportunities to network and collaborate.</li>
          </ul>
        </div>
        <img src={'https://plus.unsplash.com/premium_photo-1727209458324-5d04d5e00cf4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt="Collaboration Space" className="w-full rounded-xl" />
      </section>

      {/* Community Section */}
      <section className="community bg-slate-900 text-slate-50 py-12 px-4 md:px-16 text-center">
        <h2 className="text-3xl font-semibold">Join Our Community</h2>
        <p className="mt-4 text-lg">
          Whether you're a startup or an established business, we have a space for you. Enjoy a supportive and inspiring environment that fosters growth and collaboration.
        </p>
        <img src={'https://plus.unsplash.com/premium_photo-1661349931961-977a26539baa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt="Community Events" className="w-full mt-6 rounded-xl" />
      </section>


    </div>
  );
};

export default AboutUs;






