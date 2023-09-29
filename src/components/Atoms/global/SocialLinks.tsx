
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@radix-ui/react-hover-card'
import { FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon, MailIcon, X } from 'lucide-react'
import React from 'react'
import ToolTip from './ToolTip'

const links = [
  {
    label: "Github",
    icon: <GithubIcon />,
    url: 'https://github.com/kisnatwari',
  },
  {
    label: "LinkedIn",
    icon: <LinkedinIcon />,
    url: 'https://www.linkedin.com/in/krishna-tiwari-3259a5214/',
  },
  {
    label: "Instagram",
    icon: <InstagramIcon />,
    url: 'https://www.instagram.com/kisna.twari/',
  },
  {
    label: "Email",
    icon: <MailIcon />,
    url: 'mailto:kisnatwari@gmail.com',
  },
  {
    label: "Facebook",
    icon: <FacebookIcon />,
    url: 'https://www.facebook.com/100008883133980',
  }
]

const SocialLinks = () => {
  return (
    <div className='absolute bottom-0 right-1'>
      <ul className="flex flex-col gap-2 opacity-75">
        {
          links.map((link, index) => {
            return (
              <li key={index}>
                <a href={link.url} target='_blank' rel='noopener noreferrer'>
                    {link.icon}
                </a>
              </li>
            )
          })
        }
        <li>
          <div className="h-56 w-0 border border-black dark:border-white mx-auto"></div>
        </li>
      </ul>
    </div>
  )
}

export default SocialLinks