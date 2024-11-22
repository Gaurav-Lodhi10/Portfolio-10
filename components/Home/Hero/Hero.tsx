import { BaseInfo } from "@/data/data";
import React from "react";
import { FaDownload, FaGithub, FaCode, FaWhatsapp, FaEnvelope } from "react-icons/fa"; // Add necessary icons
import { GrLinkedin } from "react-icons/gr"; // LinkedIn icon
import Image from 'next/image';
import leetcode from "../../../public/images/leetcode.svg";
import codechef from "../../../public/images/codechef.svg"
import codeforces from "../../../public/images/codeforces.svg"


const Hero = () => {
    return (
        <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden relative">
            <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
                    <div className="flex flex-col items-start">
                        {/* Aligning text to the start */}
                        <h1 data-aos="fade-left" className="text-2xl md:text-3xl lg:text-4xl mb-5 text-gray-300 font-semibold">
                            I am {BaseInfo.name}
                        </h1>
                        <h1 data-aos="fade-right" data-aos-delay="100" className="text-bg text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-white">
                            {BaseInfo.position}
                        </h1>
                        <p data-aos="fade-left" data-aos-delay="200" className="mt-6 text-sm md:text-base text-white text-opacity-60">
                            {BaseInfo.description}
                        </p>
                        {/* Download CV button */}
                        <a
                            href="/GAURAV LODHI Resume.pdf" // Corrected path for download
                            download={`CV_of_${BaseInfo.name}`} // Fixed template literal for dynamic filename
                            data-aos="zoom-in"
                            data-aos-delay="300"
                            className="md:px-8 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg transition-all duration-200 rounded-lg mt-8 bg-blue-700 hover:bg-blue-900 flex items-center space-x-2"
                        >
                            <span>Download CV</span>
                            <FaDownload />
                        </a>
                        {/* Social Links with Images */}
                        <div className="mt-8 flex space-x-4">
                            <a
                                href="https://leetcode.com/u/Gaurav_Lodhi/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white text-2xl hover:text-blue-500"
                            >
                                <Image src={leetcode} alt="Leetcode Icon" width={30} height={30} />
                            </a>
                            <a
                                href="https://www.codechef.com/users/lightcode_10"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white text-2xl hover:text-red-500"
                            >
                                <Image src={codechef} alt="Codechef Icon" width={30} height={30} />
                            </a>
                            <a
                                href="https://codeforces.com/profile/RedCoder_10"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white text-2xl hover:text-blue-500"
                            >
                                <Image src={codeforces} alt="Codeforces Icon" width={30} height={30} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/gauravlodhi/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white text-2xl hover:text-blue-700"
                            >
                                <GrLinkedin />
                            </a>
                            <a
                                href="https://github.com/Gaurav-Lodhi10"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white text-2xl hover:text-gray-600"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="mailto:gauravlodhi983@gmail.com"
                                className="text-white text-2xl hover:text-yellow-400"
                            >
                                <FaEnvelope />
                            </a>
                            <a
                                href="https://wa.me/+918595007855"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white text-2xl hover:text-green-500"
                            >
                                <FaWhatsapp />
                            </a>
                        </div>
                    </div>
                    <div data-aos="zoom-in" data-aos-delay="400" className="flex justify-center items-center">
                        {/* Center the image container */}
                        <div className="hidden lg:block rounded-[3rem] border border-blue-950 overflow-hidden">
                            <Image
                                src={BaseInfo.profilePic}
                                alt={`Profile picture of ${BaseInfo.name}`} // Improved alt text
                                width={500}
                                height={500}
                                className="object-cover" // Ensures the image covers the area appropriately
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
