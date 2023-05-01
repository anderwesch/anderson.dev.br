import { useState } from 'react'
import Link from './Link'
import headerNavLinks from '@/data/headerNavLinks'

const MobileNav = ({ navShow, onToggleNav }) => {
  return (
    <div className="sm:hidden">
      <div
        className={`fixed w-full h-screen top-[71px] right-0 bg-white dark:bg-black bg-opacity-30 backdrop-blur-lg dark:bg-opacity-30 z-40 ease-in-out duration-500 ${
          navShow ? 'translate-x-0' : 'translate-x-full'
        } firefox:bg-opacity-100·dark:firefox:bg-opacity-100·bg-opacity-30·dark:bg-opacity-30·backdrop-blur-lg`}
      >
        <button
          type="button"
          aria-label="toggle modal"
          className="fixed h-full w-full cursor-auto focus:outline-none"
          onClick={onToggleNav}
        ></button>
        <nav className="fixed mt-8 h-full">
          {headerNavLinks.map((link) => (
            <div key={link.title} className="px-12 py-4">
              <Link
                href={link.href}
                className="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100"
                onClick={onToggleNav}
              >
                {link.title}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default MobileNav
