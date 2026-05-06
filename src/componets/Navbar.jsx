import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='max-w-6xl mx-auto'>
        <ul className='flex gap-4 bg-amber-200 text-red-500 mt-5'>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/users">User</Link></li>
        </ul>
    </div>
  )
}

export default Navbar