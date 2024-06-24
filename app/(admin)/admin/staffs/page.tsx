"use client"

import { Button } from '@/components/ui/button'
import React from 'react'
import { StaffTable } from './staff-table'
import { columns } from './column'
import { useRouter } from 'next/navigation'
import { IUsers } from '@/models/userCollection'

type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}
 
export const payments: Partial<IUsers>[] = [
  {
    id: "728ed52f",
    Email: "someone12@gmail.com",
    Online: true,
    Name: "firstname lastname AB",
    IsBlocked: false,
    LastWorkedOn: { Title: "Hello Project Name" },
    PendingTasks: []
  },
  {
    id: "489e1d42",
    Email: "someone123@gmail.com",
    Online: true,
    Name: "firstname lastname AB",
    IsBlocked: false,
    LastWorkedOn: { Title: "Hello Project Name" },
    PendingTasks: [],
  },
  // ...
]

const StaffsPage = () => {
  const router = useRouter()
  return (
    <div className='p-4'>
      <div className="flex justify-between">
        <h1 className='font-medium'>Staff Management</h1>
        <Button variant={'ghost'} className='border' onClick={() => router.push('/admin/staffs/add-staff')}>Add Staff</Button>
      </div>
      <StaffTable columns={columns} data={payments} />
    </div>
  )
}

export default StaffsPage
