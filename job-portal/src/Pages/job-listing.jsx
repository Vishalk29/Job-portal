import { getJobs } from "@/api/apiJobs";
import JobCard from "@/components/ui-layout/job-card";
import { useFetch } from "@/hooks/use-fetch";
import { useUser } from "@clerk/clerk-react";
import React, { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";

export const JobListing = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [company_id, setCompany_id] = useState("");
  const { isLoaded } = useUser();

  const {
    fetchfn: fetchfnJobs,
    data: dataJobs,
    loading: loadingJobs,
    error: errorJobs,
  } = useFetch(getJobs, { location, searchQuery, company_id });
  useEffect(() => {
    if (isLoaded) fetchfnJobs();
  }, [isLoaded, location, searchQuery, company_id]);
  // This loader for user loadin
  if (!isLoaded) {
    return <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />;
  }
  return (
    <div>
      <h1 className="gradient-title font-extrabold text-6xl sm:text-7xl text-center pb-8">
        Latest Job
      </h1>
      {/* Add filters Here */}
      {/* This loader for jobs loading */}
      {loadingJobs && (
        <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />
      )}
      {/* Now we displaying job data */}
      {loadingJobs === false && (
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {dataJobs?.length ? (
            dataJobs.map((job) => {
              return <JobCard key={job.id} job={job} />;
            })
          ) : (
            <div>No jobs found </div>
          )}
        </div>
      )}
    </div>
  );
};
