import React from 'react'
import { Righteous } from 'next/font/google';
import Link from 'next/link';
import { NavAvatar } from './NavAvatar';
import { ModeToggle } from './ModeToggle';
import { Facebook, Github, Instagram, Linkedin, Mail, Menu, X } from 'lucide-react';

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { SocialCircle } from '@/app/message/page';


const righteous = Righteous({
    subsets: ['latin'],
    display: "swap",
    weight: "400",
    style: 'normal'
})

type Props = {}

const Navbar = (props: Props) => {
    const linksClass = "hover:text-[#66BD8F] dark:hover:text-cyan-600 after:w-full after:scale-0 after:h-0.5 relative after:absolute after:bg-[#66BD8F] dark:after:bg-cyan-600 after:-bottom-1 after:left-0 px-1 hover:after:scale-100 duration-300 after:duration-300";
    return (
        <>
            {/* Desktop devices navbar */}
            <div className={`container hidden sm:flex justify-between items-center py-3  ${righteous.className}`}>
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
                    <ModeToggle />
                    <Link href={"/"}>Blogs</Link>
                </div>
            </div>


            {/* Mobile devices navbar */}
            <div className={`container flex sm:hidden justify-between items-center py-3  ${righteous.className}`}>
                <NavAvatar />

                <Sheet>
                    <SheetTrigger asChild>
                        <Menu />
                    </SheetTrigger>
                    <SheetContent side={'bottom'}  className='divide-y'>
                        <SheetHeader>
                            <SheetDescription className={`flex justify-between items-center text-primary my-2 ${righteous.className}`}>
                                <div className='flex items-center gap-2'>
                                    <NavAvatar />
                                    <Link href={"/"} className='text-lg'>KISNATWARI</Link>
                                </div>
                                <div className='flex gap-4 items-center'>
                                    <ModeToggle />
                                    <Link href={"/"}>Blogs</Link>
                                </div>
                            </SheetDescription>
                        </SheetHeader>
                        <nav className={`py-4 ${righteous.className}`}>
                            <ul className='flex flex-col gap-2'>
                                <li className={linksClass}>
                                    <SheetClose asChild>
                                        <Link href={"/projects"}>Projects</Link>
                                    </SheetClose>
                                </li>
                                <li className={linksClass}>
                                    <SheetClose asChild>
                                        <Link href={"/proficiency"}>Proficiency</Link>
                                    </SheetClose>
                                </li>
                                <li className={linksClass}>
                                    <SheetClose asChild>
                                        <Link href={"/message"}>Message</Link>
                                    </SheetClose>
                                </li>
                            </ul>
                        </nav>
                        <SheetFooter>
                            <SheetClose asChild>
                                <div className='flex justify-between mt-5'>
                                    <SocialCircle icon={<Facebook size={20} />} />
                                    <SocialCircle icon={<Mail size={20} />} />
                                    <SocialCircle icon={<X size={20} />} />
                                    <SocialCircle icon={<Instagram size={20} />} />
                                    <SocialCircle icon={<Github size={20} />} />
                                    <SocialCircle icon={<Linkedin size={20} />} />
                                </div>
                            </SheetClose>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            </div>
        </>
    )
}

export default Navbar;