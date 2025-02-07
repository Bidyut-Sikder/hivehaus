import { motion } from "framer-motion";
import { HiCheckCircle } from "react-icons/hi"; // Success icon
import { Link } from "react-router-dom";

const PaymentSuccessPage = () => {
  return (
    <div className="min-h-screen bg-green-50 flex justify-center items-center p-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white shadow-xl rounded-xl p-10 text-center w-full sm:w-96"
      >
        {/* Success Icon */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <HiCheckCircle className="text-6xl text-green-500 mx-auto mb-4" />
        </motion.div>

        {/* Success Message */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-3xl font-semibold text-gray-800"
        >
          Payment Successful!
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-gray-600 mt-4"
        >
          Your payment was processed successfully. Thank you for your Booking!
        </motion.p>

        {/* Redirect Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-6 px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-all"
        >
          <Link to={"/"}> Go Back</Link>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default PaymentSuccessPage;
