"use client"
import React, { FormEvent, useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import { Input } from '../ui/input'
import { Button } from '../ui/button'

const AddRegionDialog = ({ trigger }: {
    trigger: React.ReactNode
}) => {
    const [country, setCountry] = useState('');
    const [region, setRegion] = useState('');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        console.log(country, region)
        setCountry('');
        setRegion('');
    }
    return (
        <Dialog>
            <DialogTrigger>{trigger}</DialogTrigger>
            <DialogContent className='w-full'>
                <DialogHeader>
                    <DialogTitle>Add Region</DialogTitle>
                </DialogHeader>
                <div className="">
                    <form className="space-y-2" onSubmit={handleSubmit}>
                        <CountryDropdown
                            defaultOptionLabel="select a country"
                            value={country}
                            onChange={setCountry}
                            classes='bg-transparent p-2 border border-border rounded-md w-72' />
                        <RegionDropdown
                            blankOptionLabel="no country selected"
                            defaultOptionLabel="now select a region"
                            country={country}
                            value={region}
                            onChange={setRegion}
                            classes='bg-transparent p-2 border border-border rounded-md' />
                        <div className="flex justify-end">
                            <Button type='submit' variant="ghost" className='border-border border'>Create</Button>
                        </div>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default AddRegionDialog