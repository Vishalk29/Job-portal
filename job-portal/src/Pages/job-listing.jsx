import { getJobs } from "@/api/apiJobs";
import { useFetch } from "@/hooks/use-fetch";
import React, { useEffect } from "react";

export const JobListing = () => {
  //  To send the token we use usesession from cleark
  const {
    fetchfn: fetchfnJobs,
    data: dataJobs,
    loading: loadingJobs,
    error: errorJobs,
  } = useFetch(getJobs, {});
  useEffect(() => {
    fetchfnJobs();
  }, []);
  return <div>JobListing</div>;
};
