'use client';
import Link from 'next/link';
import { useState } from 'react';
import clsx from 'clsx';
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed w-full backdrop-blur bg-white/60 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-2xl font-bold">TrackKol</Link>
        <button className="md:hidden" onClick={()=>setOpen(!open)}>
          <span className="sr-only">Toggle menu</span>
          <div className={clsx('w-6 h-0.5 bg-gray-800 mb-1', open && 'rotate-45 translate-y-1')} />
          <div className={clsx('w-6 h-0.5 bg-gray-800', open && '-rotate-45')} />
        </button>
        <ul className={clsx('md:flex space-x-6 items-center', open? 'block':'hidden') }>
          {['Features','Pricing','About','Login'].map(item=> (
            <li key={item}><a href={`#${item.toLowerCase()}`} className="hover:text-brand.DEFAULT">{item}</a></li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
