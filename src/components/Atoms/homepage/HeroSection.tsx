import React from 'react'
import { Saira, Rubik_Glitch, Fira_Code } from 'next/font/google'
import Image from 'next/image'
import ResumeDownloader from './ResumeDownloader'
import HeroImage from './HeroImage'
import { Laptop, Laptop2 } from 'lucide-react'

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
        <div className={`container ${saira.className}`}>
            <div className='grid grid-cols-2 h-full'>
                <div className='h-full flex flex-col gap-5 justify-center'>
                    <div className='flex flex-col gap-2 justify-center'>
                        <p className='text-2xl text-yellow-600 dark:text-yellow-300'>Hi, I&apos;m Krishna Tiwari</p>
                        <p className="text-xl text-ring">
                            A Full Stack Web Developer
                            <Laptop2 className='inline-block ml-1'/>
                        </p>
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
        </div >
    )
}

export default HeroSection;