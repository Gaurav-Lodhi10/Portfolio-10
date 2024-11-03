import React from "react";
import Image from "next/image";

const Footer = () => {
    return (
        <div className="pt-16 pb-16 bg-[#0f0715]">
            <div className="flex justify-center">
                <Image
                    src="/images/logo.png"
                    alt="logo"
                    width={180}
                    height={180}
                    className="mx-auto"
                />
            </div>
            <div className="flex items-center flex-wrap justify-center space-x-10 space-y-4 text-white font-bold mt-6">
                <div>Home</div>
                <div>Services</div>
                <div>Projects</div> {/* Fixed typo: Project -> Projects */}
                <div>Contact</div>
            </div>
            <p className="text-white text-opacity-60 mt-6 text-center">
                &copy; All Rights Reserved by Gaurav Lodhi
            </p>
        </div>
    );
}

export default Footer;
