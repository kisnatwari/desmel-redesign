"use client"
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import React from 'react'

type Props = {
    icon: React.ReactNode,
    url: string,
    label: string
}

const ToolTip = ({ icon, url, label }: Props) => {
    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                
            </HoverCardTrigger>
            <HoverCardContent>
                <p className='flex'>
                    {icon} {label}
                </p>
            </HoverCardContent>
        </HoverCard>
    )
}

export default ToolTip