import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

const AppliedJobDrawer = ({
  user,
  dataSingleJobs,
  fetchFnSingleJobs,
  applied = false,
}) => {
  return (
    <Drawer open={applied ? false : undefined}>
      <DrawerTrigger asChild>
        <Button
          size="lg"
          variant={dataSingleJobs?.isOpen && !applied ? "blue" : "destructive"}
          disabled={!dataSingleJobs?.isOpen || applied}
        >
          {dataSingleJobs?.isOpen
            ? applied
              ? "Applied"
              : "Apply"
            : "Hiring Closed"}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>
            Apply for {dataSingleJobs?.title} at {dataSingleJobs?.company?.name}
          </DrawerTitle>
          <DrawerDescription>Please fill the form below</DrawerDescription>
        </DrawerHeader>
        <form className="flex flex-col gap-4 p-4 pb-0">
          <Input
            type="number"
            placeholder="Years of Experience"
            className="flex-1"
          />
          <Input
            type="text"
            placeholder="Skills (comma Separated)"
            className="flex-1"
          />
          <RadioGroup>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Intermediate" id="intermediate" />
              <Label htmlFor="intermediate">Intermediate</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Graduate" id="graduate" />
              <Label htmlFor="graduate">Graduate</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Post Graduate" id="post-graduate" />
              <Label htmlFor="post-graduate">Post Graduate</Label>
            </div>
          </RadioGroup>
          <Input
            type="file"
            accept=".pdf, .doc,.docx"
            className="flex-1 file:text-gray-500"
          />
          <Button type="submit" variant="blue" size="lg">
            Apply
          </Button>
        </form>

        <DrawerFooter>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default AppliedJobDrawer;
