"use client"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

export function NavAvatar() {
    return (
        <Avatar className="h-7 w-7">
            <AvatarImage src="/favicon.jpeg" alt="@shadcn" className="object-cover" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    )
}
