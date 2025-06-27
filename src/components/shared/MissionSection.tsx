import {MISSIONS} from "../../utils/constants.ts";

const MissionSection = () => {
    return (
        <section className="py-16 bg-white relative overflow-hidden">
            {/* Background SVG Decorations */}
            <div className="absolute top-8 left-8 opacity-8">
                <svg width="200"
                     height="200"
                     viewBox="0 0 200 200"
                     className="text-green-100">
                    <path d="M100 20 C140 40, 180 80, 160 120 C140 160, 100 180, 60 160 C20 140, 0 100, 20 60 C40 20, 80 0, 100 20 Z"
                          fill="currentColor"/>
                    <path d="M100 50 C120 60, 140 80, 130 100 C120 120, 100 130, 80 120 C60 110, 50 90, 60 70 C70 50, 90 40, 100 50 Z"
                          fill="white"
                          opacity="0.5"/>
                </svg>
            </div>
            <div className="absolute bottom-12 right-12 opacity-8">
                <svg width="150"
                     height="150"
                     viewBox="0 0 150 150"
                     className="text-green-100">
                    <polygon points="75,15 90,60 135,60 105,90 120,135 75,105 30,135 45,90 15,60 60,60"
                             fill="currentColor"/>
                    <circle cx="75"
                            cy="75"
                            r="30"
                            fill="white"
                            opacity="0.4"/>
                </svg>
            </div>
            <div className="absolute top-1/2 left-1/4 opacity-6">
                <svg width="80"
                     height="80"
                     viewBox="0 0 80 80"
                     className="text-green-50">
                    <path d="M40 10 L50 30 L70 30 L55 45 L60 65 L40 55 L20 65 L25 45 L10 30 L30 30 Z"
                          fill="currentColor"/>
                </svg>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
                        Our Mission
                    </h2>
                    <p className="text-slate-600 max-w-xl mx-auto">
                        GreenRoots Sri Lanka is dedicated to creating a sustainable future through
                        environmental conservation, community engagement, and education.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {MISSIONS.map((mission, index) => (
                        <div key={index} className="border rounded-lg border-slate-200 text-center hover:shadow-lg transition-shadow relative overflow-hidden">
                            {/* Card-specific decorative elements */}
                            <div className="absolute top-2 right-2 opacity-10">
                                <svg width="40"
                                     height="40"
                                     viewBox="0 0 40 40"
                                     className="text-green-300">
                                    <circle cx="20"
                                            cy="20"
                                            r="15"
                                            fill="currentColor"/>
                                </svg>
                            </div>
                            <div className="p-8 relative z-10">
                                <div className="flex justify-center mb-4">
                                    <mission.icon className="w-8 h-8 text-green-600"/>
                                </div>
                                <h3 className="text-xl font-semibold text-green-800 mb-3">
                                    {mission.title}
                                </h3>
                                <p className="text-gray-600">
                                    {mission.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MissionSection;