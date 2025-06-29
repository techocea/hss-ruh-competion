import Banner from "../common/Banner.tsx";
import HeroBackground from "../common/HeroBackground.tsx";

const HeroSection = () => {
    return (
        <section className="pt-20 pb-16 bg-accent relative overflow-hidden">
            {/* Background SVG Decorations */}
            <HeroBackground/>

           <Banner title="Protecting Sri Lanka's Green Future" description="Join us in our mission to create a sustainable environment for future generations through community-driven conservation and environmental education" imageSrc="/hero-hss.jpg" isHome={true}/>
        </section>
    )
}
export default HeroSection
