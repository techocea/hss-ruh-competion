import {CheckCircle, CircleX} from "lucide-react";
import React, {useState} from "react";

interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

const ContactForm = () => {
    const [formData,setFormData] = useState<ContactFormData>({
        name:"",
        email:"",
        message:""
    });
    const [success, setSuccess] = useState<string>("");
    const [error, setError] = useState<string>("");

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        const {name, value} = e.target;
        setFormData(prev =>({...prev, [name]: value}))
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setError("");
        setSuccess("");

        if(!formData.name || !formData.email || !formData.message) {
            setError("Please enter all fields")
        } else{
        console.log(formData);
        setFormData({
            name: "",
            email: "",
            message: ""
        });
            setSuccess("Thank you! Your message was sent successfully.");
        }
    }

    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold text-green-800 mb-6">
                Send us a Message
            </h2>

            {success && (
                <div className="flex items-center justify-start gap-2 border-l-4 px-2 py-3 rounded border-green-500 bg-green-100 text-green-700 my-6">
                    <CheckCircle className="w-6 h-6 shrink-0"/>
                    <span>{success}</span>
                </div>
            )}

            {error && (
                <div className="flex items-start justify-start gap-2 border-l-4 px-2 py-3 rounded border-red-500 bg-red-100 text-red-700 my-6">
                    <CircleX className="w-6 h-6 shrink-0"/>
                    <span>{error}</span>
                </div>
            )}

            <form onSubmit={handleSubmit}
                  className="space-y-6 lg:max-w-xl w-full">
                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="name"
                           className="font-medium">Name</label>
                    <input id="name"
                           name="name"
                           value={formData.name}
                           onChange={handleInputChange}
                           className="input"
                           placeholder="Enter your name"/>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="email">Email Address</label>
                    <input id="email"
                           name="email"
                           value={formData.email}
                           onChange={handleInputChange}
                           type="email"
                           className="input"
                           placeholder="Enter your email"/>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="input min-h-32"
                        placeholder="Enter your message here..."
                    />
                </div>

                <button type="submit"
                        className="w-full flex items-center justify-center gap-2 btn-primary text-white py-2 font-semibold">
                    Send Message
                </button>
            </form>
        </div>
    );
}
export default ContactForm
