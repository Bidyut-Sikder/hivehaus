import { motion } from "framer-motion";
import { useAppSelector } from "../../redux/hooks";

const Profile = () => {
  const { name, email, address, phone } = useAppSelector((state) => state.auth);

  return (
    <section className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/images/contactus.jpg"
            alt="cover-image"
            loading="lazy"
            className="h-60 w-full object-cover rounded-lg"
          />
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-14 ring-4 ring-white rounded-full overflow-hidden w-28 h-28">
            <img
              src="/images/about.jpg"
              alt="profile-image"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <div className="text-center mt-16">
          <h1 className="text-3xl font-bold text-gray-800 capitalize">
            {name}
          </h1>
          <p className="text-gray-500 mt-2">Welcome to your profile page!</p>
        </div>

        <div className="mt-8 bg-white p-6 shadow-md rounded-md">
          <ul className="space-y-4 text-lg">
            <li className="flex items-center gap-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-blue-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              <span>{email}</span>
            </li>
            <li className="flex items-center gap-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-green-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              <span>{address}</span>
            </li>
            <li className="flex items-center gap-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-yellow-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              <span>{phone}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Profile;
