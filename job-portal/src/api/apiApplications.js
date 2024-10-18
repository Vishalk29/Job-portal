import supabaseClient from "@/utils/supaBase";
// - Apply to job ( candidate )
export async function applyJobs(token, _, jobData) {
  const supabase = await supabaseClient(token);
  // step1 upload the resume - for that creating random name
  const random = Math.floor(Math.random() * 90000);
  // giving filename
  const fileName = `resume-${random}-${jobData.candidate_id}`;
  // this how we can upload something
  const { error: storageError } = await supabase.storage
    .from("resume")
    .upload(fileName, jobData.resume);
  if (storageError) {
    console.error("Error error uploading resume", storageError);
    return null;
  }
  // need a url / we get URL
  const resume = `${supabaseUrl}/storage/v1/object/public/resumes/${fileName}`;
  const { data, error } = await supabase
    .from("applications")
    .insert([
      {
        ...jobData,
        resume,
      },
    ])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Error submitting Application");
  }
  return data;
}
