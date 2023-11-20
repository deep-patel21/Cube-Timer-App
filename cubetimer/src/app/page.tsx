import React from 'react'
import Hero from '@/components/Hero'
import Timer from '@/components/Timer'

export default function Home() {
  return (
  <main className='h-full w-full'>
    <div className='flex flex-col gap-20'>
        <Hero />
    </div>
  </main>
  )
}