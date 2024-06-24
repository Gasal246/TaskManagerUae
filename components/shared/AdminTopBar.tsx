"use client"
import React from 'react'
import { Avatar } from 'antd'
import { ModeToggle } from './ModeToggler'
import MobileAdminSheet from './MobileAdminSheet'
import { AlignJustify } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover"
import Link from 'next/link'
import { Button } from '../ui/button'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const AdminTopBar = () => {
    const router = useRouter()
    const handleSignout = () => {
        signOut();
        router.push('/signin')
    }
    return (
        <div className='w-full h-14 overflow-hidden bg-base-200 flex justify-end items-center'>
            <div className="absolute left-3 md:hidden">
                <MobileAdminSheet
                    trigger={<AlignJustify />}
                />
            </div>
            <div className="hidden md:block">
                <ModeToggle />
            </div>
            <Popover>
                <PopoverTrigger>
                    <div className="px-3 flex gap-1 items-center">
                        <Avatar src={`/avatar.png`} className='w-9 h-9' />
                        <div>
                            <h1 className='font-medium text-sm'>Admin Name</h1>
                            <h1 className='font-medium text-xs'>admin@gmail.com</h1>
                        </div>
                    </div>
                </PopoverTrigger>
                <PopoverContent className='w-40'>
                    <div className="w-full">
                        <Button variant="destructive" onClick={() => signOut()} className='text-white w-full'>Sign out</Button>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    )
}

export default AdminTopBar