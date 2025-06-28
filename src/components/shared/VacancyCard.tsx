import {ArrowRight, Clock, MapPin} from "lucide-react";

interface VacancyCardItem {
    id:number,
    title:string,
    type:string,
    location:string,
    description:string,
    requirements:string[],
    category:string
}

interface VacancyCardProps {
    items:VacancyCardItem[];
}

const getTypeColor =(type:string)=>{
    switch(type){
        case 'Full-time': return 'bg-blue-100 text-blue-800';
        case 'Part-time': return 'bg-green-100 text-green-800';
        case 'Volunteer': return 'bg-purple-100 text-purple-800';
        default:
            return 'bg-gray-100 text-gray-800';
    }
}

const VacancyCard = ({items}:VacancyCardProps) => {
    return (
        <>
            {items.map((vacancy) => (
                <div key={vacancy.id} className="bg-white border rounded-lg border-slate-200 hover:shadow-lg transition-shadow">
                    <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                            <span className={`${getTypeColor(vacancy.type)} rounded-full py-0.5 font-semibold text-xs px-2`}>
                                {vacancy.type}
                            </span>
                            <span className="text-xs border rounded-full py-0.5 px-1.5">
                                {vacancy.category}
                            </span>
                        </div>

                        <h3 className="text-xl font-semibold text-green-800 mb-3">
                            {vacancy.title}
                        </h3>

                        <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4 text-green-600"/>
                                <span>{vacancy.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4 text-green-600"/>
                                <span>{vacancy.type}</span>
                            </div>
                        </div>

                        <p className="text-gray-600 mb-4">
                            {vacancy.description}
                        </p>

                        <div className="mb-6">
                            <h4 className="font-semibold text-green-800 mb-2">Requirements:</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                                {vacancy.requirements.map((req, index) => (
                                    <li key={index}
                                        className="flex items-start gap-2">
                                        <span className="text-green-600 mt-1">•</span>
                                        <span>{req}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <button className="w-full flex items-center justify-center gap-2 btn-primary text-white py-2 font-semibold">
                            Apply Now <ArrowRight/>
                        </button>
                    </div>
                </div>
            ))}
        </>
    );
}
export default VacancyCard
