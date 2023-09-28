import React from 'react'
import { Saira, Rubik_Glitch, Fira_Code } from 'next/font/google'
import Image from 'next/image'
import ResumeDownloader from './ResumeDownloader'
import HeroImage from './HeroImage'

type Props = {}

const saira = Saira({
    subsets: ['latin'],
    display: "swap",
    weight: "400",
    style: 'normal'
})

const rubik_glich = Rubik_Glitch({
    subsets: ['latin'],
    display: "swap",
    weight: "400",
    style: 'normal'
})

const fira_code = Fira_Code({
    subsets: ['latin'],
    display: "swap",
    weight: "400",
    style: 'normal'
});

const HeroSection = (props: Props) => {

    return (
        <div className={`container relative ${saira.className}`}>
            <div className='grid grid-cols-2 h-full backdrop-blur-sm'>
                <div className='h-full flex flex-col gap-5 justify-center'>
                    <div className='flex flex-col gap-2 justify-center'>
                        <p className='text-2xl text-yellow-600 dark:text-yellow-300'>Hi, I&apos;m Krishna</p>
                        <p className='text-xl text-ring'>
                            An IT Student of Nepal
                            <Image src={'/nepal-flag.png'} width={15} height={15} alt='Nepal Flag' className='inline-block ml-1' />
                        </p>
                        <p className="text-3xl text-ring">I Build value Through Codes</p>
                        <p className={`text-sm ${rubik_glich.className} text-lime-700 dark:text-cyan-600`}>&quot; I use Arch BTW &quot;</p>
                        <div>
                            {<ResumeDownloader />}
                        </div>
                    </div>
                    <div className={`ml-auto ${fira_code.className}`}>
                        <p>while(noSuccess)&nbsp;{'{'}</p>
                        <p>&nbsp; tryAgain();</p>
                        <p>&nbsp; if(dead)</p>
                        <p>&nbsp; &nbsp; break;</p>
                        <p>&nbsp; {'}'}</p>
                    </div>
                </div>
                <div className='flex flex-col gap-2 h-full justify-center'>
                    <div className='ml-auto'>
                        {<HeroImage />}
                    </div>
                </div>
            </div>
            <div className='absolute top-0 left-0 w-full h-full -z-10 overflow-hidden'>
                <img src="https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-y563b8iq.png" alt="" className='w-20 absolute opacity-20 top-80 left-56' />
                <img src="https://static-00.iconduck.com/assets.00/react-icon-512x456-5xl7nmtw.png" alt="" className='w-24 absolute opacity-10 bottom-16 left-96' />
                <img src="https://static-00.iconduck.com/assets.00/laravel-icon-1990x2048-xawylrh0.png" alt="" className='w-20 absolute opacity-10 top-16 left-96' />
                <img src="https://icons.veryicon.com/png/o/business/vscode-program-item-icon/typescript-def.png" alt="" className='w-20 absolute opacity-10 top-16 left-96 mt-40 ms-52' />
                <span className="text-7xl top-80 left-72 absolute ms-96 mt-44 opacity-10">
                    {`</>`}
                </span>
            </div>
        </div >
    )
}

export default HeroSection;