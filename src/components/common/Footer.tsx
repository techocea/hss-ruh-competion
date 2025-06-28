import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-green-800 text-white py-12">
            <div className="lg:max-w-6xl w-full mx-auto px-4">
                <div className="grid md:grid-cols-4 w-full gap-8">
                    <div className="">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-lg">G</span>
                            </div>
                            <span className="text-xl font-bold">GreenRoots Sri Lanka</span>
                        </div>
                        <p className="text-green-100 mb-4">
                            Protecting Sri Lanka's environment through community action and sustainable practices.
                        </p>
                        <div className="flex space-x-4">
                            <Facebook className="w-6 h-6 hover:text-green-300 cursor-pointer" />
                            <Twitter className="w-6 h-6 hover:text-green-300 cursor-pointer" />
                            <Instagram className="w-6 h-6 hover:text-green-300 cursor-pointer" />
                        </div>
                    </div>

                    <div className="lg:pl-10">
                        <p className="text-lg font-semibold mb-4">Quick Links</p>
                        <ul className="space-y-2 text-green-100">
                            <li><a href="/about"
                                   className="hover:text-white">About Us</a></li>
                            <li><a href="/projects"
                                   className="hover:text-white">Projects</a></li>
                            <li><a href="/vacancies"
                                   className="hover:text-white">Vacancies</a></li>
                            <li><a href="/contact"
                                   className="hover:text-white">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-lg font-semibold mb-4">Our Focus</p>
                        <ul className="space-y-2 text-green-100">
                            <li>Forest Conservation</li>
                            <li>Waste Management</li>
                            <li>Environmental Education</li>
                            <li>Community Engagement</li>
                        </ul>
                    </div>

                    <div className="">
                        <p className="text-lg font-semibold mb-4">Contact Info</p>
                        <div className="space-y-3 text-green-100">
                            <div className="flex items-center gap-2">
                                <Mail className="w-5 h-5"/>
                                <span>info@greenrootssl.org</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="w-5 h-5"/>
                                <span>+94 11 234 5678</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-5 h-5"/>
                                <span>Colombo, Sri Lanka</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-100">
                    <p>&copy; 2024 GreenRoots Sri Lanka. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;