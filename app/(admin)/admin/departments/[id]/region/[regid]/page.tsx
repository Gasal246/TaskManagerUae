"use client"
import React, { useState } from 'react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, } from "@/components/ui/breadcrumb"
import { Earth } from 'lucide-react'
import { motion } from 'framer-motion'
import AddRegionalHeadDialog from '@/components/shared/AddRegionalHeadDialog'

const RegionPage = ({ params }: { params: { id: string, regid: string } }) => {
    const [head, setHead] = useState(true)
    return (
        <div className='p-4'>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/admin/departments">Departments</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href={`/admin/departments/${params?.id}`}>Department {params?.id}</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Region {params?.regid}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <div className="mt-4 flex justify-between">
                <h1 className='font-bold text-2xl flex items-center'><Earth size={24} />{params?.regid}, Kerala</h1>
                {!head &&
                    <AddRegionalHeadDialog trigger={
                        <motion.h1 whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className='border-border border bg-primary rounded-sm p-3'>Add Regional Head</motion.h1>
                    } />
                }
            </div>
            {
                head &&
                <div className='mt-4'>
                    <h1 className='font-medium'>Regional Head Name</h1>
                    <h3 className='text-sm'>regionalHead@gmail.com</h3>
                </div>
            }
        </div>
    )
}

export default RegionPage