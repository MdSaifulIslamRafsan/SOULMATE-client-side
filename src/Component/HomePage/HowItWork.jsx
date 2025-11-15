import { useEffect, useState } from "react";

const steps = [
  {
    title: "Create Your Profile",
    description:
      "Sign up and create a comprehensive biodata with your personal details, interests, and preferences.",
    step: "1",
    image: "/step-1.png",
  },
  {
    title: "Browse Profiles",
    description:
      "Explore verified profiles of compatible matches based on your criteria and expectations.",
    step: "2",
    image: "/step-2.png",
  },
  {
    title: "Express Interest",
    description:
      "Like or express interest in profiles you connect with. It's mutual interest that leads to connections.",
    step: "3",
    image: "/step-3.png",
  },
  {
    title: "Find Your Match",
    description:
      "Build meaningful relationships and take the next steps towards a lasting commitment.",
    step: "4",
    image: "/step-4.png",
  },
];
const HowItWorks = () => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12  my-5 bg-gray-100">
      <div className="mx-auto max-w-[1440px]  lg:w-10/12 w-11/12 ">
        <div className="lg:w-2/3 space-y-3 w-full mx-auto mb-10 text-center">
          <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
          <p className="">
            Finding your perfect match is simple and straightforward. Follow
            these five easy steps and let love guide you.
          </p>
        </div>
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 px-4 py-4 mx-auto">
          {/* Image changes with step */}
          <img
            src={steps[currentStep].image}
            alt={steps[currentStep].title}
            className="w-full h-full rounded-lg transition-all duration-500"
          />

          <div className="flex flex-col gap-6">
            {steps?.map((step, index) => (
              <div
                key={index}
                onClick={() => setCurrentStep(index)}
                className={`w-full shadow-md rounded-md border-2 transition-all duration-500 cursor-pointer ${
                  index === currentStep
                    ? "border-blue-500 border-2 bg-blue-500/10"
                    : "opacity-70 border-2"
                }`}
              >
                <div className="p-6">
                  <div className="text-2xl font-bold text-blue-700 uppercase mb-1">
                    Step {step?.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{step?.title}</h3>
                  <p className="text-foreground-muted">{step?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
