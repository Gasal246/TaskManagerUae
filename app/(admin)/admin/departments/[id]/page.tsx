"use client"
import AddRegionDialog from '@/components/shared/AddRegionDialog'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Earth, MapPin } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, } from "@/components/ui/breadcrumb"
import AddDepartmentHeadDialog from '@/components/shared/AddDepartmentHeadDialog'

const DepartmentPage = ({ params }: { params: { id: string } }) => {
  const [head, setHead] = useState(true)
  const [regions, setRegions] = useState([
    {
      country: "United Arab Emirates",
      region: "Sharjah"
    },
    {
      country: "India",
      region: "Kerala"
    }
  ])
  const router = useRouter();
  return (
    <div className='p-4'>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/admin/departments">Departments</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>The Department {params?.id}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className='flex justify-between mb-4 mt-2 items-center'>
        <h1 className='font-bold text-2xl'>The Department {params?.id}</h1>
        <AddRegionDialog trigger={<motion.h1 whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className='border-border border bg-primary rounded-sm p-3'>Add Region</motion.h1>} />
      </div>
      <div className="flex mb-5">
        {/* IF HEAD ADDED SHOW THE HEAD { 'NAME', 'EMAIL' & 'ADD HEAD' } ELSE SHOW 'HEAD NOT ADDED' & 'ADD BUTTON' } */}
        {
          head ?
            <div>
              <h1 className='font-medium'>Department Head Name</h1>
              <h3 className='text-sm'>administrator@gmail.com</h3>
            </div> :
            <AddDepartmentHeadDialog trigger={
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className='bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-sm'>
                Head not added!!, click to add
              </motion.button>
            } />
        }
      </div>
      <div className="">
        <h1 className='font-medium text-sm mb-1'>Regions</h1>
        {
          regions?.length > 0 ?
            <div className='flex gap-2 flex-wrap'>
              {
                regions?.map((reg: any) => (
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => router.push(`/admin/departments/123/region/${reg.country}`)} key={reg?.country + reg?.region} className='bg-muted rounded-sm p-2 min-w-60 hover:shadow-md cursor-pointer' >
                    <div className='flex gap-1 items-center'>
                      <Earth size={18} />
                      <h1 className='font-medium text-sm'>{reg?.country}</h1>
                    </div>
                    <div className='flex gap-1 items-center'>
                      <MapPin size={18} />
                      <h1 className='font-medium text-sm'>{reg?.region}</h1>
                    </div>
                  </motion.div>
                ))
              }
            </div> :
            <h1 className='text-xs'>no regions added yet..!</h1>
        }
      </div>
    </div>
  )
}

export default DepartmentPage