"use client"
import Image from 'next/image'
import React, { ReactNode, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'


const HeroImage = () => {
    const { theme } = useTheme();
    const [image, setImage] = useState<ReactNode>(<></>);

    useEffect(() => {
        if (theme === 'dark') {
            setImage(<Image
                src={"/dark-person-img.jpeg"}
                alt='dark img' width={440} height={440} className={`rounded-full`} />)
        } else {
            setImage(<Image
                src={"/light-person-img.jpeg"}
                alt='dark img' width={440} height={440} className={`rounded-full`} />)
        }
    }, [theme])

    return (
        <>
            {image}
        </>
    )
}

export default HeroImage