import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

const AboutBanner = () => {
  const words = [
    {
      text: "Empowering",
    },
    {
      text: "Innovation",
    },
    {
      text: "Through",
    },

    {
      text: "Technology.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center bg-about bg-cover bg-center bg-no-repeat justify-center h-[40rem]">
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          About Us
        </button>
      </div>
    </div>
  );
};

export default AboutBanner;
