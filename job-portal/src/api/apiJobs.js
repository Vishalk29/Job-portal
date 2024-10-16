import supabaseClient from "@/utils/supaBase";

export async function getJobs(token) {
  const supaBase = await supabaseClient(token);

  let query = supaBase.from('jobs').select("*");
  const {data, error} = await query;

  if(error){
    console.error("Error fetching jobs :" , error);
    return null
  }
  return data;
}
