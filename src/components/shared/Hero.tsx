import { Link } from 'react-router-dom';

const Hero = () => {
    return (
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

            <div className="lg:max-w-6xl mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-6">
                            Protecting Sri Lanka's
                            <span className="text-green-600"> Green Future</span>
                        </h1>
                        <p className="text-slate-700 font-medium mb-8 leading-relaxed">
                            Join us in our mission to create a sustainable environment for future generations
                            through community-driven conservation and environmental education.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link to="/projects">
                                <button className="btn-primary px-6 py-2 text-lg">
                                    View Our Projects
                                </button>
                            </Link>
                            <Link to="/vacancies">
                                <button
                                        className="btn-outline px-6 py-2 text-lg">
                                    Join Our Team
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="lg:w-1/2 relative">
                        {/* Decorative SVG around image */}
                        <div className="absolute -top-8 -left-8 opacity-20">
                            <svg width="120"
                                 height="120"
                                 viewBox="0 0 120 120"
                                 className="text-green-300">
                                <path d="M60 20 C80 30, 100 50, 90 70 C80 90, 60 100, 40 90 C20 80, 10 60, 20 40 C30 20, 50 10, 60 20 Z"
                                      fill="currentColor"/>
                            </svg>
                        </div>
                        <div className="absolute -bottom-6 -right-6 opacity-20">
                            <svg width="100"
                                 height="100"
                                 viewBox="0 0 100 100"
                                 className="text-green-400">
                                <rect x="10"
                                      y="10"
                                      width="80"
                                      height="80"
                                      rx="20"
                                      fill="currentColor"/>
                                <circle cx="50"
                                        cy="50"
                                        r="25"
                                        fill="white"
                                        opacity="0.3"/>
                            </svg>
                        </div>
                        <img
                            src="./src/assets/hero-hss.jpg"
                            alt="Green forest canopy"
                            className="rounded-lg shadow-xl w-full h-96 object-cover relative z-10"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero
