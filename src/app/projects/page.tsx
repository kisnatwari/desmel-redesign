import { Card, CardContent, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'
import { Righteous } from 'next/font/google'
import { Badge } from '@/components/ui/badge'
const righteous = Righteous({
  subsets: ['latin'],
  display: "swap",
  weight: "400",
  style: 'normal'
})

const projects = [
  {
    title: 'Inventory Management System',
    description: 'An inventory management system is a combination of technology (hardware and software) and processes and procedures that oversee the monitoring and maintenance of stocked products, whether those products are company assets, raw materials and supplies, or finished products ready to be sent to vendors or end consumers.',
    tags: [
      {
        name: 'PHP',
        color: 'primary'
      },
      {
        name: 'jQuery',
        color: 'secondary'
      }
    ]
  },
  {
    title: 'Location based multivendor ecommerce marketplace',
    description: 'A location-based multivendor ecommerce marketplace is an online platform that allows multiple vendors to sell their products or services on a single website, much like a shopping mall with various stores. The platform is designed to help businesses create and run an online marketplace for managing multiple vendors, products, and services',
    tags: [
      {
        name: 'jQuery',
        color: '#569'
      },
      {
        name: 'Laravel',
        color: 'secondary'
      }
    ]
  },
  {
    title: "Online Food ordering system",
    description: "A food ordering system is a web application that allows customers to order food from a variety of restaurants and take the order online. The application is designed to help customers order food from a variety of restaurants and take the order online.",
    tags: [
      {
        name: 'NextJS',
        color: '#569'
      },
      {
        name: 'TypeScript',
        color: 'primary'
      },
      {
        name: 'Prisma',
        color:'secondary'
      }
    ]
  },
  {
    title: "Image gallery application",
    description: "An image gallery application is a web application that allows customers to upload images and view them in a gallery. The application is designed to help customers upload images and view them in a gallery.",
    tags: [
      {
        name: 'Laravel',
        color: '#569'
      },
      {
        name: 'TailwindCSS',
        color: 'primary'
      },
      {
        name: 'Docker',
        color:'secondary'
      }
    ]
  }
]

const page = () => {
  return (
    <div className="container flex flex-wrap gap-2">
      {
        projects.map((project, i) => (
          <Card className='w-56 flex flex-col mx-auto sm:mx-0' key={i}>
            <CardContent className='p-0 rounded-lg overflow-hidden '>
              <Image src={"/project-thumbnails/ims.jpg"} alt='' width={224} height={224} />
            </CardContent>
            <CardContent className='px-2 pb-2'>
              <p className={`${righteous.className} line-clamp-2 mb-1`}>
                {project.title}
              </p>
              <p className='text-sm text-justify text-gray-500 line-clamp-4 mb-1'>
                {project.description}
              </p>
              <div className="flex gap-2 flex-wrap">
                {
                  project.tags.map((tag, i) => (
                    <small key={i} className={`text-xs border border-primary/80 px-4 py-1 rounded-full text-primary/80 ${righteous.className}`}>
                      {tag.name}
                    </small>
                  ))
                }
              </div>
            </CardContent>
          </Card>
        ))
      }
    </div>
  )
}

export default page