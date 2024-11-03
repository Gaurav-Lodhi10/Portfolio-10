import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import { blogs } from "@/data/data";
import BlogCard from "./BlogCard";

const Blog = () => {
    return (
        <div className="pt-16 pb-16 bg-[#0f0715]">
            <SectionHeading>
                Course Works
            </SectionHeading>
            <div className="w-[80%] mx-auto mt-20 grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-12 items-center">
                {blogs.map((blog,i) => {
                    return (
                        <div data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay={`${i * 150}`} key={blog.id}>
                            <BlogCard blog={blog} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Blog;
