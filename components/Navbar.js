import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-md sticky top-0 z-10 bg-white'>
        <div className="logo mx-5">
            <Link href={'/'}><a><Image src="/logo.png" alt="logo" width={50} height={45}/></a></Link>
        </div>
        <div className="nav">
            <ul className="flex items-center space-x-4 font-bold md:text-md lg:mx-6">
                <Link href={'/'}><a><li className='hover:text-red-700 active:text-red-800'>Home</li></a></Link>
                <Link href={'/about'}><a><li className='hover:text-red-700'>About</li></a></Link>
                <Link href={'/gallery'}><a><li className='hover:text-red-700'>Gallery</li></a></Link>
                <Link href={'/contact'}><a><li className='hover:text-red-700'>Contact us</li></a></Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar