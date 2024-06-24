"use client"
import React from 'react'
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger, } from "@/components/ui/sheet"
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ModeToggle } from './ModeToggler'

const MobileAdminSheet = ({ trigger }: { trigger: React.ReactNode }) => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger>{trigger}</SheetTrigger>
            <SheetContent side={`left`}>
                <SheetHeader>
                    <SheetTitle className='text-start'>Task Management</SheetTitle>
                </SheetHeader>
                <div className="w-full relative">
                    <Link href="/admin">
                        <SheetClose className='w-full'>
                            <motion.button whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }} className={`${pathname === ('/admin') ? 'bg-primary text-primary-foreground' : 'bg-base-200 text-muted-foreground'} w-full font-medium p-3`}>
                                Admin Dashbord
                            </motion.button>
                        </SheetClose>
                    </Link>
                    <Link href="/admin/staffs">
                        <SheetClose className='w-full'>
                            <motion.button whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }} className={`${pathname.includes('/admin/staffs') ? 'bg-primary text-primary-foreground' : 'bg-base-200 text-muted-foreground'} w-full font-medium p-3`}>
                                Manage Staffs
                            </motion.button>
                        </SheetClose>
                    </Link>
                    <Link href="/admin/departments">
                        <SheetClose className='w-full'>
                            <motion.button whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }} className={`${pathname.includes('/admin/departments') ? 'bg-primary text-primary-foreground' : 'bg-base-200 text-muted-foreground'} w-full font-medium p-3`}>
                                Manage Departments
                            </motion.button>
                        </SheetClose>
                    </Link>
                </div>
                <div className="absolute bottom-5 right-5">
                    <ModeToggle />
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default MobileAdminSheet