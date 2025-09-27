import assets from "../../assets/assets";
import DashboardCard from "../Utils/DashboardCard";

const UserHome = () => {
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
      title: "Mock Interview with Experts",
      description:
        "Get personalized feedback from industry experts in realistic interview settings.",
    },
  ];

  return (
    <div className="flex-1 bg-[#12091b] text-white overflow-y-auto p-6">
      {/* Greeting */}
      <h2 className="text-xl font-semibold mb-4 text-end ">
        Welcome Back, Jksaini
      </h2>

      {/* Hero Section */}
      <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden mb-6">
        <img
          src="https://images.pexels.com/photos/1181352/pexels-photo-1181352.jpeg"
          alt="Interview"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-6 left-6">
          <h3 className="text-3xl md:text-4xl font-bold">
            Ace Your Next Interview
          </h3>
          <p className="text-sm md:text-base max-w-xl mt-2">
            Prepare for your dream job with our AI-powered interview preparation
            tools. Get personalized feedback and practice with realistic
            scenarios.
          </p>
        </div>
      </div>

      {/* Feature Cards */}
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

export default UserHome;
