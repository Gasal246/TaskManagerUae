"use client"
import React, { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { Input } from '../ui/input'
import { Button } from '../ui/button'


const AddDepartmentDialogue = ({ trigger }: {
    trigger: React.ReactNode
}) => {
    const [name, setName] = useState('')
    return (
        <Dialog>
            <DialogTrigger>{trigger}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create Department</DialogTitle>
                </DialogHeader>
                <div className="">
                    <form className="space-y-2">
                        <Input className='border-border font-medium' placeholder='Department Name' value={name} onChange={(e) => setName(e.target.value)} />
                        <div className="flex justify-end">
                            <Button type='submit' variant="ghost" className='border-border border'>Create</Button>
                        </div>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default AddDepartmentDialogue