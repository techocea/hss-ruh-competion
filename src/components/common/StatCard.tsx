import React from "react";

interface StatCardItem {
    icon: React.ElementType;
    title: string;
    description: string;
}

interface StatCardProps {
    items: StatCardItem[];
}

const StatCard = ({ items }: StatCardProps) => {
    return (
        <>
        {items.map((item, index:number) => (
                <div key={index} className="bg-white border rounded-lg border-slate-200 text-center hover:shadow-lg transition-shadow relative overflow-hidden">
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
                            <item.icon className="w-8 h-8 text-green-600"/>
                        </div>
                        <h3 className="text-xl font-semibold text-green-800 mb-3">
                            {item.title}
                        </h3>
                        <p className="text-gray-600">
                            {item.description}
                        </p>
                    </div>
                </div>
            ))}
        </>
    )
}
export default StatCard
