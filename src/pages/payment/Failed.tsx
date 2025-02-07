import { motion } from "framer-motion";
import { HiXCircle } from "react-icons/hi"; // Failure icon
import { Link } from "react-router-dom";

const PaymentFailedPage = () => {
  return (
    <div className="min-h-screen bg-red-50 flex justify-center items-center p-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white shadow-xl rounded-xl p-10 text-center w-full sm:w-96"
      >
        {/* Failure Icon */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <HiXCircle className="text-6xl text-red-500 mx-auto mb-4" />
        </motion.div>

        {/* Failure Message */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-3xl font-semibold text-gray-800"
        >
          Payment Failed
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-gray-600 mt-4"
        >
          Unfortunately, your payment could not be processed. Please try again.
        </motion.p>

        {/* Back to Home Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-4 px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 transition-all"
        >
          <Link to={"/"}> Back to Home</Link>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default PaymentFailedPage;
