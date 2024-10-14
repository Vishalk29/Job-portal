import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { SignedIn, SignedOut, SignIn, UserButton } from "@clerk/clerk-react";
import { PenBox } from "lucide-react";

const Header = () => {
  const [showsignIn, setShowsignIn] = useState(false);

  const handleOutsideSign = (e) => {
    if (e.target === e.currentTarget) {
      setShowsignIn(false);
    }
  };

  return (
    <>
      <nav className=" py-4 flex justify-between items-center">
        <Link>
          <img src="/public/logo.png" alt="Hired logo" className="h-20" />
        </Link>
        <div className="flex gap-8">
          <SignedOut>
            <Button variant="outline" onClick={() => setShowsignIn(true)}>
              Login
            </Button>
          </SignedOut>
          <SignedIn>
            <Link to="/post-job">
              {/* Add condition our here */}
              <Button variant="destructive" className="rounded-full">
                <PenBox size={20} className="mr-2" />
                Post a Jobs
              </Button>
            </Link>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
      {showsignIn && (
        <div
          className=" fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
          onClick={handleOutsideSign}
        >
          <SignIn
            signUpForceRedirectUrl="/onboarding"
            signUpFallbackRedirectUrl="/onboarding"
          />
        </div>
      )}
    </>
  );
};

export default Header;
