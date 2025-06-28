import HeroBackground from "../components/common/HeroBackground.tsx";
import Banner from "../components/common/Banner.tsx";

const ContactPage = () => {
    return (
        <>
            <section className="pt-20 pb-16 bg-accent relative overflow-hidden">
                {/* Background SVG Decorations */}
                <HeroBackground/>

                <Banner
                    title="Contact Us"
                    description="Get in touch with GreenRoots Sri Lanka. We'd love to hear from you and discuss how we can work together for a greener future."
                    imageSrc="./src/assets/contact-hss.webp"
                    isHome={false}/>

            </section>
            <div>

            </div>
        </>
    );
};
export default ContactPage