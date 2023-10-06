import React from 'react'
import { Saira, Righteous } from 'next/font/google'
import { Facebook, Github,  Instagram, Linkedin, Mail, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

type Props = {}

const saira = Saira({
  subsets: ['latin'],
  display: "swap",
  weight: "400",
  style: 'normal'
})

const righteous = Righteous({
  subsets: ['latin'],
  display: "swap",
  weight: "400",
  style: 'normal',
  preload: true,
})

const MessagePage = (props: Props) => {

  return (
    <div className={`container flex flex-col flex-grow gap-10 h-full relative ${saira.className}`}>
      <div className='flex flex-col gap-2 justify-center items-center py-5'>
        <h1 className={`text-4xl ${righteous.className}`}>Connect with me!!</h1>
        <p className="text-xl text-center text-primary/90">
          I&apos;m always looking for new opportunities to collaborate with talented people. <br />
          Let&apos;s connect and learn more about each other&lsquo;s work
        </p>
      </div>
      <div className='grid grid-cols-2 flex-grow mb-40'>
        <div className='h-full flex flex-col gap-5 justify-center'>
          <div className='flex flex-col gap-4 justify-center'>
            <p className={`text-3xl `}>Getting In Touch Is Easy</p>
            <div>
              <p>Kawasoti-2, Nawalpur, Nepal</p>
              <p>27°39&apos;41.1&ldquo;N 84°08&#39;04.2&rdquo;E</p>
            </div>
            <p>kisnatwari@gmail.com</p>
            <div>
              <p className={`mb-2 text-xl`}>Also, checkout the following handles</p>
              <div className='flex gap-2'>
                <SocialCircle icon={<Facebook size={20} />} />
                <SocialCircle icon={<Mail size={20} />} />
                <SocialCircle icon={<X size={20} />} />
                <SocialCircle icon={<Instagram size={20} />} />
                <SocialCircle icon={<Github size={20} />} />
                <SocialCircle icon={<Linkedin size={20} />} />
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-2 h-full justify-center'>
          <form action="" className="w-96 mt-2 flex flex-col gap-2 rounded">
            <Input type='email' placeholder='Enter your email address' />
            <Input type='text' placeholder='Enter the subject' />
            <Textarea placeholder='Enter the message here.....' />
            <Button>Message Now</Button>
          </form>
        </div>
      </div>

    </div >
  )
}

type SocialProps = {
  icon: JSX.Element,
}

export function SocialCircle({ icon }: SocialProps) {
  return (
    <div className='flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 border border-primary rounded-full hover:bg-primary hover:text-secondary duration-200 cursor-pointer'>
      {icon}
    </div>
  )
}

export default MessagePage;
