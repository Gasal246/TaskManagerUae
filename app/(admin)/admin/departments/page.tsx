"use client"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import AddDepartmentDialogue from '@/components/shared/AddDepartmentDialogue'

const DepartmentsPage = () => {
  const router = useRouter();
  return (
    <div className='w-full p-4 h-screen overflow-y-scroll pb-20'>
      <div className="flex justify-between mb-5">
        <h1 className='font-medium'>Manage Departments</h1>
        <AddDepartmentDialogue trigger={<motion.h1 whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className='border-border border bg-primary rounded-sm p-3'>Add Department</motion.h1>} />
      </div>
      <div className="flex gap-2 flex-wrap w-full">
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.95 }} onClick={() => router.push('/admin/departments/123')} className='bg-base-300 w-full p-3 rounded-sm h-[100px] lg:w-3/12 cursor-pointer hover:shadow-md'>
          <h1 className='font-medium'>Department Name</h1>
          <h2 className='text-sm'>@: Department_Head_Name</h2>
          <div className="flex justify-between mt-2">
            <h3 className='text-xs font-medium'>Staffs: 5</h3>
            <h3 className='text-xs font-medium'>Regions: 5</h3>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default DepartmentsPage
