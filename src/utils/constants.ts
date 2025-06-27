import {Earth, Leaf, Recycle,} from "lucide-react";

export const NAV_ITEMS = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Vacancies', path: '/vacancies' },
    { name: 'Contact', path: '/contact' },
    { name: 'Feedback', path: '/feedback' },
] as const;

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
] as const;