

import Chart from "react-apexcharts";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Shield } from "lucide-react";
import { useAppSelector } from "../../redux/hooks";

const AdminProfile = () => {
  const userData = useAppSelector((state) => state.auth);

  const chartOptions = {
    chart: {
      id: "admin-statistics",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: ["January", "February", "March", "April", "May", "June"],
    },
    colors: ["#1E40AF", "#9333EA"],
  };

  const chartData = [
    {
      name: "User Activity",
      data: [30, 40, 35, 50, 49, 60],
    },
  ];

  return (
    <div className="flex  justify-center items-center min-h-screen bg-gray-300">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white shadow-2xl rounded-2xl m-2 p-8 w-full max-w-lg"
      >
        <div className="text-center">
          <motion.img
            src={"https://cdn-icons-png.flaticon.com/128/2202/2202112.png"}
            alt="Admin Avatar"
            className="w-32 h-32 mx-auto rounded-full shadow-md border-4 border-blue-500"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          <h1 className="text-3xl font-bold text-gray-800 mt-4">
            {userData.name}
          </h1>
          <p className="text-gray-600 text-lg mt-2">{userData.role}</p>
        </div>

        <motion.div
          className="mt-6 space-y-4"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3">
            <Shield className="text-gray-600" />
            <span className="text-lg font-medium text-gray-700">
              {userData.role}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="text-gray-600" />
            <span className="text-lg text-gray-700">{userData.phone}</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="text-gray-600" />
            <span className="text-lg text-gray-700">{userData.email}</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="text-gray-600" />
            <span className="text-lg text-gray-700">{userData.address}</span>
          </div>
        </motion.div>

        <div className="mt-10">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            {" "}
            Activity Chart
          </h2>
          <Chart
            options={chartOptions}
            series={chartData}
            type="bar"
            height={300}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default AdminProfile;
