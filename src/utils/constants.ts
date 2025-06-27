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