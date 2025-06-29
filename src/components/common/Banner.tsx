import {Link} from "react-router-dom";
import SplitText from "./SplitText.tsx";

interface BannerProps{
    title:string;
    description:string;
    isHome:boolean;
    imageSrc:string;
}

const Banner = ({title,description,isHome,imageSrc}:BannerProps) => {
    return (
        <div className="lg:max-w-6xl mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2 text-center lg:text-left">
                    <SplitText sentence={title}/>

                    <p className="text-slate-700 font-medium mb-8 leading-relaxed">
                        {description}
                    </p>

                    {isHome && (
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button className="btn-primary px-6 py-2 text-lg">
                                <Link to="/projects">
                                    View Our Projects
                                </Link>
                            </button>
                            <button className="btn-outline px-6 py-2 text-lg">
                                <Link to="/vacancies">
                                    Join Our Team
                                </Link>
                            </button>
                        </div>
                    )}

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
                        src={imageSrc}
                        alt="Green forest canopy"
                        className="rounded-lg shadow-xl w-full h-96 object-cover relative z-10"
                    />
                </div>
            </div>
        </div>
    );
}
export default Banner
