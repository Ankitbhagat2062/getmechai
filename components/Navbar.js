'use client'
import Link from 'next/link';
import React from 'react';
import { useSession, signOut } from "next-auth/react"

import {  Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

const Navbar = () => {
    const { data: session } = useSession()
    return (
        <nav className='flex bg-gray-900 text-white justify-between h-16 items-center px-4 sticky top-0 z-50'>
            <Link href={'/'} className='font-bold flex items-center justify-center cursor-pointer z-10'>
                <img src="tea.gif" className='invert-[0.23]' alt="tea" width={44} />
                <span className='text-xl '>Get Me a Tea</span>
            </Link>
            {(!session) ? (
                <ul className={`flex gap-4 flex-col md:flex-row items-center justify-center
            absolute md:relative top-0 right-0 md:w-auto bg-black/0 md:bg-transparent md:p-0`}>
                    <li>
                        <Link href='/login' className='block py-2 px-4 hover:text-gray-300 transition-colors'>
                            <button type="button" className="text-white bg-linear-to-br from-purple-600 to-blue-500
                        hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800
                        font-medium rounded-lg text-sm px-5 cursor-pointer py-2.5 text-center me-2 mb-2">Login
                            </button>
                        </Link>
                    </li>
                </ul>
            ) : (
                <ul className={`flex gap-4 flex-col md:flex-row md:items-center justify-center
            absolute md:relative top-0 right-0 md:w-auto bg-black/0 md:bg-[#00000000] p-4 md:p-0`}>
                    <li>
                        {/* Profile dropdown */}
                        <Menu as="div" className="relative ml-3">
                            <MenuButton className="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                                <span className="absolute -inset-1.5" />
                                <span className="sr-only">Open user menu</span>
                                <img
                                    alt=""
                                    src={session?.user?.image}
                                    className="size-8 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10"
                                />
                            </MenuButton>

                            <MenuItems
                                transition
                                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-800 py-1 outline -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
                                <MenuItem>
                                    <Link href={`/dashboard`}
                                        className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:outline-hidden">
                                        DashBoard
                                    </Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link href={`/${session?.user?.name}`}
                                        className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:outline-hidden">
                                        Your Profile
                                    </Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link href="/earnings"
                                        className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:outline-hidden">
                                        Earnings
                                    </Link>
                                </MenuItem>
                                <MenuItem>
                                    <button onClick={() => signOut({ callbackUrl: '/' })}
                                        className="flex items-center justify-baseline cursor-pointer px-4 py-2 w-full text-sm text-gray-300 data-focus:bg-white/5 data-focus:outline-hidden">
                                        Sign out
                                    </button>
                                </MenuItem>
                            </MenuItems>
                        </Menu>
                    </li>
                </ul>
            )
            }
        </nav>
    )
}

export default Navbar
