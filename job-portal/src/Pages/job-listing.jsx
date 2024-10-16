import { getJobs } from "@/api/apiJobs";
import { useSession } from "@clerk/clerk-react";
import React, { useEffect } from "react";

export const JobListing = () => {
  //  To send the token we use usesession from cleark
  const { session } = useSession();
  const fetchJobs = async () => {
    const supabaseAccessToken = await session.getToken({
      template: "supabase",
    });
    const jobData = await getJobs(supabaseAccessToken);
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  return <div>JobListing</div>;
};
