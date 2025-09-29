import { useState } from "react";
import assets from "../../assets/assets";

const UserCommunity = () => {
  const [activeTab, setActiveTab] = useState("All");

  const trendingDiscussions = [
    {
      title: "How to handle unexpected questions in an interview?",
      description:
        "Share your experiences and tips for dealing with curveball questions during interviews.",
      image:  assets.img1,
    },
    {
      title: "Best resources for system design preparation?",
      description:
        "Discuss your favorite books, articles, and courses for mastering system design concepts.",
      image:  assets.img2,
    },
  ];

  const studyGroups = [
    {
      image:  assets.img3,
      title: "Coding Interview Prep",
      description:
        "Join a group focused on solving coding problems and improving algorithmic skills.",
    },
    {
      image:  assets.img4,
      title: "Behavioral Interview Practice",
      description:
        "Practice answering behavioral questions and get feedback from peers.",
    },
    {
      image:  assets.img1,
      title: "System Design Study Group",
      description:
        "Collaborate with others to study system design principles and tackle complex problems.",
    },
  ];

  const posts = [
    {
      user: "Ethan Carter",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      time: "2 hours ago",
      content:
        "Just finished a mock interview and got some great feedback. Anyone else want to practice?",
      likes: 12,
      comments: 2,
    },
    {
      user: "Olivia Bennett",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      time: "4 hours ago",
      content:
        "Looking for a study partner for system design. Anyone interested?",
      likes: 8,
      comments: 1,
    },
  ];

  return (
    <div className="flex-1 bg-[#12091b] text-white overflow-y-auto p-6">
      {/* Header */}
      <h2 className="text-2xl font-semibold mb-4">Community</h2>

      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search for discussions, groups, and users"
          className="w-full px-4 py-2 rounded-lg bg-[#2a1f38] text-white focus:outline-none"
        />
      </div>

      {/* Tabs */}
      <div className="flex space-x-6 border-b border-gray-700 mb-6">
        {["All", "Discussions", "Groups"].map((tab) => (
          <button
            key={tab}
            className={`pb-2 text-sm font-medium ${
              activeTab === tab ? "border-b-2 border-purple-500" : "text-gray-400"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Trending Discussions */}
      <h3 className="text-lg font-semibold mb-4">Trending Discussions</h3>
      <div className="space-y-6 mb-8">
        {trendingDiscussions.map((discussion, index) => (
          <div key={index} className="flex justify-between items-start">
            <div>
              <h4 className="font-semibold">{discussion.title}</h4>
              <p className="text-sm text-gray-300">{discussion.description}</p>
            </div>
            <img
              src={discussion.image}
              alt={discussion.title}
              className="w-28 h-20 object-cover rounded-md ml-4"
            />
          </div>
        ))}
      </div>

      {/* Active Study Groups */}
      <h3 className="text-lg font-semibold mb-4">Active Study Groups</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {studyGroups.map((group, index) => (
          <div
            key={index}
            className="bg-[#2a1f38] rounded-lg p-4 hover:bg-[#3b2a4e] transition cursor-pointer"
          >
            <img
              src={group.image}
              alt={group.title}
              className="w-full h-28 object-cover rounded-md mb-3"
            />
            <h4 className="font-semibold">{group.title}</h4>
            <p className="text-sm text-gray-300">{group.description}</p>
          </div>
        ))}
      </div>

      {/* Recent Posts */}
      <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
      <div className="space-y-6">
        {posts.map((post, index) => (
          <div key={index} className="flex items-start space-x-4">
            <img
              src={post.avatar}
              alt={post.user}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <div className="flex items-center space-x-2">
                <h4 className="font-semibold">{post.user}</h4>
                <span className="text-xs text-gray-400">{post.time}</span>
              </div>
              <p className="text-sm mb-2">{post.content}</p>
              <div className="flex space-x-4 text-xs text-gray-400">
                <span>👍 {post.likes}</span>
                <span>💬 {post.comments}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserCommunity;
