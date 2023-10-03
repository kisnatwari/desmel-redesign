"use client"
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

type props = {
    name: string;
    image: string;
    proficiency: number;
    color?: string
}

const Progress = ({ name, image, proficiency, color = "" }: props) => {
    const [pct, setPct] = useState(0);
    useEffect(()=>setPct(proficiency), [proficiency]);
    return (
                <div className='text-center rounded-lg w-full drop-shadow-lg bg-[#E1FBE9] dark:bg-[#233547] p-4'>
                    <p className='mb-1 flex gap-1 justify-center items-center '>
                        <Image src={image} alt={name} width={20} height={20} /> {name}
                    </p>
                    <div className="w-24 mx-auto">
                        <CircularProgressbarWithChildren value={pct}
                            background backgroundPadding={3}
                            text={`${pct}%`}
                            styles={buildStyles({
                                backgroundColor: 'rgba(255, 255, 255,0.9)',
                                pathColor: color,
                                textColor: color,
                                textSize: '20px',
                            })} >
                        </CircularProgressbarWithChildren>
                    </div>
                </div>
    )
}

export default Progress