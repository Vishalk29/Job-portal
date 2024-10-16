import supabaseClient from "@/utils/supaBase";

export async function getJobs(token,{location,company_id,searchQuery}) {
  const supaBase = await supabaseClient(token);

  let query = supaBase.from('jobs').select("*,company:companies(name, logo_url) , saved_jobs(id)");
  if(location){
    query = query.eq("location",location)
  }
  if(company_id){
    query=query.eq("company_id",company_id)
  }
  if(searchQuery){
    query=query.ilike("title",`${searchQuery}%`)
  }

  const {data, error} = await query;

  if(error){
    console.error("Error fetching jobs :" , error);
    return null
  }
  return data;
}
