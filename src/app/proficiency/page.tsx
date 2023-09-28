import React from 'react'
import Progress from '@/components/Atoms/proficiency/progress';
import { Righteous } from 'next/font/google';
import Education from '@/components/Atoms/proficiency/Education';
import Image from 'next/image';
import FamilierTechnologies from '@/components/Atoms/proficiency/FamilierTechnologies';
const righteous = Righteous({
    subsets: ['latin'],
    display: "swap",
    weight: "400",
    style: 'normal'
})

const TechStacks = [
    {
        name: "NextJS",
        image: "/NextJS-logo.png",
        proficiency: 70,
        color: "black"
    },
    {
        name: "MERN Stack",
        image: "/MERN-logo.png",
        proficiency: 60,
        "color": "#1A4674"
    },
    {
        name: "Tailwind CSS",
        image: "/tailwindcss-logo.png",
        proficiency: 90,
        color: "#38BDF8"
    },
    {
        name: "Bootstrap",
        image: "/bootstrap-logo.png",
        proficiency: 85,
        color: "#860AFB"
    },
    {
        name: "TypeScript",
        image: "/Typescript-logo.png",
        proficiency: 70,
        color: "#007ACC"
    },
    {
        name: "jQuery",
        image: "/jquery-logo.webp",
        proficiency: 80,
        color: "#1266A9"
    },
    {
        name: "Laravel",
        image: "/laravel-logo.png",
        proficiency: 82,
        color: "#FB503B"
    }
];


const page = () => {
    return (
        <div className={`container py-3 ${righteous.className}`}>
            <h1 className='text-xl opacity-90 text-cyan-500'>First of all, take a look at my Education....</h1>
            <div className='inline-block mx-auto'>
                <Education />
            </div>
            <h1 className='text-xl opacity-90 text-cyan-500 mt-4 mb-1'>
                Popular Experienced Tech Stacks
            </h1>
            <div className='flex gap-2 flex-wrap'>
                {
                    TechStacks.map((tech, index) => (
                        <Progress
                            key={index}
                            name={tech.name}
                            image={tech.image}
                            proficiency={tech.proficiency}
                            color={tech.color}
                        />
                    ))
                }
            </div>
            <h1 className='text-xl opacity-90 text-cyan-500 mt-4 mb-1'>
                Other Familier Technologies
            </h1>
            <FamilierTechnologies/>
        </div>
    )
}

export default page;