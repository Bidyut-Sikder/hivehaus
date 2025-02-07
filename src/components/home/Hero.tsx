export const Button = ({
  size = "md",
  variant = "solid",
  className = "",
  children,
  ...props
}: {
  size?: string;
  variant?: string;
  className?: string;
  children: React.ReactNode;
  [key: string]: any;
}) => {
  const baseStyles =
    "rounded-xl px-4 py-2 font-semibold focus:outline-none mb-2 transition-all";
  const sizeStyles = size === "lg" ? "text-lg px-6 py-3" : "text-sm px-3 py-2";
  const variantStyles =
    variant === "solid"
      ? "bg-indigo-600 text-white hover:bg-indigo-700"
      : "border border-indigo-600 text-indigo-600 hover:bg-indigo-50";

  return (
    <button
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
import { motion } from "framer-motion";
import { LucideBuilding } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-gray-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-8 py-16 md:py-24">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left md:w-1/2"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-800">
            Find Your Perfect Office Space at{" "}
            <span className="text-indigo-600">HiveHaus</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Modern and affordable office spaces tailored for teams of every
            size. Elevate your business in a space designed to inspire.
          </p>
          <div className="mt-6 space-x-4">
            <Link
              to={"/rooms"}
              className="rounded-xl px-6 py-3 text-lg font-semibold bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none transition-all"
            >
              Get Started
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-indigo-600 text-indigo-600 hover:bg-indigo-50"
            >
              Explore Locations
            </Button>
          </div>
        </motion.div>

        {/* Image and Icon */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-12 md:mt-0 md:w-1/2 flex justify-center"
        >
          <div className="relative max-w-md">
            <LucideBuilding size={200} className="text-indigo-600" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-indigo-100 via-transparent to-transparent opacity-50 rounded-2xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
