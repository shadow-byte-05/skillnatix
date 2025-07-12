'use client'

import React from 'react'

const page = () => {
  return (
<div
      className="relative flex min-h-screen flex-col bg-[#121417] dark group/design-root overflow-x-hidden"
      style={{
        fontFamily: "Manrope, 'Noto Sans', sans-serif",
        "--checkbox-tick-svg": `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='rgb(18,20,23)' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e")`,
      }}
    >
      <div className="layout-container flex h-full grow flex-col">
        {/* Header */}
        <header className="flex items-center justify-between border-b border-[#2b3036] px-10 py-3 whitespace-nowrap">
          <div className="flex items-center gap-4 text-white">
            <div className="w-4 h-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.8261 30.5736C16.7203 29.8826 20.2244 29.4783 24 29.4783C27.7756 29.4783 31.2797 29.8826 34.1739 30.5736C36.9144 31.2278 39.9967 32.7669 41.3563 33.8352L24.8486 7.36089C24.4571 6.73303 23.5429 6.73303 23.1514 7.36089L6.64374 33.8352C8.00331 32.7669 11.0856 31.2278 13.8261 30.5736Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M39.998 35.764C39.9944 35.7463 ... (SVG trimmed for brevity)"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
              SkillNetix Platform
            </h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a className="text-white text-sm font-medium" href="#">
                Browse
              </a>
              <a className="text-white text-sm font-medium" href="#">
                My Skills
              </a>
              <a className="text-white text-sm font-medium" href="#">
                Requests
              </a>
            </div>
            <button className="cursor-pointerflex min-w-[84px] max-w-[480px] items-center justify-center rounded-full h-10 px-4 bg-[#2a8fed] text-sm font-bold hover:bg-[#005dbb] transition-colors">
              <span className="truncate ">Sign Up</span>
            </button>
          </div>
        </header>

        {/* Login Form */}
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 flex-1">
            <h2 className="text-white text-[28px] font-bold text-center px-4 pb-3 pt-5">Welcome Back</h2>

            {/* Username */}
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-white text-base font-medium pb-2">Username or Email</p>
                <input
                  type="text"
                  placeholder="Enter your username or email"
                  className="form-input w-full rounded-xl text-white border border-[#40474f] bg-[#1e2125] h-14 p-[15px] placeholder:text-[#a2abb4] focus:outline-none focus:border-[#40474f]"
                />
              </label>
            </div>

            {/* Password */}
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-white text-base font-medium pb-2">Password</p>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="form-input w-full rounded-xl text-white border border-[#40474f] bg-[#1e2125] h-14 p-[15px] placeholder:text-[#a2abb4] focus:outline-none focus:border-[#40474f]"
                />
              </label>
            </div>

            {/* Remember me */}
            <div className="flex items-center justify-between px-4 min-h-14">
              <p className="text-white text-base font-normal truncate">Remember me</p>
              <div className="shrink-0">
                <input
                  type="checkbox"
                  className="h-5 w-5 rounded border-2 border-[#40474f] bg-transparent text-[#c0d6ec]"
                />
              </div>
            </div>

            {/* Login button */}
            <div className="flex px-4 py-3">
              <button className="cursor-pointer flex flex-1 h-10 px-4 rounded-full  bg-[#2a8fed] text-sm font-bold hover:bg-[#005dbb] transition-colors items-center justify-center">
                  <span className="truncate">Login</span>
               </button>
             </div>


            {/* Links */}
            <p className="cursor-pointer text-[#a2abb4] text-sm text-center underline px-4 pt-1 pb-3 hover:text-[#2a8fed]">
                    Forgot password?
              </p>

            <p className="text-[#a2abb4] text-sm text-center underline px-4 pb-3">
              New to SkillNetix Platform?<span className="cursor-pointer text-[#a2abb4] text-sm text-center underline px-1 pt-1 pb-3 hover:text-[#2a8fed]">Sign up</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page
