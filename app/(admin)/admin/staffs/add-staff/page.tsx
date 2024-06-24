"use client"
import React, { useEffect, useState } from 'react'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import CreatableReactSelect from "react-select/creatable"
import makeAnimated from 'react-select/animated';
import { PlusCircleIcon, SquareX } from 'lucide-react'
import { formatDate } from '@/lib/utils'

import { motion } from 'framer-motion'

const formSchema = z.object({
  Name: z.string().min(3, "Sorry! as per our business guidelines this is not a real name.").max(25),
  Email: z.string().email("Invalid email address").min(2).max(50),
})

type SkillTag = {
  label: string;
  value: string;
}
type Document = {
  name: string,
  file: File | null,
  expireAt: Date | null,
  remindMe: Date | null
}

const animatedComponents = makeAnimated();

const AddStaffPage = () => {
  const [selectedSkillTags, setSelectedSkillTags] = useState<SkillTag[] | []>([])

  const [documents, setDocuments] = useState<Document[] | []>([])
  const [documentName, setDocumentName] = useState<string>('');
  const [documentFile, setDocumentFile] = useState<File | null>(null);
  const [expireAt, setExpireAt] = useState<Date | null>(null);
  const [remindMe, setRemindMe] = useState<Date | null>(null);

  const handleAddDoc = () => {
    if(!documentName || !documentFile || !expireAt || !remindMe) return null;
    const newDoc: Document = { name: documentName, file: documentFile, expireAt: expireAt, remindMe: remindMe }
    setDocuments([...documents, newDoc]);
    setDocumentName('');
    setDocumentFile(null);
    setExpireAt(null);
    setRemindMe(null);
  }

  useEffect(() => {
    console.log(documents)
  }, [documents])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Name: "",
      Email: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  const handleRemoveDoc = (index: number) => {
    const updatedDox = documents.splice(index, 1)
    setDocuments(updatedDox)
  }

  return (
    <div className='p-4 w-full h-screen overflow-y-scroll pb-20'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 lg:w-10/12">
          <FormField
            control={form.control}
            name="Name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="staff name" className='border-border' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="Email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="email address" className='border-border' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            <label className='text-sm font-medium'>Skills</label>
            <CreatableReactSelect
              onCreateOption={tag => {
                setSelectedSkillTags(prev => [...prev, { value: tag, label: tag }])
              }}
              components={animatedComponents}
              options={[...selectedSkillTags]}
              isMulti value={selectedSkillTags.map(tag => {
                return { label: tag.label, value: tag.value }
              })}
              onChange={tags => {
                setSelectedSkillTags(tags.map(tag => { return { label: tag.label, value: tag.value } }))
              }}
            />
          </div>
          <div className="flex gap-2 relative items-center flex-wrap">
            <div>
              <label className='text-sm'>Document Name</label>
              <Input type='text' className='border-border' placeholder='document title' value={documentName} onChange={(e) => setDocumentName(e.target.value)} />
            </div>
            <div>
              <label className='text-sm'>Document</label>
              <Input type='file' className='border-border' onChange={(e) => setDocumentFile(e.target.files ? e.target.files[0] : null)} />
            </div>
            <div>
              <label className='text-sm'>Document expiry</label>
              <Input type='date' className='border-border' value={expireAt ? expireAt.toISOString().substr(0, 10) : ''} onChange={(e) => setExpireAt(e.target.value ? new Date(e.target.value) : null)} />
            </div>
            <div>
              <label className='text-sm'>Remind me on</label>
              <Input type='date' className='border-border' value={remindMe ? remindMe.toISOString().substr(0, 10) : ''} onChange={(e) => setRemindMe(e.target.value ? new Date(e.target.value) : null)} />
            </div>
            <Button onClick={handleAddDoc} type='button' className='p-2 space-x-1'><PlusCircleIcon size={20} /> ADD</Button>
          </div>
          <div className="w-full">
            <label className='text-sm'>{documents.length} Document(s) Added</label>
          </div>
          {
            documents?.map((doc, index) => (
              <div className="flex gap-2 flex-wrap border p-2 rounded-md" key={doc.name}>
                <h1 className='text-sm font-medium p-1'>{doc?.name} :</h1>
                <h1 className='text-sm font-medium p-1 rounded-md bg-accent text-accent-foreground'>{doc?.file?.name} - {doc?.file?.type}</h1>
                <h1 className='text-sm font-medium p-1 rounded-md bg-accent text-accent-foreground'>EXP: {formatDate(doc?.expireAt + '')}</h1>
                <h1 className='text-sm font-medium p-1 rounded-md bg-accent text-accent-foreground'>RMD: {formatDate(doc?.remindMe + '')}</h1>
                <motion.button type='button' onClick={() => handleRemoveDoc(index+1)} className='bg-destructive font-medium p-1 rounded-sm'><SquareX /></motion.button>
              </div>
            ))
          }
          <div className="w-full flex justify-end">
            <Button type="submit" variant={'secondary'}>add staff</Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default AddStaffPage