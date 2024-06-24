import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import AdminSidebar from '@/components/shared/AdminSidebar'
import axios from 'axios'
import { getUserById } from '@/query/server/userFunctions'

const HomeLayout = async ({ children }:{ children: React.ReactNode }) => {
    const session: any = await getServerSession(authOptions)
    if(!session){
        redirect('/signin');
    }
    const currentUser = await getUserById(session?.user?.id);
    if(currentUser?.IsAdmin || currentUser?.IsSuperAdmin){
      redirect('/admin')
    }
    console.log(session)
  return (
    <div className='w-full flex overflow-hidden'>
      {/* todo:  */}
      <div className='w-2/12'>
        Staff SideBar
      </div>
      <div className='w-10/12'>
        {children}
      </div>
    </div>
  )
}

export default HomeLayout