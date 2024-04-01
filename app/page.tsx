import React from 'react'
import Navbar from './Navbar'
import Link from 'next/link'

const page = () => {
  return (
    <>
      <Navbar />
      <div>
        Hello World
      </div>
      <Link href="/Account">Click me</Link>
    </>

  )
}

export default page
