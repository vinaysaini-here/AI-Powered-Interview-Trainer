import DashboardCard from "../Utils/DashboardCard";
import assets from "../../assets/assets";

const UserPractice = ({ progress = 60, username = "Jksaini" }) => {
  const dashboardCards = [
    {
      image: assets.img1,
      title: "Behavioral Interview",
      description:
        "Master common behavioral questions with AI-driven feedback.",
    },
    {
      image: assets.img2,
      title: "Technical Interview",
      description:
        "Sharpen your technical skills with coding challenges and system design questions.",
    },
    {
      image: assets.img3,
      title: "Case Study Interview",
      description:
        "Practice solving complex business cases with interactive simulations.",
    },
    {
      image: assets.img4,
      title: "Mock Interview with Expert",
      description:
        "Get personalized feedback from industry experts in a realistic interview setting.",
    },
  ];

  return (
    <div className="flex-1 bg-[#12091b] text-white overflow-y-auto p-6">
      {/* Greeting */}
      <h2 className="text-2xl font-semibold mb-2 text-end">
        Welcome back, {username}
      </h2>

      {/* Progress Section */}
      <div className="mb-6">
        <p className="text-sm mb-2">Your Progress</p>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div
            className="bg-purple-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-right text-xs mt-1">{progress}%</p>
      </div>

      {/* Practice Interviews Section */}
      <h3 className="text-lg font-semibold mb-4">Practice Interviews</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {dashboardCards.map((card, index) => (
          <DashboardCard
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default UserPractice;
