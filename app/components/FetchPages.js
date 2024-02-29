import { getPages } from "@/sanity/sanity-utils";
import NavBar2 from "./NavBar2";

export default async function FetchPages(){
  const pages = await getPages()
  console.log('my Pages:', pages)
  return(
    <div>
      <NavBar2 allPages={{pages}}/>
    </div>
  )
    
  
  
  
}