import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { FcGoogle } from "react-icons/fc";
import {
  FaFacebookF,
  FaTwitter,
  FaUser,
  FaLock,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

import { toast } from "sonner";
import { useAppDispatch } from "../../redux/hooks";
import { useSignUpUserMutation } from "../../redux/api/authApi";
import { signupSchema } from "../../lib/validation";
import { setRole, setToken, setUserData } from "../../redux/slices/authSlice";

function SignupPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [signUpUser] = useSignUpUserMutation();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      const res = await signUpUser(data);

      if (res.data.success) {
        toast.success("Account Create Successfully");
        dispatch(setUserData(res.data.data));
        dispatch(setToken(res.data.token));
        dispatch(setRole(res.data.data.role));
        navigate("/");
      } else {
        if (res.data.message.includes("duplicate key error")) {
          toast.warning("This email is already in use");
        } else {
          toast.warning(`Registration failed: ${res.data.message}`);
        }
        console.error("Registration failed:", res.data.message);
      }
    } catch (error) {
      toast.warning(`Registration failed.`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white shadow-lg w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden">
        {/* Left Side - Social Signup */}

        <div className="bg-blue-50 p-10 flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold text-gray-700 mb-6 text-center">
            Sign Up with
          </h2>
          <div className="flex flex-col gap-4 w-full max-w-xs">
            <button className="flex items-center bg-white border border-gray-300 px-5 py-3 rounded-md hover:bg-gray-100 w-full transition ease-in-out text-sm md:text-base">
              <FcGoogle className="text-2xl mr-3" />
              <span className="truncate">Continue with Google</span>
            </button>
            <button className="flex items-center bg-blue-600 text-white px-5 py-3 rounded-md hover:bg-blue-700 w-full transition ease-in-out text-sm md:text-base">
              <FaFacebookF className="text-xl mr-3" />
              <span className="truncate">Continue with Facebook</span>
            </button>
            <button className="flex items-center bg-blue-400 text-white px-5 py-3 rounded-md hover:bg-blue-500 w-full transition ease-in-out text-sm md:text-base">
              <FaTwitter className="text-xl mr-3" />
              <span className="truncate">Continue with Twitter</span>
            </button>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-700 mb-6">
            Create an Account
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="relative">
              <label className="block text-gray-600 mb-2" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter Name"
                //  className="w-full py-1 pr-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 "
                className="w-full pl-2  p-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 "
                {...register("name")}
              />
              <FaUser className="absolute right-3 top-12 transform -translate-y-1/2 text-gray-400" />
              {/* {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>} */}
              {errors.name?.message && (
                <p className="text-red-500 text-sm mt-1">
                  {String(errors.name.message)}
                </p>
              )}
            </div>

            <div className="relative">
              <label className="block text-gray-600 mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter Email"
                className="w-full pl-2 p-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 "
                {...register("email")}
              />
              <FaEnvelope className="absolute right-3 top-12 transform -translate-y-1/2 text-gray-400" />
              {errors.email?.message && (
                <p className="text-red-500 text-sm mt-1">
                  {String(errors.email.message)}
                </p>
              )}
              {/* {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>} */}
            </div>

            <div className="relative">
              <label className="block text-gray-600 mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter Password"
                className="w-full pl-2 p-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                {...register("password")}
              />
              <FaLock className="absolute right-3 top-12 transform -translate-y-1/2 text-gray-400" />
              {errors.password?.message && (
                <p className="text-red-500 text-sm mt-1">
                  {String(errors.password.message)}
                </p>
              )}
            </div>

            <div className="relative">
              <label className="block text-gray-600 mb-2" htmlFor="phone">
                Phone
              </label>
              <input
                id="phone"
                type="text"
                placeholder="Enter Phone"
                className="w-full pl-2 p-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                {...register("phone")}
              />
              <FaPhone className="absolute right-3 top-12 transform -translate-y-1/2 text-gray-400" />

              {errors.phone?.message && (
                <p className="text-red-500 text-sm mt-1">
                  {String(errors.phone.message)}
                </p>
              )}

              {/* {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>} */}
            </div>

            <div className="relative">
              <label className="block text-gray-600 mb-2" htmlFor="address">
                Address
              </label>
              <input
                id="address"
                type="text"
                placeholder="Enter Address"
                className="w-full pl-2 p-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 "
                {...register("address")}
              />
              <FaMapMarkerAlt className="absolute right-3 top-12 transform -translate-y-1/2 text-gray-400" />

              {errors.address?.message && (
                <p className="text-red-500 text-sm mt-1">
                  {String(errors.address.message)}
                </p>
              )}
            </div>

            <div className="flex items-center space-x-2">
              <input
                id="terms"
                type="checkbox"
                className="w-5 h-5"
                {...register("terms")}
              />
              <label htmlFor="terms" className="text-gray-600">
                I agree to the terms and conditions
              </label>
            </div>
            {errors.terms && (
              <p className="text-red-500 text-sm mt-1">
                {String(errors.terms.message)}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting || isLoading}
              className={`w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition ease-in-out ${
                isSubmitting || isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? (
                <span className="flex justify-center items-center">
                  <AiOutlineLoading3Quarters className="animate-spin mr-2" />{" "}
                  Processing...
                </span>
              ) : (
                "Sign Up"
              )}
            </button>
          </form>
          <div className="mb-12">
            <p className="text-gray-800 text-sm mt-6">
              Have an account?{" "}
              <Link
                className="text-blue-600 font-semibold hover:underline ml-1"
                to="/login"
              >
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
