'use client';
import React, { useState } from 'react';

const HoverCard = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        const { left, top } = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        setMousePosition({ x, y });
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className="relative w-64 h-64 bg-gray-800 rounded-3xl overflow-hidden group"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className="absolute w-96 h-96 -left-48 -top-48 bg-mendable-400 rounded-full opacity-0 pointer-events-none transition-opacity duration-500 blur-[100px] z-30"
                style={{
                    transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                    opacity: isHovered ? 0.2 : 0,
                }}
            ></div>
            <div
                className="absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 bg-[radial-gradient(250px_circle_at_var(--mouse-x)_var(--mouse-y),theme(colors.gray.400),transparent)] group-hover:opacity-100 z-10"
                style={{
                    opacity: isHovered ? 1 : 0,
                    background: `radial-gradient(250px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(107, 114, 128, 1), transparent)`, // Adjust the color as needed
                }}
            ></div>
            <div className="flex items-center justify-center h-full">
                <h2 className="text-white">Hover over me!</h2>
            </div>
        </div>
    );
};

export default HoverCard;