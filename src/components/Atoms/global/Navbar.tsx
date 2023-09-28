import React from 'react'
import { Righteous } from 'next/font/google';
import { Sun } from 'lucide-react';
import Link from 'next/link';
import { NavAvatar } from './NavAvatar';
import { ModeToggle } from './ModeToggle';

const righteous = Righteous({
    subsets: ['latin'],
    display: "swap",
    weight: "400",
    style: 'normal'
})

type Props = {}

const Navbar = (props: Props) => {
    const linksClass = "hover:text-cyan-600 after:w-full after:scale-0 after:h-0.5 relative after:absolute after:bg-cyan-600 after:-bottom-1 after:left-0 px-1 hover:after:scale-100 duration-300 after:duration-300";
    return (
        <div className={`container flex justify-between items-center py-3 ${righteous.className}`}>
            <div className='flex items-center gap-2'>
                <NavAvatar />
                <Link href={"/"} className='text-lg'>KISNATWARI</Link>
            </div>
            <div>
                <nav>
                    <ul className='flex gap-3'>
                        <li className={linksClass}>
                            <Link href={"/projects"}>Projects</Link>
                        </li>
                        <li className={linksClass}>
                            <Link href={"/proficiency"}>Proficiency</Link>
                        </li>
                        <li className={linksClass}>
                            <Link href={"/message"}>Message</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='flex gap-4 items-center'>
                <ModeToggle/>
                <Link href={"/"}>Blogs</Link>
            </div>
        </div>
    )
}

export default Navbar;