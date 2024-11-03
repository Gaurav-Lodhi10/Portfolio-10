import React from "react";
import SectionHeading from "@/components/Helper/SectionHeading";
import { projectData } from "@/data/data";
import Link from "next/link";
import Image from "next/image";

const Project = () => {
    return (
        <div className="pt-16 pb-16 bg-[#050709]">
            <SectionHeading>
                My Projects
            </SectionHeading>
            <div className="w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
                {projectData.map((project,i) => (
                    <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay={`${i * 150}`} key={project.id} className="bg-blue-500 p-6 rounded-lg hover:scale-105 transition-all duration-300 overflow-hidden">
                        <Link href={project.url} target="_blank">
                            <div className="relative w-full h-64"> {/* Fixed height for consistent box size */}
                                <Image
                                    src={project.image}
                                    alt="Project"
                                    layout="fill"  // Makes the image fill the container
                                    objectFit="cover" // Ensures the image covers the box without distorting
                                />
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;
