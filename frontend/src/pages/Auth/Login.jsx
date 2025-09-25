import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Panel */}
      <div className="flex-1 flex items-center justify-center bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 p-4 sm:p-8">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl w-full max-w-md p-6 sm:p-8 text-white shadow-lg">
          {/* Tabs */}
          <div className="flex justify-between bg-white/20 rounded-lg mb-6 overflow-hidden">
            <button
              onClick={() => navigate("/signup")}
              className="flex-1 py-2 text-sm font-medium text-white hover:bg-white/30"
            >
              Sign up
            </button>
            <button className="flex-1 py-2 text-sm font-medium bg-white text-gray-900">
              Log in
            </button>
          </div>

          <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center">
            Login
          </h2>

          {/* Social Buttons */}
          <div className="space-y-3">
            <button className="flex items-center justify-center gap-2 w-full bg-white text-gray-800 py-2 rounded-full shadow hover:bg-gray-100 text-sm sm:text-base">
              <FaFacebook className="text-blue-600 text-lg" />
              Log in with Facebook
            </button>
            <button className="flex items-center justify-center gap-2 w-full bg-white text-gray-800 py-2 rounded-full shadow hover:bg-gray-100 text-sm sm:text-base">
              <FcGoogle className="text-lg" />
              Log in with Google
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-400/40"></div>
            <span className="px-4 text-xs sm:text-sm text-gray-300">OR</span>
            <div className="flex-grow border-t border-gray-400/40"></div>
          </div>

          {/* Login Form */}
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-2 rounded-lg bg-transparent border border-gray-400/50 placeholder-gray-300 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 rounded-lg bg-transparent border border-gray-400/50 placeholder-gray-300 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="w-full bg-white text-gray-900 font-semibold py-2 rounded-full shadow hover:bg-gray-200"
            >
              Next
            </button>
          </form>
        </div>
      </div>

      {/* Right Panel (hidden on mobile) */}
      <div className="hidden md:flex flex-1 items-center justify-center bg-black relative">
        <img
          // src="https://via.placeholder.com/600x800"m
          alt="Preview"
          className="w-full h-full object-cover"
        />
        <div className="absolute w-40 sm:w-56 h-40 sm:h-56 border-[12px] sm:border-[20px] border-white rounded-full"></div>
      </div>
    </div>
  );
}
