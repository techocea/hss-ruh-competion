import {Clock, Mail, MapPin, Phone} from "lucide-react";

const ContactDetails = () => {
    return (
        <div className="space-y-8 bg-white border rounded-lg border-slate-200">
            <div>
                <div className="p-8">
                    <h2 className="text-2xl font-bold text-green-800 mb-6">
                        Contact Information
                    </h2>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <Mail className="w-6 h-6 text-green-600 mt-1"/>
                            <div>
                                <h3 className="font-semibold text-green-800">Email</h3>
                                <p className="text-gray-600">info@greenrootssl.org</p>
                                <p className="text-gray-600">projects@greenrootssl.org</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Phone className="w-6 h-6 text-green-600 mt-1"/>
                            <div>
                                <h3 className="font-semibold text-green-800">Phone</h3>
                                <p className="text-gray-600">+94 11 234 5678</p>
                                <p className="text-gray-600">+94 77 123 4567</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <MapPin className="w-6 h-6 text-green-600 mt-1"/>
                            <div>
                                <h3 className="font-semibold text-green-800">Address</h3>
                                <p className="text-gray-600">
                                    No. 123, Galle Road,<br/>
                                    Colombo 03,<br/>
                                    Sri Lanka
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Clock className="w-6 h-6 text-green-600 mt-1"/>
                            <div>
                                <h3 className="font-semibold text-green-800">Office Hours</h3>
                                <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                                <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                                <p className="text-gray-600">Sunday: Closed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default ContactDetails
