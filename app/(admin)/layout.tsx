import AdminSidebar from '@/components/shared/AdminSidebar'
import AdminTopBar from '@/components/shared/AdminTopBar'
import React from 'react'

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='w-full flex overflow-hidden'>
            <div className='w-2/12 md:block hidden'>
                <AdminSidebar />
            </div>
            <div className='w-full md:w-10/12 h-screen overflow-hidden'>
                <AdminTopBar />
                {children}
            </div>
        </div>
    )
}

export default AdminLayout