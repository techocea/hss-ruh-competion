import HeroBackground from "../components/common/HeroBackground.tsx";
import Banner from "../components/common/Banner.tsx";
import ContactForm from "../components/shared/ContactForm.tsx";
import ContactDetails from "../components/shared/ContactDetails.tsx";

const ContactPage = () => {
    return (
        <>
            <section className="pt-20 pb-16 bg-accent relative overflow-hidden">
                {/* Background SVG Decorations */}
                <HeroBackground/>

                <Banner
                    title="Contact Us"
                    description="Get in touch with GreenRoots Sri Lanka. We'd love to hear from you and discuss how we can work together for a greener future."
                    imageSrc="/contact-hss.webp"
                    isHome={false}/>

            </section>
            <div className="py-16 px-4 lg:px-0 lg:max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
                <div>
                    <ContactForm/>
                </div>
                <div>
                    <ContactDetails/>
                </div>
            </div>
        </>
    );
};
export default ContactPage