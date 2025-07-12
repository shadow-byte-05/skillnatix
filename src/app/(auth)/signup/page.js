import React from "react";

export default function Signup() {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#121417] dark group/design-root overflow-x-hidden"
      style={{
        "--checkbox-tick-svg": `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='rgb(18,20,23)' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e")`,
        fontFamily: 'Manrope, "Noto Sans", sans-serif',
      }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#2b3036] px-10 py-3">
          <div className="flex items-center gap-4 text-white">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">SkillNetix</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a className="text-white text-sm font-medium leading-normal" href="#">About</a>
              <a className="text-white text-sm font-medium leading-normal" href="#">Contact</a>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#2b3036] text-white text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Log In</span>
            </button>
          </div>
        </header>

        {/* Center-aligned form section */}
        <div className="flex flex-1 items-center justify-center px-4 py-5">
          <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] mx-auto py-5">

            <h2 className="text-white text-[28px] font-bold text-center pb-3 pt-5">
              Create Your Account
            </h2>

           {["Full Name", "Email", "Password", "Confirm Password"].map((label, index) => (
              <div key={index} className="flex w-full flex-wrap items-end gap-4 px-4 py-3">
                 <label className="flex flex-col w-full">
                  <p className="text-white text-base font-medium pb-2">{label}</p>
               <input
                 type={label.includes("Password") ? "password" : "text"}
                 placeholder={`Enter your ${label.toLowerCase()}`}
                 className="w-full rounded-xl h-12 p-5 bg-[#2b3036] text-white placeholder:text-[#a2abb4] focus:outline-none text-lg"
               />
                </label>
              </div>
             ))}

            <div className="px-4">
              <label className="flex gap-x-3 py-3 flex-row">
                <input
                  type="checkbox"
                  className="h-5 w-5 rounded border-[#40474f] border-2 bg-transparent text-[#c0d6ec] checked:bg-[#c0d6ec] checked:border-[#c0d6ec] focus:ring-0 focus:ring-offset-0 focus:border-[#40474f] focus:outline-none"
                />
                <p className="text-white text-base font-normal leading-normal">
                  I agree to the Terms of Service
                </p>
              </label>
            </div>

            <div className="flex px-4 py-3">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 flex-1 bg-[#c0d6ec] text-[#121417] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#aec8df]">
                <span className="truncate">Sign Up</span>
              </button>
            </div>

            <p className="text-[#a2abb4] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center underline">
              Already have an account? <span className="cursor-pointer ">Log In</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
