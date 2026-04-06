'use client'

import Link from "next/link"
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { ToastContainer } from 'react-toastify';

export default function Home() {
  const { data: session } = useSession()
  const router = useRouter()
  useEffect(() => {
    if (session) {
      router.push('/dashboard');
    }
  }, [session])
  return (
    <>
      <ToastContainer />
      <div className="flex flex-col items-center justify-center font-sans gap-4 h-[44vh] pt-14 pb-14 px-2">
        <Link href={'/'} className="font-bold md:text-5xl text-3xl flex gap-2 justify-center items-center">
          Buy Me a Tea
          <span><img src="./tea.gif" className="invert-[0.23]" alt="Tea" width={88} /></span>
        </Link>
        <p className="text-center">
          A crowd funding platform for creators .Get funded by your fans and followers.
        </p>
        <div>
          <Link href={'/login'}>
            <button type="button" className="text-white bg-linear-to-br from-purple-600 to-blue-500
        hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800
        font-medium rounded-lg text-sm px-5 cursor-pointer py-2.5 text-center me-2 mb-2">Start Here</button>
          </Link>
          <Link href={'/about'}>
          <button type="button" className="text-white bg-linear-to-br from-purple-600 to-blue-500
        hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800
        font-medium rounded-lg text-sm px-5 cursor-pointer py-2.5 text-center me-2 mb-2">Read More</button>
        </Link>
        </div>
      </div>
      <div className="bg-white w-full h-1 opacity-10">.</div>
      <div className="text-white container mx-auto pb-12">
        <h2 className="text-3xl font-bold text-center my-14">Your Fans can buy me a Coffee</h2>
        <div className="flex justify-around gap-4 px-2">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-black invert-[0.23]" src="./man.gif" alt="Man" width={88} />
            <p className="font-bold text-center">Fund Yourself</p>
            <p className="text-center">Your Fans are available for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-black invert-[0.23]" src="./coin.gif" alt="Coin" width={88} />
            <p className="font-bold text-center">Fund Yourself</p>
            <p className="text-center">Your Fans are available for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-black invert-[0.23]" src="./group.gif" alt="Group" width={88} />
            <p className="font-bold text-center">Fans want to Help</p>
            <p className="text-center">Your Fans are available for you to help you</p>
          </div>
        </div>
      </div>
      <div className="bg-white w-full h-1 opacity-10">.</div>
      <div className="text-white container mx-auto pb-32 pt-14 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center mb-14">Learn More About Us</h2>
        <div className="relative w-full h-0 pb-[56.25%] mx-auto flex items-center justify-center">
          <iframe className="absolute top-0 md:w-2/3 md:h-2/3 px-4 mx-auto" src="https://www.youtube.com/embed/QtaorVNAwbI?si=qPQlQB4C7sgNTSni" title="YouTube video player" frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
    </>
  );
}
