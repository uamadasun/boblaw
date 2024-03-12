import { getBlogs, getPages } from "@/sanity/sanity-utils";
import Banner from "../components/Banner";
import HighlightsSection from "../components/HighlightsSection";
import OurPracticeSection from "../components/OurPracticeSection";
import { Services } from "../components/Services";
import { FeaturesSection } from "../components/FeaturesSection";
import { StepsSection } from "../components/StepsSection";
import { MissionSection } from "../components/MissionSection";

export default async function Home() {
  const pages = await getPages();

  return (
    <div>
      <Banner />
      <HighlightsSection />
      <OurPracticeSection />
      <Services allPages={{ pages }} />
      <FeaturesSection/>
      <StepsSection/>
      <MissionSection/>
    </div>
  );
}
