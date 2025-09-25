import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0f001f] via-black to-[#0f001f] text-white border-t">
      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Left side: Logo + Socials */}
        <div className="flex flex-col items-start gap-4">
          {/* Logo */}
          <h1 className="text-xl font-bold">AI Interview</h1>

          {/* Social Icons */}
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-blue-600">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-pink-600">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-blue-700">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Right side: Navigation */}
        <div className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm md:text-base">
          <a href="#" className="hover:text-gray-600">
            Home
          </a>
          <a href="#" className="hover:text-gray-600">
            Members
          </a>
          <a href="#" className="hover:text-gray-600">
            Documents
          </a>
          <a href="#" className="hover:text-gray-600">
            About us
          </a>
          <a href="#" className="hover:text-gray-600">
            {" "}
            Contact us
          </a>
        </div>
      </div>

      {/* Divider */}
      {/* <div className="border-t mt-6"></div> */}

      {/* Bottom section */}
      <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>© 2025 All right reserved.</p>
        <p>
          Made with <span className="text-red-500">❤</span> by{" "}
          <a href="#" className="hover:underline font-medium">
            Team ka naam
          </a>
        </p>
      </div>
    </footer>
  );
}
