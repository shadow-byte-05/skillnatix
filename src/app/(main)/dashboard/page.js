import React from 'react'

const page = () => {
  return (
     <div
      className="relative flex size-full min-h-screen flex-col bg-[#121417] dark group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#2b3036] px-10 py-3">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4 text-white">
              <div className="size-4">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">SkillSwap</h2>
            </div>
            <div className="flex items-center gap-9">
              {["Home", "My Skills", "Requests", "Messages"].map((item) => (
                <a key={item} className="text-white text-sm font-medium leading-normal" href="#">{item}</a>
              ))}
            </div>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <label className="flex flex-col min-w-40 !h-10 max-w-64">
              <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                <div className="text-[#a2abb4] flex border-none bg-[#2b3036] items-center justify-center pl-4 rounded-l-xl border-r-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
                  </svg>
                </div>
                <input
                  placeholder="Search"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#2b3036] focus:border-none h-full placeholder:text-[#a2abb4] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                />
              </div>
            </label>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#2a8fed] text-sm font-bold hover:bg-[#005dbb] transition-colors leading-normal tracking-[0.015em]">
              <span className="truncate">Login</span>
            </button>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA9fRcOsF27s3ZUH1SBy96tYc11MfUnquwRul67OBr9JM19N-n0FsL-uDr_Bw5CgbW-1d6td6sWC4iqBSiXo3r6fQBMrFbFwXO3XSPZq0O2vs_QY93cMrY4uZegqhtw6reVZnFQn4SBqTBeyZEg7aNVWu8aTQe1kkpF7V0UI1cBsPBtcSH54RpSUQhHKCktYTfNGm0yQCaZeEQOty6xZSqe8uJCGVSbDhuzE1rWoUsMaZSv9ZXvyxRqWn81_1TBrfzp-mFMoLtp5NZP")',
              }}
            ></div>
          </div>
        </header>

        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <h1 className="text-white tracking-light text-[32px] font-bold leading-tight p-4">
              Find Skill Partners
            </h1>

            <div className="px-4 py-3">
              <input
                type="text"
                placeholder="Search for skills or users"
                className="form-input flex w-full resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#2b3036] h-12 placeholder:text-[#a2abb4] px-4 text-base font-normal leading-normal"
              />
            </div>

            <div className="flex gap-3 p-3 flex-wrap pr-4">
              {["Skills Offered", "Skills Wanted", "Skill Level", "Availability"].map((filter, idx) => (
                <button
                  key={idx}
                  className="flex h-8 items-center justify-center gap-x-2 rounded-full bg-[#2b3036] pl-4 pr-2"
                >
                  <p className="text-white text-sm font-medium">{filter}</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
                  </svg>
                </button>
              ))}
            </div>

            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Skill Partners
            </h2>

            {/* Partner Cards */}
            {[
              {
                name: "Emma Bennett",
                skills: "Photography (Advanced)",
                wants: "Spanish (Intermediate)",
                credits: "Request Swap (5 Credits)",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuApM2cYWBIm2QwDgV5X5TIVpMnyedN0Fl41J3rKR9JWM0-PuxYVENABydT0cwirFydT3qWyRkxsAhe_r48HjFMDRuEtSVQXDxynwlL-IUzLprm7UoKIS1Kke_gG1np9dJ_1ti4PQuS1o1zbsS779ggv6b7ynch6etIC_SqOQKJkpzTH2FJOQZqg2UCBuhrJDBq58v5Mp7tAeJFEaixr5z48Mzq5KWVP1auMen6ldv1avpAqoO8cL2tqCORggRuF4_9stCHDi-EAd13m"
              },
              {
                name: "Lucas Carter",
                skills: "Web Development (Advanced)",
                wants: "Graphic Design (Beginner)",
                credits: "Request Swap (3 Credits)",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrGPyDq7152t4SC3RNWU_W7mTe1V0woxSv7o2tBPt1ctf1TFRcO4XEF5qixTwCIcPLo4IYsoO5etV3m5L7EoyX9m0Ok0EeXEON3rnYcTI8qd-cMCztAdNiGZiG8ExeVcCy9anpMdPFN-Pn8XwcbiLu83ZwuTvAsErHvmEdQh9tUWI5Ccvw4NayTp4oHNQxgMZ3Cr8RXhyoFlK6Xn_olIgN2yMpAMZRKe0FcH04VVrm4LfaQlryCUjqUENehA55i43b7iLBA2iz9ixz"
              }
            ].map((partner, index) => (
              <div key={index} className="p-4">
                <div className="flex items-stretch justify-between gap-4 rounded-xl">
                  <div className="flex flex-[2_2_0px] flex-col gap-4">
                    <div className="flex flex-col gap-1">
                      <p className="text-white text-base font-bold leading-tight">{partner.name}</p>
                      <p className="text-[#a2abb4] text-sm font-normal leading-normal">
                        Skills Offered: {partner.skills}, Skills Wanted: {partner.wants}
                      </p>
                    </div>
                    <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 flex-row-reverse bg-[#2b3036] text-white text-sm font-medium w-fit">
                      <span className="truncate">{partner.credits}</span>
                    </button>
                  </div>
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                    style={{ backgroundImage: `url("${partner.img}")` }}
                  ></div>
                </div>
              </div>
            ))}

            {/* Pagination */}
            <div className="flex items-center justify-center p-4 gap-2">
              <a href="#" className="flex size-10 items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z" />
                </svg>
              </a>
              {[1, 2, 3, "...", 10].map((page, idx) => (
                <a key={idx} href="#" className={`text-sm flex size-10 items-center justify-center rounded-full ${page === 1 ? "bg-[#2b3036] font-bold" : ""} text-white`}>
                  {page}
                </a>
              ))}
              <a href="#" className="flex size-10 items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z" />
                </svg>
              </a>
            </div>

            <p className="text-[#a2abb4] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center">
              New to the platform? Sign up or Log in to start swapping skills!
            </p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default page
