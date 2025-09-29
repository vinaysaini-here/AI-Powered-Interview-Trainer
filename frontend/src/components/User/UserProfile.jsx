import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const [notifications, setNotifications] = useState(true);
  const navigate = useNavigate();

  // Dynamic progress values
  const progressData = [
    { label: "Mock Interviews Completed", value: 75 },
    { label: "Skills Mastered", value: 50 },
  ];

  return (
    <div className="flex-1 bg-[#12091b] text-white overflow-y-auto p-6">
      {/* Header */}
      <h2 className="text-2xl font-semibold mb-6">Profile</h2>

      {/* Profile Info */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <img
            src="https://randomuser.me/api/portraits/women/68.jpg"
            alt="Profile"
            className="w-20 h-20 rounded-full"
          />
          <div>
            <h3 className="text-lg font-semibold">Elizabeth Olsen</h3>
            <p className="text-gray-400 text-sm">Software Engineer</p>
          </div>
        </div>
        <button
          onClick={() => navigate("/user/edit-porfile")}
          className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm font-medium"
        >
          Edit Profile
        </button>
      </div>

      {/* Account Section */}
      <div className="mb-8">
        <h4 className="font-semibold mb-3">Account</h4>
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
          <div>
            <p>Email</p>
            <p className="text-white">kartikmanojh007@gmail.com</p>
          </div>
          <div>
            <p>Password</p>
            <p className="text-white">********</p>
          </div>
        </div>
      </div>

      {/* Progress Section */}
      <div className="mb-8">
        <h4 className="font-semibold mb-3">Progress</h4>
        <div className="space-y-4">
          {progressData.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between text-sm mb-1">
                <span>{item.label}</span>
                <span>{item.value}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-purple-500 h-2 rounded-full"
                  style={{ width: `${item.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Saved Resources */}
      <div className="mb-8">
        <h4 className="font-semibold mb-3">Saved Resources</h4>
        <div className="flex items-start space-x-4 bg-[#2a1f38] p-4 rounded-lg">
          <div>
            <h5 className="font-semibold">Mastering Behavioral Interviews</h5>
            <p className="text-sm text-gray-300">
              A comprehensive guide to answering common behavioral interview
              questions.
            </p>
          </div>
          <img
            src="https://via.placeholder.com/100x80"
            alt="Resource"
            className="w-28 h-20 object-cover rounded-md"
          />
        </div>
      </div>

      {/* Notifications */}
      <div className="mb-8">
        <h4 className="font-semibold mb-3">Notifications</h4>
        <div className="flex items-center justify-between bg-[#2a1f38] p-4 rounded-lg">
          <div>
            <h5 className="font-medium">App Updates</h5>
            <p className="text-sm text-gray-300">
              Receive notifications about new features and updates.
            </p>
          </div>
          <button
            onClick={() => setNotifications(!notifications)}
            className={`w-12 h-6 rounded-full p-1 transition ${
              notifications ? "bg-purple-600" : "bg-gray-500"
            }`}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full transition ${
                notifications ? "translate-x-6" : "translate-x-0"
              }`}
            ></div>
          </button>
        </div>
      </div>

      {/* Subscription */}
      <div>
        <h4 className="font-semibold mb-3">Subscription</h4>
        <div className="grid grid-cols-2 gap-4 text-sm bg-[#2a1f38] p-4 rounded-lg">
          <div>
            <p>Status</p>
            <p className="text-white">Active</p>
          </div>
          <div>
            <p>Plan</p>
            <p className="text-white">Premium</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
