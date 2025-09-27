const DashboardCard = ({ image, title, description }) => {
  return (
    <div className="bg-[#2a1f38] rounded-lg overflow-hidden hover:bg-[#3b2a4e] cursor-pointer transition">
      {/* Image */}
      <img src={image} alt={title} className="w-full h-40 object-cover" />

      {/* Text Content */}
      <div className="p-4">
        <h4 className="font-semibold mb-2">{title}</h4>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default DashboardCard;
