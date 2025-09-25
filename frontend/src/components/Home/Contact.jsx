import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTwitter,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Message Sent!");
  };

  return (
    <section className="relative w-full bg-black text-white py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Contact Us</h2>
          <p className="text-gray-400 mt-2">
            Any question or remarks? Just write us a message!
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Contact Information
              </h3>
              <p className="text-gray-400">
                Say something to start a live chat!
              </p>
            </div>

            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-xl text-gray-400" />
              <span>+1012 3456 789</span>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-xl text-gray-400" />
              <span>demo@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-xl text-gray-400" />
              <span>
                132 Dartmouth Street Boston, Massachusetts 02156 United States
              </span>
            </div>

            {/* Socials */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <FaDiscord />
              </a>
            </div>
          </div>

          {/* Right - Form */}
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-1">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-500 focus:border-white outline-none py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-500 focus:border-white outline-none py-2"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-500 focus:border-white outline-none py-2"
                required
              />
            </div>

            {/* Radio Select */}
            <div>
              <label className="block text-sm mb-2">Select Subject?</label>
              <div className="flex flex-wrap gap-4">
                {["General Inquiry", "Support", "Feedback", "Other"].map(
                  (subject, idx) => (
                    <label
                      key={idx}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="subject"
                        value={subject}
                        checked={formData.subject === subject}
                        onChange={handleChange}
                        className="accent-white"
                      />
                      {subject}
                    </label>
                  )
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full bg-transparent border-b border-gray-500 focus:border-white outline-none py-2"
                placeholder="Write your message.."
                required
              />
            </div>

            <button
              type="submit"
              className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
