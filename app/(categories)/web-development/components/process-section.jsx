export default function ProcessSection() {
  const developmentSteps = [
    {
      step: 1,
      title: "Discovery & Planning",
      description:
        "Understanding your requirements and planning the app architecture",
      icon: "🎯",
    },
    {
      step: 2,
      title: "UI/UX Design",
      description: "Creating intuitive and engaging user interfaces",
      icon: "🎨",
    },
    {
      step: 3,
      title: "Development",
      description: "Building your app with modern mobile technologies",
      icon: "⚙️",
    },
    {
      step: 4,
      title: "Testing & QA",
      description: "Rigorous testing across multiple devices and platforms",
      icon: "✅",
    },
    {
      step: 5,
      title: "Deployment",
      description: "Launch your app on the App Store and Google Play",
      icon: "🚀",
    },
  ];

  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">
          Development Process
        </h2>
        <div className="relative grid md:grid-cols-3 lg:grid-cols-5 gap-8">
          {developmentSteps.map((step, index) => (
            <div
              key={step.step}
              className="relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 flex flex-col items-center text-center"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="font-bold mb-2 text-black">
                {step.step}. {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
