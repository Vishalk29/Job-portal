import supabaseClient from "@/utils/supaBase";
// fetch companies
export async function getCompanies (token){
  const supabase = await supabaseClient(token)
  const {data , error } = await supabase.from('companies').select("*");
  if (error) {
    console.error("Error fetching the companies", error);
    return data;
  }
  return data;
} 
