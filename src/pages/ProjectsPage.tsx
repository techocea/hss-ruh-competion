import HeroBackground from "../components/common/HeroBackground.tsx";
import Banner from "../components/common/Banner.tsx";
import ProjectCard from "../components/shared/ProjectCard.tsx";
import {PROJECTS} from "../utils/constants.ts";

const ProjectsPage = () => {
    return (
        <>
            <section className="pt-20 pb-16 bg-accent relative overflow-hidden">
                {/* Background SVG Decorations */}
                <HeroBackground/>

                <Banner
                    title="Our Projects"
                    description="Discover our ongoing and completed environmental conservation projects
                across Sri Lanka. Join us in making a difference!"
                    imageSrc="./src/assets/projects-hss.jpg"
                    isHome={false}/>

            </section>
            <div className="py-16 lg:max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ProjectCard items={PROJECTS}/>
            </div>
        </>
    );
}
export default ProjectsPage
