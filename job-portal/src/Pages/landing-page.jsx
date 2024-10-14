import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
      <section className="text-center">
        <h1 className="flex flex-col justify-center items-center gradient-title text-4xl sm:text-6xl lg:text-8xl tracking-tighter font-extrabold py-4">
          Find Your Dream Job{" "}
          <span className="flex items-center gap-5 sm:gap-6">
            and get{" "}
            <img
              src="/public/logo.png"
              alt="hired logo"
              className="h-14 sm:h-24 lg:h-32"
            />
          </span>
        </h1>
        <p className="text-textColor text-xs sm:text-xl sm:mt-4">
          Explore thousands of job listing or find the perfect candidate
        </p>
      </section>
      <div>
        {/* Button */}
        <div className="flex gap-6 justify-center">
          <Link to="/jobs">
            <Button variant="blue" size="xl">
              Find Jobs
            </Button>
          </Link>
          <Link to="/post-job">
            <Button variant="destructive" size="xl">
              Post a Jobs
            </Button>
          </Link>
        </div>
        {/* Carosusal */}
      </div>
      {/* banner */}
      <section>{/* card */}</section>
      {/* Accordian */}
    </main>
  );
};

export default LandingPage;
