import { Calendar, MapPin, Users} from "lucide-react";

interface ProjectCardItem {
    id:number,
    title:string,
    description:string,
    image:string,
    location:string,
    status:string,
    startDate:string,
    volunteers:string,
    category:string
}

interface ProjectCardProps {
    items:ProjectCardItem[];
}

const getStatusColor = (status:string)=>{
    switch(status){
        case 'Active': return 'bg-green-100 text-green-800';
        case 'Ongoing': return 'bg-blue-100 text-blue-800';
        case 'Completed': return 'bg-gray-100 text-gray-800';
        case 'Planning': return 'bg-yellow-100 text-yellow-800';
        default: return 'bg-gray-100 text-gray-800';
    }
}


const ProjectCard = ({items}:ProjectCardProps) => {
    return (
        <>
            {items.map((project) => (
                <div key={project.id} className="bg-white border rounded-lg border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                        <div className="flex justify-between items-start mb-3">
                            <span className={`${getStatusColor(project.status)} rounded-full py-0.5 font-semibold text-xs px-2`}>
                                {project.status}
                            </span>
                            <span className="text-xs border rounded-full py-0.5 px-1.5">
                                {project.category}
                            </span>
                        </div>

                        <h3 className="text-xl font-semibold text-green-800 mb-3">
                            {project.title}
                        </h3>

                        <p className="text-gray-600 mb-4 text-sm">
                            {project.description}
                        </p>

                        <div className="space-y-2 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-green-600"/>
                                <span>{project.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-green-600"/>
                                <span>{project.startDate}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="w-4 h-4 text-green-600"/>
                                <span>{project.volunteers} Volunteers</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
export default ProjectCard
