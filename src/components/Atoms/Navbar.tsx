import Image from 'next/image';
import React from 'react'
import { Righteous } from 'next/font/google';
import { Sun } from 'lucide-react';
import Link from 'next/link';

const righteous = Righteous({
    subsets: ['latin'],
    display: "swap",
    weight: "400",
    style: 'normal'
})

type Props = {}

const Navbar = (props: Props) => {
    return (
        <div className={`container flex justify-between items-center py-3 ${righteous.className}`}>
            <div className='flex items-center gap-2'>
                <Image src="/favicon.jpeg" alt='Favicon' width={28} height={28} className='rounded-full' />
                <span className='text-lg'>KISNATWARI</span>
            </div>
            <div>
                <nav>
                    <ul className='flex gap-3'>
                        <li>Projects</li>
                        <li>Proficiency</li>
                        <li>Message</li>
                    </ul>
                </nav>
            </div>
            <div className='flex gap-4 items-center'>
                <Sun size={20} />
                <Link href={"/"}>Blogs</Link>
            </div>
        </div>
    )
}

export default Navbar;