"use client"
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const AdminSidebar = () => {
  const pathname = usePathname()
  return (
    <div className='w-full h-screen bg-base-300 overflow-hidden'>
      <div className='w-full p-4'>
        <h1 className='text-center font-semibold'>Task Management</h1>
        <h2 className='text-center font-medium text-sm'>Administration</h2>
      </div>
      <Link href={`/admin`}>
        <motion.button whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }} className={`${ pathname === ('/admin') ? 'bg-primary text-primary-foreground' : 'bg-base-200 text-muted-foreground'} w-full p-3 border-t border-b font-medium`}>
          Admin Dashbord
        </motion.button>
      </Link>
      <Link href={`/admin/staffs`}>
        <motion.button whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }} className={`${ pathname.includes('/admin/staffs') ? 'bg-primary text-primary-foreground' : 'bg-base-200 text-muted-foreground'} w-full p-3 border-t border-b font-medium`}>
          Manage Staffs
        </motion.button>
      </Link>
      <Link href={`/admin/departments`}>
        <motion.button whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }} className={`${ pathname.includes('/admin/departments') ? 'bg-primary text-primary-foreground' : 'bg-base-200 text-muted-foreground'} w-full p-3 border-t border-b font-medium`}>
          Manage Departments
        </motion.button>
      </Link>
    </div>
  )
}

export default AdminSidebar