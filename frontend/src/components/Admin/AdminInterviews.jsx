import { useState } from "react";
import { Search, Filter, Plus, X } from "lucide-react";

const initialInterviews = {
  completed: [
    {
      id: 1,
      name: "Owen Harper",
      role: "Software Engineer",
      img: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      id: 2,
      name: "Sophia Carter",
      role: "Product Manager",
      img: "https://randomuser.me/api/portraits/women/55.jpg",
    },
    {
      id: 3,
      name: "Chloe Ramirez",
      role: "UX Designer",
      img: "https://randomuser.me/api/portraits/women/60.jpg",
    },
  ],
  inProgress: [
    {
      id: 4,
      name: "Lucas Bennett",
      role: "Data Scientist",
      img: "https://randomuser.me/api/portraits/men/25.jpg",
    },
  ],
  needsReview: [
    {
      id: 5,
      name: "Jackson Reed",
      role: "Marketing Specialist",
      img: "https://randomuser.me/api/portraits/men/30.jpg",
    },
  ],
};

const AdminInterviews = () => {
  const [search, setSearch] = useState("");
  const [interviews, setInterviews] = useState(initialInterviews);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    role: "",
    img: "",
    status: "inProgress",
  });

  const filterBySearch = (list) =>
    list.filter((i) =>
      i.name.toLowerCase().includes(search.toLowerCase())
    );

  const handleAddInterview = () => {
    if (!formData.name || !formData.role || !formData.img) return;

    const newInterview = {
      id: Date.now(),
      name: formData.name,
      role: formData.role,
      img: formData.img,
    };

    setInterviews((prev) => ({
      ...prev,
      [formData.status]: [...prev[formData.status], newInterview],
    }));

    setFormData({ name: "", role: "", img: "", status: "inProgress" });
    setIsModalOpen(false);
  };

  return (
    <div className="p-6 text-white w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Interviews</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm font-medium"
        >
          <Plus size={16} /> New Interview
        </button>
      </div>

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex items-center bg-[#2a1f38] rounded-lg px-3 py-2 flex-1">
          <Search size={18} className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search interviews..."
            className="bg-transparent outline-none flex-1 text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button className="flex items-center gap-2 bg-[#2a1f38] hover:bg-[#3b2b4d] px-4 py-2 rounded-lg text-sm font-medium">
          <Filter size={16} /> Filter by Status
        </button>
      </div>

      {/* Completed */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Completed</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-lvh">
          {filterBySearch(interviews.completed).map((interview) => (
            <div
              key={interview.id}
              className="bg-[#2a1f38] p-4 rounded-xl text-center shadow hover:shadow-lg transition"
            >
              <img
                src={interview.img}
                alt={interview.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-semibold text-lg">{interview.name}</h3>
              <p className="text-sm text-gray-400">{interview.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* In Progress */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">In Progress</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-lvh">
          {filterBySearch(interviews.inProgress).map((interview) => (
            <div
              key={interview.id}
              className="bg-[#2a1f38] p-4 rounded-xl text-center shadow hover:shadow-lg transition"
            >
              <img
                src={interview.img}
                alt={interview.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-semibold text-lg">{interview.name}</h3>
              <p className="text-sm text-gray-400">{interview.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Needs Review */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Needs Review</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-lvh">
          {filterBySearch(interviews.needsReview).map((interview) => (
            <div
              key={interview.id}
              className="bg-[#2a1f38] p-4 rounded-xl text-center shadow hover:shadow-lg transition"
            >
              <img
                src={interview.img}
                alt={interview.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-semibold text-lg">{interview.name}</h3>
              <p className="text-sm text-gray-400">{interview.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Add Interview Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-[#1c1525] p-6 rounded-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Add New Interview</h3>
              <button onClick={() => setIsModalOpen(false)}>
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Candidate Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-[#2a1f38] px-3 py-2 rounded-lg text-sm outline-none"
              />
              <input
                type="text"
                placeholder="Role"
                value={formData.role}
                onChange={(e) =>
                  setFormData({ ...formData, role: e.target.value })
                }
                className="w-full bg-[#2a1f38] px-3 py-2 rounded-lg text-sm outline-none"
              />
              <input
                type="text"
                placeholder="Image URL"
                value={formData.img}
                onChange={(e) =>
                  setFormData({ ...formData, img: e.target.value })
                }
                className="w-full bg-[#2a1f38] px-3 py-2 rounded-lg text-sm outline-none"
              />
              <select
                value={formData.status}
                onChange={(e) =>
                  setFormData({ ...formData, status: e.target.value })
                }
                className="w-full bg-[#2a1f38] px-3 py-2 rounded-lg text-sm outline-none"
              >
                <option value="completed">Completed</option>
                <option value="inProgress">In Progress</option>
                <option value="needsReview">Needs Review</option>
              </select>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 rounded-lg bg-gray-600 hover:bg-gray-700 text-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleAddInterview}
                className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-sm"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminInterviews;
