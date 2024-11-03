import { contactData } from "@/data/data";
import React from "react";
import { FaEnvelope, FaMap, FaPhone } from "react-icons/fa";

const ContactInfo = () => {
    return (
        <div>
            <div className="flex items-center space-x-8">
                <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center">
                    <FaPhone className="w-4 h-4 md:w-7 text-white" />
                </div>
                <div>
                    <h1 className="text-lg sm:text-xl text-white font-bold text-left">Phone</h1>
                    <h1 className="text-lg sm:text-xl text-white font-bold mt-1">{contactData.phone}</h1>
                </div>
            </div>
            <div className="flex items-center space-x-8 mt-8 mb-8">
                <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center">
                    <FaEnvelope className="w-4 h-4 md:w-7 text-white" />
                </div>
                <div>
                    <h1 className="text-lg sm:text-xl text-white font-bold text-left">Email Address</h1>
                    <h1 className="text-lg sm:text-xl text-white font-bold mt-1">{contactData.email}</h1>
                </div>
            </div>
            <div className="flex items-center space-x-8 mt-8 mb-8">
                <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center">
                    <FaMap className="w-4 h-4 md:w-7 text-white" />
                </div>
                <div>
                    <h1 className="text-lg sm:text-xl text-white font-bold text-left">Address</h1>
                    <h1 className="text-lg sm:text-xl text-white font-bold mt-1">{contactData.address}</h1>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
