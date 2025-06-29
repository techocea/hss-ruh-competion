import {Link} from "react-router-dom";
import {Calendar, ChevronRight, MapPin, Users} from "lucide-react";

const FeaturedProject = () => {
    return (
        <section className="py-16 bg-accent relative overflow-hidden">
            {/* Background SVG Decorations */}
            <div className="absolute top-16 left-16 opacity-8">
                <svg width="180"
                     height="180"
                     viewBox="0 0 180 180"
                     className="text-green-200">
                    <path d="M90 20 Q120 40 140 70 Q160 100 140 130 Q120 160 90 140 Q60 160 40 130 Q20 100 40 70 Q60 40 90 20 Z"
                          fill="currentColor"/>
                    <path d="M90 50 Q110 60 120 80 Q130 100 120 120 Q110 140 90 130 Q70 140 60 120 Q50 100 60 80 Q70 60 90 50 Z"
                          fill="white"
                          opacity="0.3"/>
                </svg>
            </div>
            <div className="absolute bottom-8 right-8 opacity-8">
                <svg width="120"
                     height="120"
                     viewBox="0 0 120 120"
                     className="text-green-200">
                    <rect x="20"
                          y="20"
                          width="80"
                          height="80"
                          rx="15"
                          fill="currentColor"/>
                    <rect x="35"
                          y="35"
                          width="50"
                          height="50"
                          rx="10"
                          fill="white"
                          opacity="0.4"/>
                    <circle cx="60"
                            cy="60"
                            r="15"
                            fill="currentColor"
                            opacity="0.6"/>
                </svg>
            </div>
            <div className="absolute top-1/3 right-1/4 opacity-6">
                <svg width="60"
                     height="60"
                     viewBox="0 0 60 60"
                     className="text-green-100">
                    <polygon points="30,5 40,20 55,20 45,35 50,50 30,40 10,50 15,35 5,20 20,20"
                             fill="currentColor"/>
                </svg>
            </div>

            <div className="lg:max-w-6xl w-full mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
                        Featured Project
                    </h2>
                    <p className="text-slate-700">
                        Making a real impact in our communities
                    </p>
                </div>

                <div className="max-w-5xl lg:max-w-6xl mx-auto overflow-hidden relative">
                    {/* Card decorative elements */}
                    <div className="absolute top-4 left-4 opacity-10">
                        <svg width="50"
                             height="50"
                             viewBox="0 0 50 50"
                             className="text-green-400">
                            <circle cx="25"
                                    cy="25"
                                    r="20"
                                    fill="currentColor"/>
                            <circle cx="25"
                                    cy="25"
                                    r="10"
                                    fill="white"
                                    opacity="0.6"/>
                        </svg>
                    </div>
                    <div className="md:flex">
                        <div className="md:w-1/2 relative">
                            <img
                                src="/featured-hss.jpg"
                                alt="Tree planting project"
                                className="rounded-lg w-full h-96 object-cover relative z-10"
                            />
                            {/* Image overlay decoration */}
                            <div className="absolute bottom-4 right-4 opacity-20">
                                <svg width="40"
                                     height="40"
                                     viewBox="0 0 40 40"
                                     className="text-white">
                                    <path d="M20 5 L25 15 L35 15 L27 22 L30 32 L20 27 L10 32 L13 22 L5 15 L15 15 Z"
                                          fill="currentColor"/>
                                </svg>
                            </div>
                        </div>
                        <div className="md:w-1/2 p-0 py-8 lg:p-8 relative">
                            {/* Content area decoration */}
                            <div className="absolute top-2 right-2 opacity-8">
                                <svg width="30"
                                     height="30"
                                     viewBox="0 0 30 30"
                                     className="text-green-200">
                                    <rect x="5"
                                          y="5"
                                          width="20"
                                          height="20"
                                          rx="5"
                                          fill="currentColor"/>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-green-800 mb-4 relative z-10">
                                Kandy Forest Restoration Initiative
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Our flagship project aims to restore 500 acres of degraded forest land
                                in the Kandy district through native tree planting and community involvement.
                            </p>

                            <div className="space-y-3 mb-6">
                                <div className="flex items-center gap-3">
                                    <MapPin className="w-5 h-5 text-green-600"/>
                                    <span className="text-gray-700">Kandy District, Central Province</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Users className="w-5 h-5 text-green-600"/>
                                    <span className="text-gray-700">150+ Volunteers Engaged</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Calendar className="w-5 h-5 text-green-600"/>
                                    <span className="text-gray-700">Started January 2024</span>
                                </div>
                            </div>

                            <button className="btn btn-link px-0 py-2 text-lg">
                                <Link to="/projects" className="flex items-center justify-center gap-2">
                                    Learn More About Our Projects <ChevronRight/>
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default FeaturedProject
