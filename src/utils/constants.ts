import {Award, Earth, Eye, Leaf, Recycle, Target, Users,} from "lucide-react";

export const NAV_ITEMS = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Vacancies', path: '/vacancies' },
    { name: 'Contact', path: '/contact' },
    { name: 'Feedback', path: '/feedback' },
];

export const  MISSIONS = [
    {
        icon: Leaf,
        title: "Forest Conservation",
        description: "Protecting and restoring Sri Lanka's precious forest ecosystems through community engagement."
    },
    {
        icon: Recycle,
        title: "Waste Management",
        description: "Implementing sustainable waste reduction and recycling programs in local communities."
    },
    {
        icon: Earth,
        title: "Environmental Education",
        description: "Educating communities about environmental sustainability and climate change awareness."
    }
];

export const STATS = [
    { icon: Users, title: "500+", description: "Volunteers" },
    { icon: Target, title: "25", description: "Projects Completed" },
    { icon: Eye, title: "1000+", description: "Trees Planted" },
    { icon: Award, title: "15", description: "Communities Served" }
];

export const PROJECTS = [
    {
        id: 1,
        title: "Kandy Forest Restoration Initiative",
        description: "Large-scale forest restoration project focusing on native tree species plantation and habitat restoration in the Kandy district.",
        image: "/forest-reservation.png",
        location: "Kandy District",
        status: "Active",
        startDate: "January 2024",
        volunteers: "150+",
        category: "Forest Conservation"
    },
    {
        id: 2,
        title: "Colombo Waste Management Program",
        description: "Community-based waste reduction and recycling initiative targeting urban areas in Colombo with educational workshops.",
        image: "/waste-management.png",
        location: "Colombo",
        status: "Active",
        startDate: "March 2024",
        volunteers: "80+",
        category: "Waste Management"
    },
    {
        id: 3,
        title: "Coastal Cleanup Campaign",
        description: "Monthly beach cleanup activities along the western coast, focusing on plastic waste removal and marine conservation awareness.",
        image: "/marine-conservation.png",
        location: "Western Coast",
        status: "Ongoing",
        startDate: "May 2023",
        volunteers: "200+",
        category: "Marine Conservation"
    },
    {
        id: 4,
        title: "School Environmental Education",
        description: "Educational program for schools teaching environmental awareness, sustainability practices, and climate change impact.",
        image: "/education.png",
        location: "Multiple Districts",
        status: "Active",
        startDate: "September 2023",
        volunteers: "50+",
        category: "Education"
    },
    {
        id: 5,
        title: "Galle Mangrove Restoration",
        description: "Restoration of mangrove ecosystems in Galle district to protect coastal areas from erosion and support marine biodiversity.",
        image: "/coastal-protection.png",
        location: "Galle District",
        status: "Completed",
        startDate: "June 2023",
        volunteers: "120+",
        category: "Coastal Protection"
    },
    {
        id: 6,
        title: "Urban Green Spaces Initiative",
        description: "Creating and maintaining green spaces in urban areas to improve air quality and provide recreational areas for communities.",
        image: "/urban-development.png",
        location: "Urban Areas",
        status: "Planning",
        startDate: "Coming Soon",
        volunteers: "0",
        category: "Urban Development"
    }
];

export const VACANCIES = [
    {
        id: 1,
        title: "Environmental Project Coordinator",
        type: "Full-time",
        location: "Colombo",
        description: "Lead and coordinate environmental conservation projects across multiple districts. Manage volunteer teams and liaise with community partners.",
        requirements: ["Degree in Environmental Science or related field", "3+ years project management experience", "Excellent communication skills", "Fluency in Sinhala, Tamil, and English"],
        category: "Staff Position"
    },
    {
        id: 2,
        title: "Marine Conservation Volunteer",
        type: "Volunteer",
        location: "Coastal Areas",
        description: "Participate in beach cleanup activities, marine life monitoring, and community awareness programs along Sri Lanka's coastline.",
        requirements: ["Passion for marine conservation", "Basic swimming skills preferred", "Weekend availability", "Own transportation preferred"],
        category: "Volunteer"
    },
    {
        id: 3,
        title: "Environmental Education Specialist",
        type: "Part-time",
        location: "Multiple Districts",
        description: "Develop and deliver educational programs for schools and communities. Create engaging content about environmental conservation and sustainability.",
        requirements: ["Teaching or education background", "Knowledge of environmental issues", "Creative content development skills", "Willingness to travel"],
        category: "Staff Position"
    },
    {
        id: 4,
        title: "Forest Restoration Volunteer",
        type: "Volunteer",
        location: "Kandy District",
        description: "Join our forest restoration team in tree planting, seedling care, and forest monitoring activities in the Kandy district.",
        requirements: ["Physical fitness for outdoor work", "Commitment to monthly activities", "Interest in forestry", "Basic knowledge of plants preferred"],
        category: "Volunteer"
    },
    {
        id: 5,
        title: "Social Media & Communications Manager",
        type: "Part-time",
        location: "Remote/Colombo",
        description: "Manage our social media presence, create content, and coordinate communication strategies to raise awareness about our conservation efforts.",
        requirements: ["Experience in social media management", "Content creation skills", "Photography/videography skills", "Knowledge of environmental issues"],
        category: "Staff Position"
    },
    {
        id: 6,
        title: "Community Outreach Volunteer",
        type: "Volunteer",
        location: "Rural Communities",
        description: "Engage with rural communities to promote environmental awareness, organize workshops, and support local conservation initiatives.",
        requirements: ["Strong interpersonal skills", "Cultural sensitivity", "Local language proficiency", "Community engagement experience preferred"],
        category: "Volunteer"
    }
];