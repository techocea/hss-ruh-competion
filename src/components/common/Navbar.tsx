import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import {NAV_ITEMS} from "../../utils/constants.ts";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-lg">
            <div className="lg:max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-lg">G</span>
                        </div>
                        <span className="text-xl font-bold text-green-800">GreenRoots Sri Lanka</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {NAV_ITEMS.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                className={({ isActive }) =>
                                    `text-gray-700 hover:text-green-600 transition-colors font-medium ${
                                        isActive ? 'text-green-600 border-b-2 border-green-600' : ''
                                    }`
                                }
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden py-4 border-t">
                        {NAV_ITEMS.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                className="block py-2 text-gray-700 hover:text-green-600 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;