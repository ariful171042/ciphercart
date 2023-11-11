'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const navcontents = [
  {
    href: '/',
    lebel: 'Home',
  },
  {
    href: '/products',
    lebel: 'Products',
  },

  {
    href: '/about',
    lebel: 'About',
  },
  {
    href: '/contact',
    lebel: 'Contact',
  },
];

const Header = () => {
  const pathName = usePathname();
  return (
    <header className='fixed left-0 right-0 top-0 z-[100] flex h-20 w-full items-center border-b border-gray bg-white '>
      <nav className='container flex items-center justify-between '>
        <Link href={'/'} className='text-3xl'>
          <span className='font-medium text-black'>Cipher</span>
          <span className='text-primary font-bold'>Cart</span>{' '}
        </Link>

        <ul className='flex gap-2.5 text-lg'>
          {navcontents.map((item) => (
            <li>
              <Link
                href={item.href}
                className={cn(
                  'font-semibold',
                  pathName === item.href ? 'text-primary ' : ' text-black'
                )}
              >
                {item.lebel}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
