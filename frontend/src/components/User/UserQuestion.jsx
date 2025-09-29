import { useState } from "react";
import assets from "../../assets/assets";

const UserQuestion = () => {
  const [activeTab, setActiveTab] = useState("All");

  const featuredResources = [
    {
      image: assets.img1,
      title: "Mastering the STAR Method",
      description:
        "A comprehensive guide to answering behavioral questions effectively.",
    },
    {
      image: assets.img2,
      title: "Cracking the Coding Interview",
      description:
        "Essential coding problems and techniques for technical interviews.",
    },
    {
      image: assets.img3,
      title: "Behavioral Interview Prep",
      description:
        "Strategies and tips for acing behavioral interview questions.",
    },
    {
      image: assets.img4,
      title: "System Design Fundamentals",
      description:
        "Introduction to system design concepts and common interview questions.",
    },
  ];

  const allResources = [
    {
      image: assets.img1,
      title: "Negotiating Your Salary",
      description: "Learn how to negotiate your salary effectively.",
    },
    {
      image: assets.img2,
      title: "Building Your Personal Brand",
      description: "Tips for building a strong personal brand.",
    },
    {
      image: assets.img3,
      title: "Networking for Job Seekers",
      description: "Strategies for networking and finding job opportunities.",
    },
    {
      image: assets.img4,
      title: "Resume Writing Tips",
      description: "Expert advice on writing a compelling resume.",
    },
    {
      image: assets.img1,
      title: "Ace Your Next Interview",
      description:
        "Prepare for your dream job with our AI-powered interview preparation tools.",
    },
    {
      image: assets.img2,
      title: "Common Interview Mistakes",
      description: "Avoid these common mistakes in your next interview.",
    },
  ];

  return (
    <div className="flex-1 bg-[#12091b] text-white overflow-y-auto p-6">
      {/* Header */}
      <h2 className="text-2xl font-semibold mb-4">Question bank</h2>

      {/* Tabs */}
      <div className="flex space-x-6 border-b border-gray-700 mb-4">
        {["All", "Articles", "Videos", "Courses"].map((tab) => (
          <button
            key={tab}
            className={`pb-2 text-sm font-medium ${
              activeTab === tab
                ? "border-b-2 border-purple-500"
                : "text-gray-400"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search for articles, videos, and courses"
          className="w-full px-4 py-2 rounded-lg bg-[#2a1f38] text-white focus:outline-none"
        />
      </div>

      {/* Featured Resources */}
      <h3 className="text-lg font-semibold mb-4">Featured Resources</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {featuredResources.map((res, index) => (
          <div
            key={index}
            className="bg-[#2a1f38] rounded-lg p-4 hover:bg-[#3b2a4e] transition cursor-pointer"
          >
            <img
              src={res.image}
              alt={res.title}
              className="w-full h-28 object-cover rounded-md mb-3"
            />
            <h4 className="font-semibold">{res.title}</h4>
            <p className="text-sm text-gray-300">{res.description}</p>
          </div>
        ))}
      </div>

      {/* All Resources */}
      <h3 className="text-lg font-semibold mb-4">All Resources</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {allResources.map((res, index) => (
          <div
            key={index}
            className="bg-[#2a1f38] rounded-lg p-4 hover:bg-[#3b2a4e] transition cursor-pointer"
          >
            <img
              src={res.image}
              alt={res.title}
              className="w-full h-28 object-cover rounded-md mb-3"
            />
            <h4 className="font-semibold">{res.title}</h4>
            <p className="text-sm text-gray-300">{res.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserQuestion;
