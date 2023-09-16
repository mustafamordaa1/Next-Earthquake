import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <Link href="#" className="flex-shrink-0 text-accent1-600">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={150}
            height={25.5}
            priority
          />
          </Link>
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center space-x-4">
            <li><Link href="#" className="text-main hover:text-accent1-600">Home</Link></li>
            <li><Link href="#" className="text-main hover:text-accent1-600">About</Link></li>
            <li><Link href="#" className="text-main hover:text-accent1-600">Services</Link></li>
            <li><Link href="#" className="text-main hover:text-accent1-600">Contact</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar