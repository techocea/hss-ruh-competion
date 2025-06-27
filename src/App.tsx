import HeroSection from "./components/shared/HeroSection.tsx";
import MissionSection from "./components/shared/MissionSection.tsx";
import FeaturedProject from "./components/shared/FeaturedProject.tsx";

const App = () => {
    return (
        <div className="min-h-full bg-white">
           <HeroSection/>
           <MissionSection/>
           <FeaturedProject/>
        </div>
    )
}
export default App
