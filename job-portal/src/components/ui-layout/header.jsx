import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { PenBox } from "lucide-react";

const Header = () => {
  return (
    <nav className=" py-4 flex justify-between items-center">
      <Link>
        <img src="/public/logo.png" alt="Hired logo" className="h-20" />
      </Link>
      <div className="flex gap-8">
        <SignedOut>
          <Button variant="outline">Login</Button>
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
  );
};

export default Header;
