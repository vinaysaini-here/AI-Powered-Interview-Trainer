import { useState } from "react";
import { Search, Plus, Filter, X } from "lucide-react";

const initialCandidates = [
  {
    id: 1,
    name: "Ethan Walker",
    role: "Senior Software Engineer",
    score: 85,
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Olivia Bennett",
    role: "Product Manager",
    score: 79,
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Noah Carter",
    role: "Data Scientist",
    score: 62,
    img: "https://randomuser.me/api/portraits/men/36.jpg",
  },
  {
    id: 4,
    name: "Ava Ramirez",
    role: "UX Designer",
    score: 92,
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 5,
    name: "Liam Reed",
    role: "Marketing Specialist",
    score: 75,
    img: "https://randomuser.me/api/portraits/men/50.jpg",
  },
];

const AdminCandidates = () => {
  const [candidates, setCandidates] = useState(initialCandidates);
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [newCandidate, setNewCandidate] = useState({
    name: "",
    role: "",
    score: "",
    img: "",
  });

  const filteredCandidates = candidates.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCandidate((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddCandidate = () => {
    if (!newCandidate.name || !newCandidate.role || !newCandidate.score || !newCandidate.img) {
      alert("Please fill all fields!");
      return;
    }

    const candidate = {
      id: candidates.length + 1,
      ...newCandidate,
      score: Number(newCandidate.score),
    };

    setCandidates([...candidates, candidate]);
    setNewCandidate({ name: "", role: "", score: "", img: "" });
    setIsModalOpen(false);
  };

  return (
    <div className="p-6 text-white w-full   ">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Candidates</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm font-medium"
        >
          <Plus size={16} /> Add Candidate
        </button>
      </div>

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex items-center bg-[#2a1f38] rounded-lg px-3 py-2 flex-1">
          <Search size={18} className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search candidates..."
            className="bg-transparent outline-none flex-1 text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button className="flex items-center gap-2 bg-[#2a1f38] hover:bg-[#3b2b4d] px-4 py-2 rounded-lg text-sm font-medium">
          <Filter size={16} /> Filter by Status
        </button>
      </div>

      {/* Candidate List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {filteredCandidates.map((candidate) => (
          <div
            key={candidate.id}
            className="bg-[#2a1f38] p-4 rounded-xl text-center shadow hover:shadow-lg transition"
          >
            <img
              src={candidate.img}
              alt={candidate.name}
              className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="font-semibold text-lg">{candidate.name}</h3>
            <p className="text-sm text-gray-400">{candidate.role}</p>
            <p className="text-sm mt-2 text-purple-400">
              Latest Interview Score: <span className="font-bold">{candidate.score}</span>
            </p>
          </div>
        ))}
      </div>

      {/* Add Candidate Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur bg-opacity-60 z-50">
          <div className="bg-[#1a1325] p-6 rounded-xl w-full max-w-md shadow-lg relative">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X size={20} />
            </button>

            <h3 className="text-xl font-bold mb-4">Add New Candidate</h3>

            <div className="flex flex-col gap-3">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={newCandidate.name}
                onChange={handleInputChange}
                className="bg-[#2a1f38] px-3 py-2 rounded-lg outline-none"
              />
              <input
                type="text"
                name="role"
                placeholder="Role / Job Title"
                value={newCandidate.role}
                onChange={handleInputChange}
                className="bg-[#2a1f38] px-3 py-2 rounded-lg outline-none"
              />
              <input
                type="number"
                name="score"
                placeholder="Latest Interview Score"
                value={newCandidate.score}
                onChange={handleInputChange}
                className="bg-[#2a1f38] px-3 py-2 rounded-lg outline-none"
              />
              <input
                type="text"
                name="img"
                placeholder="Image URL"
                value={newCandidate.img}
                onChange={handleInputChange}
                className="bg-[#2a1f38] px-3 py-2 rounded-lg outline-none"
              />

              <button
                onClick={handleAddCandidate}
                className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg mt-4"
              >
                Save Candidate
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminCandidates;
