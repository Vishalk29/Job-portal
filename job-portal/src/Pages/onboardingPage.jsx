import { useUser } from "@clerk/clerk-react";
import React from "react";
import { BarLoader, ClockLoader } from "react-spinners";

const OnboardingPage = () => {
  const { user, isLoaded } = useUser();
  if (!isLoaded) {
    return <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />;
  }
  return (
    <div>
      <h1 className="text-white">Helllpop</h1>
    </div>
  );
};

export default OnboardingPage;
