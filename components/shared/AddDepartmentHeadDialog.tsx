"use client"
import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { Button } from '../ui/button'

const AddDepartmentHeadDialog = ({ trigger }:{ trigger: React.ReactNode }) => {
    const handleSubmit = async () => {

    }
    return (
        <Dialog>
            <DialogTrigger>{trigger}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add Department Head</DialogTitle>
                </DialogHeader>
                <div>
                    <form className="space-y-2" onSubmit={handleSubmit}>
                        <div className="flex justify-end">
                            <Button type='submit' variant="ghost" className='border-border border'>Create</Button>
                        </div>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default AddDepartmentHeadDialog