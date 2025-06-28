import Banner from "../components/common/Banner.tsx";
import MissionVision from "../components/shared/MissionVision.tsx";
import OurImpact from "../components/shared/OurImpact.tsx";
import HeroBackground from "../components/common/HeroBackground.tsx";

const AboutPage = () => {
    return (
        <>
        <section className="pt-20 pb-16 bg-accent relative overflow-hidden">
            {/* Background SVG Decorations */}
            <HeroBackground/>

            <Banner
                title="About GreenRoots Sri Lanka"
                description="Founded in 2020, we are a dedicated team of environmental enthusiasts committed to protecting Sri Lanka's natural heritage for future generations."
                imageSrc="./src/assets/about-hss.webp"
                isHome={false}/>
        </section>

            <MissionVision/>

            <OurImpact/>
        </>
    )
}
export default AboutPage
