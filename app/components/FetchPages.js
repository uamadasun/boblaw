import { getPages } from "@/sanity/sanity-utils";
import NavBar from "./NavBar";

export default async function FetchPages(){
  const pages = await getPages()
  console.log('my Pages:', pages)
  return(
    <div>
      <NavBar allPages={{pages}}/>
    </div>
  )
    
  
  
  
}