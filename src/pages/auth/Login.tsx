import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { toast } from "sonner";
import { useAppDispatch } from "../../redux/hooks";
import { useLoginUserMutation } from "../../redux/api/authApi";
import { loginSchema } from "../../lib/validation";
import { setRole, setToken, setUserData } from "../../redux/slices/authSlice";

function LoginPage() {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const [loginUser] = useLoginUserMutation();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      const res = await loginUser(data).unwrap();
      if (res.success) {
        toast.success("Account Logged in");
        dispatch(setToken(res.token));
        dispatch(setRole(res.user.role));
        dispatch(
          setUserData({
            _id: res.user._id,
            name: res.user.name,
            email: res.user.email,
            phone: res.user.phone,
            address: res.user.address,
            role: res.user.role,
            token: res.token,
          })
        );
        // console.log(location)

        navigate(location?.state?.from?.pathname || "/");
      } else {
        console.error("Login failed:", res.message);
      }
    } catch (error) {
      toast.warning("Account Login Failed. ");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 items-center gap-4">
      {/* Left Side - Image */}
      <div className="h-screen">
        <img
          src="https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=1408&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="login-image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side - Form */}
      <form
        className="max-w-xl w-full p-6 mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-12">
          <h3 className="text-gray-800 text-4xl font-extrabold">Sign in</h3>
          <p className="text-gray-800 text-sm mt-6">
            Don't have an account?{" "}
            <Link
              className="text-blue-600 font-semibold hover:underline ml-1"
              to="/signup"
            >
              Register here
            </Link>
          </p>
        </div>

        <div className="space-y-2">
          <label
            className="font-medium text-gray-800 text-sm block mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <div className="relative flex items-center">
            <input
              type="email"
              id="email"
              className="flex h-10 rounded-md border bg-white focus:border-blue-600 w-full text-sm text-gray-800 border-b border-gray-300 px-2 py-3 outline-none"
              placeholder="Enter email"
              {...register("email")}
            />
            <FaEnvelope className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          {errors.email?.message && (
            <p className="text-red-500 text-sm mt-1">
              {String(errors.email.message)}
            </p>
          )}
        </div>

        <div className="space-y-2 mt-6">
          <label
            className="text-gray-800 text-sm block mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <div className="relative flex items-center">
            <input
              type="password"
              id="password"
              className="flex h-10 rounded-md border bg-white focus:border-blue-600 w-full text-sm text-gray-800 border-b border-gray-300 px-2 py-3 outline-none"
              placeholder="Enter password"
              {...register("password")}
            />
            <FaLock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          {errors.password?.message && (
            <p className="text-red-500 text-sm mt-1">
              {String(errors.password.message)}
            </p>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label className="ml-3 block text-sm text-gray-800">
              Remember me
            </label>
          </div>
          <div>
            <a className="text-blue-600 font-semibold text-sm hover:underline">
              Forgot Password?
            </a>
          </div>
        </div>

        <div className="mt-12">
          <button
            type="submit"
            disabled={isSubmitting || isLoading}
            className={`w-full py-2.5 px-4 text-sm rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none ${
              isSubmitting || isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? (
              <span className="flex justify-center items-center">
                <AiOutlineLoading3Quarters className="animate-spin mr-2" />{" "}
                Processing...
              </span>
            ) : (
              "Sign in"
            )}
          </button>
        </div>

        <div className="my-6 flex items-center gap-4">
          <hr className="w-full border-gray-300" />
          <p className="text-sm text-gray-800 text-center">or</p>
          <hr className="w-full border-gray-300" />
        </div>

        <button
          type="button"
          className="w-full flex items-center justify-center gap-4 py-2.5 px-4 text-sm text-gray-800 border border-gray-300 rounded-md bg-transparent hover:bg-gray-50 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22px"
            fill="#fff"
            className="mr-4"
            viewBox="0 0 512 512"
          >
            <path
              fill="#fbbd00"
              d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
            ></path>
            <path
              fill="#0f9d58"
              d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
            ></path>
            <path
              fill="#31aa52"
              d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
            ></path>
            <path
              fill="#3c79e6"
              d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
            ></path>
            <path
              fill="#cf2d48"
              d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
            ></path>
            <path
              fill="#eb4132"
              d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
            ></path>
          </svg>
          Continue with Google
        </button>
      </form>
    </div>
  );
}

export default LoginPage;

{
  /* <div className="p-10 flex flex-col justify-center">
<h2 className="text-3xl font-bold text-gray-700 mb-6">
  Login to Your Account
</h2>
<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
  <div className="relative">
    <label className="block text-gray-600 mb-2" htmlFor="email">
      Email
    </label>
    <input
      id="email"
      type="email"
      placeholder="Enter Email"
      className="w-full p-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
      {...register("email")}
    />
    <FaEnvelope className="absolute right-3 top-12 transform -translate-y-1/2 text-gray-400" />
    {errors.email?.message && (
      <p className="text-red-500 text-sm mt-1">
        {String(errors.email.message)}
      </p>
    )}
  </div>

  <div className="relative">
    <label className="block text-gray-600 mb-2" htmlFor="password">
      Password
    </label>
    <input
      id="password"
      type="password"
      placeholder="Enter Password"
      className="w-full p-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
      {...register("password")}
    />
    <FaLock className="absolute right-3 top-12 transform -translate-y-1/2 text-gray-400" />
    {errors.password?.message && (
      <p className="text-red-500 text-sm mt-1">
        {String(errors.password.message)}
      </p>
    )}
  </div>

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
      "Login"
    )}
  </button>
</form>
</div> */
}
