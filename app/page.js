import { getBlogs } from "@/sanity/sanity-utils";
import Banner from "./components/Banner";
import HighlightsSection from "./components/HighlightsSection";
import OurPracticeSection from "./components/OurPracticeSection";

export default async function Home() {
  return (
    <div>
      
      <Banner />
      <HighlightsSection />
      <OurPracticeSection/>
    </div>
  );
}
