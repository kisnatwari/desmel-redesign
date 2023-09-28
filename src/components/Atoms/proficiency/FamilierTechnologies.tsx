import Image from 'next/image';
import React from 'react'

const technologies = [
    {
        logo: "/github-logo.png"
    },
    {
        logo: "/docker-logo.png"
    },
    {
        logo: "/prisma-logo.png"
    },
    {
        logo: "/linux-logo.png"
    },
    {
        logo: "/arch-logo.png"
    }
];

const FamilierTechnologies = () => (
    <div className='flex items-center gap-5'>
        {
            technologies.map((tech, index) => (
                <div className='bg-white p-3 rounded-xl' key={index}>
                    <Image src={tech.logo} alt='Github' width={80} height={80} />
                </div>
            ))
        }
    </div>
)

export default FamilierTechnologies