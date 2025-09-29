import { useState } from "react";

const UserEditProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    xyz1: "",
    xyz2: "",
    appUpdates: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Profile Data:", formData);
  };

  return (
    <div className="flex-1 bg-[#12091b] text-white overflow-y-auto p-6">
      <h2 className="text-2xl font-semibold mb-8">Edit Profile</h2>

      <form onSubmit={handleSubmit} className="space-y-6 ">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-[#2a1f38] rounded-lg outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-[#2a1f38] rounded-lg outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium mb-2">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-[#2a1f38] rounded-lg outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-[#2a1f38] rounded-lg outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        {/* XYZ Fields */}
        <div>
          <label className="block text-sm font-medium mb-2">XYZ</label>
          <input
            type="text"
            name="xyz1"
            value={formData.xyz1}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-[#2a1f38] rounded-lg outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">XYZ</label>
          <input
            type="text"
            name="xyz2"
            value={formData.xyz2}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-[#2a1f38] rounded-lg outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        {/* Notifications Toggle */}
        <div className="flex items-center justify-between bg-[#2a1f38] p-4 rounded-lg">
          <div>
            <h5 className="font-medium">App Updates</h5>
            <p className="text-sm text-gray-300">
              Receive notifications about new features and updates.
            </p>
          </div>
          <button
            type="button"
            onClick={() =>
              setFormData({ ...formData, appUpdates: !formData.appUpdates })
            }
            className={`w-12 h-6 rounded-full p-1 transition ${
              formData.appUpdates ? "bg-purple-600" : "bg-gray-500"
            }`}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full transition ${
                formData.appUpdates ? "translate-x-6" : "translate-x-0"
              }`}
            ></div>
          </button>
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="px-4 py-2 rounded-lg bg-gray-600 hover:bg-gray-700 text-sm font-medium"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-sm font-medium"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserEditProfile;
