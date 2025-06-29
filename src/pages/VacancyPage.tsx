import {VACANCIES} from "../utils/constants.ts";
import Banner from "../components/common/Banner.tsx";
import VacancyCard from "../components/shared/VacancyCard.tsx";
import HeroBackground from "../components/common/HeroBackground.tsx";

const VacancyPage = () => {
    return (
        <>
            <section className="pt-20 pb-16 bg-accent relative overflow-hidden">
                {/* Background SVG Decorations */}
                <HeroBackground/>

                <Banner
                    title="Join Our Team"
                    description="Be part of Sri Lanka's environmental conservation movement.
            Explore volunteer opportunities and career positions with GreenRoots."
                    imageSrc="/join-hss.webp"
                    isHome={false}/>

            </section>
            <div className="py-16 px-4 lg:px-0 lg:max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
                <VacancyCard items={VACANCIES}/>
            </div>
        </>
    );
};
export default VacancyPage
