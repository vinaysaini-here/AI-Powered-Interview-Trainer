import { useState } from "react";
import { FaHome, FaBook, FaUsers, FaClipboardList } from "react-icons/fa";

export default function UserQuestion() {
  const [activeTab, setActiveTab] = useState("All");

  const featured = [
    {
      title: "Mastering the STAR Method",
      desc: "A comprehensive guide to answering behavioral questions effectively.",
      img: "https://via.placeholder.com/150x100",
    },
    {
      title: "Cracking the Coding Interview",
      desc: "Essential coding problems and techniques for technical interviews.",
      img: "https://via.placeholder.com/150x100",
    },
    {
      title: "Behavioral Interview Prep",
      desc: "Strategies and tips for acing behavioral interview questions.",
      img: "https://via.placeholder.com/150x100",
    },
    {
      title: "System Design Fundamentals",
      desc: "Introduction to system design concepts and common interview questions.",
      img: "https://via.placeholder.com/150x100",
    },
  ];

  const resources = [
    {
      title: "Negotiating Your Salary",
      desc: "Learn how to negotiate your salary effectively.",
      img: "https://via.placeholder.com/150x100",
    },
    {
      title: "Building Your Personal Brand",
      desc: "Tips for building a strong personal brand.",
      img: "https://via.placeholder.com/150x100",
    },
    {
      title: "Networking for Job Seekers",
      desc: "Strategies for networking and finding job opportunities.",
      img: "https://via.placeholder.com/150x100",
    },
    {
      title: "Resume Writing Tips",
      desc: "Expert advice on writing a compelling resume.",
      img: "https://via.placeholder.com/150x100",
    },
    {
      title: "Ace Your Next Interview",
      desc: "Prepare for your dream job with our AI-powered interview tools.",
      img: "https://via.placeholder.com/150x100",
    },
    {
      title: "Common Interview Mistakes",
      desc: "Avoid these common mistakes in your next interview.",
      img: "https://via.placeholder.com/150x100",
    },
  ];

  return (
    <div className="min-h-screen flex bg-[#1a1528] text-white">
      {/* Main Content */}
      <main className="flex-1 p-8">
        <h2 className="text-2xl font-bold mb-6">Question bank</h2>

        {/* Tabs */}
        <div className="flex gap-6 border-b border-gray-700 mb-6">
          {["All", "Articles", "Videos", "Courses"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 ${
                activeTab === tab
                  ? "border-b-2 border-purple-500 text-purple-400"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search for articles, videos, and courses"
            className="w-full px-4 py-3 rounded-lg bg-[#2a2439] border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Featured */}
        <section className="mb-10">
          <h3 className="text-lg font-semibold mb-4">Featured Resources</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {featured.map((item, i) => (
              <div
                key={i}
                className="bg-[#2a2439] rounded-lg p-4 hover:bg-[#32294a] cursor-pointer transition"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="rounded-md mb-3 w-full h-28 object-cover"
                />
                <h4 className="font-medium">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* All Resources */}
        <section>
          <h3 className="text-lg font-semibold mb-4">All Resources</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {resources.map((item, i) => (
              <div
                key={i}
                className="bg-[#2a2439] rounded-lg p-4 hover:bg-[#32294a] cursor-pointer transition"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="rounded-md mb-3 w-full h-28 object-cover"
                />
                <h4 className="font-medium">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
