"use client";


import { useRouter } from "next/navigation";
import React, { MouseEventHandler, SyntheticEvent, useCallback } from "react";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";

type HeaderProps = {
  children: React.ReactNode,
  className?: string
}

const Header = ({ children, className }: HeaderProps) => {

  const router = useRouter();

  const handleLogout = () => {

  }

  const handleCaretBtnClick = useCallback((e: SyntheticEvent) => {
    const target = e.target as HTMLButtonElement;
    if(target.name === 'left-caret') router.back();
    if(target.name === 'right-caret') router.forward();
  },[]);

  return (
    <div
      className={twMerge(
        `
          h-fit
          bg-gradient-to-b
          from-emerald-800
          p-6
        `, className
      )}
    >
      <div
        className="
          w-full
          mb-4
          flex
          items-center
          justify-between
        "
      >
        <div
          className="
            hidden
            md:flex
            gap-x-2
            items-center
          "
        >
          <button
            className="
              rounded-full
              bg-black
              flex
              items-center
              justify-center
              hover:opacity-75
              transition
            "
            onClick={handleCaretBtnClick}
          >
            <RxCaretLeft className="text-white" size={35} />
          </button>
          <button
            className="
              rounded-full
              bg-black
              flex
              items-center
              justify-center
              hover:opacity-75
              transition
            "
            onClick={handleCaretBtnClick}
          >
            <RxCaretRight className="text-white" size={35} />
          </button>
        </div>
        <div
          className="
            flex
            md:hidden
            gap-x-2
            items-center
          "
        >
          <button
            className="
              rounded-full
              p-2
              bg-white
              flex
              items-center
              justify-center
              hover:opacity-75
              transition
            "
          >
            <HiHome className="text-black" size={20} />
          </button>

          <button
            className="
              rounded-full
              p-2
              bg-white
              flex
              items-center
              justify-center
              hover:opacity-75
              transition
            "
          >
            <BiSearch className="text-black" size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header;