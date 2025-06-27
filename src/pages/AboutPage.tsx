import Banner from "../components/common/Banner.tsx";
import MissionVision from "../components/shared/MissionVision.tsx";
import OurImpact from "../components/shared/OurImpact.tsx";

const AboutPage = () => {
    return (
        <>
        <section className="pt-20 pb-16 bg-accent relative overflow-hidden">
            {/* Background SVG Decorations */}
            <div className="absolute top-10 left-4 opacity-10">
                <svg width="100"
                     height="100"
                     viewBox="0 0 100 100"
                     className="text-green-600">
                    <path d="M50 10 L60 35 L85 35 L66 52 L76 77 L50 60 L24 77 L34 52 L15 35 L40 35 Z"
                          fill="currentColor"/>
                </svg>
            </div>
            <div className="absolute top-32 right-20 opacity-10">
                <svg width="80"
                     height="80"
                     viewBox="0 0 80 80"
                     className="text-green-500">
                    <circle cx="40"
                            cy="40"
                            r="35"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"/>
                    <path d="M40 15 L45 30 L60 30 L48 40 L53 55 L40 47 L27 55 L32 40 L20 30 L35 30 Z"
                          fill="currentColor"/>
                </svg>
            </div>
            <div className="absolute bottom-20 left-32 opacity-10">
                <svg width="60"
                     height="60"
                     viewBox="0 0 60 60"
                     className="text-green-400">
                    <path d="M30 5 Q20 15 25 25 Q15 20 5 30 Q15 40 25 35 Q20 45 30 55 Q40 45 35 35 Q45 40 55 30 Q45 20 35 25 Q40 15 30 5 Z"
                          fill="currentColor"/>
                </svg>
            </div>

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
