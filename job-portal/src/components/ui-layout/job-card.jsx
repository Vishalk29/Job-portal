import { useUser } from "@clerk/clerk-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import MyJob from "@/Pages/my-job";
import { HeartIcon, MapPinIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const JobCard = ({
  job,
  ismyJobs = false,
  savedInit = false,
  onjobSaved = () => {},
}) => {
  const { user } = useUser();
  console.log(job);
  return (
    <Card>
      <CardHeader>
        {/* company title and trashcan */}
        <CardTitle className="flex justify-between font-bold">
          {job.title}
          {MyJob && (
            <Trash2Icon
              fill="red"
              size={18}
              className="text-red-300 cursor-pointer"
            />
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 flex-1">
        <div className="flex justify-between">
          {/* Company logo */}
          {job.company && (
            <img
              src={job.company.logo_url}
              alt="company-logo"
              className="h-6"
            />
          )}
          {/* company location */}
          <div className="flex gap-2 items-center">
            <MapPinIcon size={15} />
            {job.location}
          </div>
        </div>
        <hr />
        {job.description}
      </CardContent>
      {/* company more details */}
      <CardFooter className="flex gap-2">
        <Link to={`/job/${job.id}`} className="flex-1">
          <Button variant="secondary" className="w-full">
            More Details
          </Button>
        </Link>
        {/* Heart icons */}
        <HeartIcon size={20} stroke="red" fill="red"/>
      </CardFooter>
    </Card>
  );
};

export default JobCard;
