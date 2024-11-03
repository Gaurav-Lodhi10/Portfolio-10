"use client";
import React, { useEffect, useState } from "react"; // Added useState import
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false); // Use useState to manage visibility

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Added smooth scrolling behavior
        });
    };

    return (
        <div className="fixed bottom-4 right-4 animate-pulse">
            {isVisible && (
                <button
                    onClick={scrollToTop} // Fixed 'onclick' to 'onClick'
                    className="bg-blue-900 text-white rounded-full w-12 h-12 flex items-center justify-center focus:outline-none"
                >
                    <FaArrowUp />
                </button>
            )}
        </div>
    );
};

export default ScrollToTop;
