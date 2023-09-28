import Image from 'next/image'
import React from 'react'
import { useTheme } from 'next-themes'

type Props = {}

const HeroImage = (props: Props) => {
    const { theme } = useTheme();
    return (
        <Image
            src={theme == 'dark' ? "/dark-person-img.jpeg" : "/light-person-img.jpeg"}
            alt='dark img' width={440} height={440} className='rounded-full' />
    )
}

export default HeroImage