"use client"
import React, { useEffect } from "react"
import Hero from "./Hero/Hero";
import About from "./About/About"
import Services from "./Services/Services";
import Project from "./Project/Project"
import Skills from "./Skills/Skills"
import Blog from "./Blog/Blog"
import Contact from "./Contact/Contact"
import AOS from "aos";
import "aos/dist/aos.css"

const Homepage = ()=>{
    useEffect(()=>{
        const initAos=async()=>{
            await import('aos');
            AOS.init({
                duration:1000,
                easing:'ease',
                once:true,
                anchorPlacement:'top-bottom'

            })
            
        }
        initAos();

    },[])

    return <div className="Overflow-hidden">
        <Hero/>
        <About/>
        <Services/>
        <Project/>
        <Skills/>
        <Blog/>
        <Contact/>
        
    </div>
};

export default Homepage