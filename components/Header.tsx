"use client";


import { useRouter } from "next/navigation";
import React, { SyntheticEvent, useCallback } from "react";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Button from "./Button";

type HeaderProps = {
  children: React.ReactNode,
  className?: string
}

const Header = ({ children, className }: HeaderProps) => {

  const router = useRouter();

  const handleLogout = () => {

  }

  const handleBtnClick = useCallback((e: SyntheticEvent) => {
    const { name } = e.target as HTMLButtonElement;
    switch(name) {
      case "left-caret": {
        router.back();
        return;
      }
      case "right-caret": {
        router.forward();
        return;
      }
      case "signup-button": {

        return;
      }
      case "login-button": {
        
        return;
      }
    }
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
            onClick={handleBtnClick}
            name="left-caret"
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
            onClick={handleBtnClick}
            name="right-caret"
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
        <div
          className="
            flex
            justify-between
            items-center
            gap-x-4
          "
        >
          <>
            <div>
              <Button
                className="
                  bg-transparent
                  text-neutral-300
                  font-medium
                "
                name="signup-button"
                onClick={handleBtnClick}
              >
                Signup
              </Button>
            </div>

            <div>
              <Button
                className="
                  bg-white
                  px-6
                  py-2
                "
                name="login-button"
                onClick={handleBtnClick}
              >
                Log in
              </Button>
            </div>          
          </>
        </div>
      </div>
      {children}
    </div>
  )
}

export default Header;