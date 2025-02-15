import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

const UnauthorizedPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="max-w-md p-8 bg-white shadow-lg rounded-2xl text-center">
        <AlertTriangle className="text-red-500 w-16 h-16 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-800">Unauthorized Access</h2>
        <p className="text-gray-600 mt-2">You don't have permission to view this page.</p>
        <Link
          to="/"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default UnauthorizedPage;
