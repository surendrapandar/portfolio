const TrustCard = ({ Icon, title, description, colorClass }) => {
  return (
    <div className="text-center group">
      <div
        className={`w-16 h-16 ${colorClass} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:${colorClass.replace(
          "/10",
          "/20"
        )} transition-colors duration-300`}
      >
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default TrustCard;
