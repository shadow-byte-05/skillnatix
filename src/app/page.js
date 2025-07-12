import React from 'react'

const page = () => {
  return (
   <div
      className="relative flex min-h-screen flex-col bg-[#111a22] dark group/design-root overflow-x-hidden"
      style={{ fontFamily: "Manrope, 'Noto Sans', sans-serif" }}
    >
      <div className="layout-container flex h-full grow flex-col">
        {/* Header */}
        <header className="flex items-center justify-between border-b border-b-[#233648] px-10 py-3 text-white">
          <div className="flex items-center gap-4">
            <div className="w-4 h-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h2 className="text-lg font-bold tracking-tight">SkillNetix</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a className="text-sm font-medium" href="#">Browse</a>
              <a className="text-sm font-medium" href="#">How it works</a>
              <a className="text-sm font-medium" href="#">Community</a>
            </div>
            <button className="cursor-pointer rounded-full h-10 px-4 bg-[#2a8fed] text-sm font-bold hover:bg-[#005dbb] transition-colors" href="#">
              <span className="truncate text-white">Sign up</span>
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="@container">
              <div className="@[480px]:p-4">
                <div
                  className="flex min-h-[480px] flex-col gap-6 items-center justify-center p-4 @[480px]:gap-8 @[480px]:rounded-xl bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBwg1bS23E2T77zQivSjsIHjZw9qw8qQ-XqdXlQCbpXSMHCRCLUhkceB1cgGlmZDI-p49QkUKTPnK5_K8AKf5CPiXFWMHURC24b9E1E80HSTY57Kit-G05M-vLhxXSm4XflqtteC2Iop3Bw7hwI0h54yrMEPNudHPFWvdtIqe_yfLS7s_vJ7iCqCh3dPdBdP99etUr380yoVM0ocwjfV9LVEUvvadYuOTORGgLVFmYUqnH_e8kNW19mFz35i_6GwqdYEFrv3iM1TaUS')",
                  }}
                >
                  <div className="flex flex-col gap-2 text-center text-white">
                    <h1 className="text-4xl font-black tracking-tight @[480px]:text-5xl">
                      Learn and Share Skills with a Community
                    </h1>
                    <h2 className="text-sm @[480px]:text-base font-normal">
                      Join a vibrant community where you can both learn new skills and share your expertise. Earn credits for teaching and use them to learn from others. Enjoy flexible scheduling that fits your lifestyle.
                    </h2>
                  </div>
                  <button className="cursor-pointer rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#2a8fed] text-white text-sm font-bold  hover:bg-[#005dbb] transition-colors">
                    <span className="truncate">Get Started</span>
                  </button>
                </div>
              </div>
            </div>

            {/* How it works section */}
            <div className="flex flex-col gap-10 px-4 py-10 @container">
              <div className="flex flex-col gap-4">
                <h1 className="text-white text-[32px] font-bold max-w-[720px]">
                  How it works
                </h1>
                <p className="text-white text-base font-normal max-w-[720px]">
                  Our platform makes it easy to connect with others, share your skills, and learn something new.
                </p>
              </div>

              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3">
                {/* Card 1 */}
                <div className="flex flex-col gap-3 p-4 rounded-lg border border-[#324d67] bg-[#192733] text-white">
                  <div>
                    {/* Users Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z" />
                   </svg>

                  </div>
                  <div>
                    <h2 className="text-base font-bold">Join the Community</h2>
                    <p className="text-[#92aec9] text-sm">Create a profile and browse skills offered by other members. Find someone with the skills you want to learn.</p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col gap-3 p-4 rounded-lg border border-[#324d67] bg-[#192733] text-white">
                  <div>
                    {/* Clock Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg"width="24px"height="24px"fill="currentColor"viewBox="0 0 256 256">
                      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z" />
                   </svg>

                  </div>
                  <div>
                    <h2 className="text-base font-bold">Schedule Your Sessions</h2>
                    <p className="text-[#92aec9] text-sm">Arrange sessions at times that work for both you and your skill partner. Our platform helps manage scheduling.</p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="flex flex-col gap-3 p-4 rounded-lg border border-[#324d67] bg-[#192733] text-white">
                  <div>
                    {/* Coins Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg"width="24px"height="24px"fill="currentColor"viewBox="0 0 256 256">
                      <path d="M184,89.57V84c0-25.08-37.83-44-88-44S8,58.92,8,84v40c0,20.89,26.25,37.49,64,42.46V172c0,25.08,37.83,44,88,44s88-18.92,88-44V132C248,111.3,222.58,94.68,184,89.57ZM232,132c0,13.22-30.79,28-72,28-3.73,0-7.43-.13-11.08-.37C170.49,151.77,184,139,184,124V105.74C213.87,110.19,232,122.27,232,132ZM72,150.25V126.46A183.74,183.74,0,0,0,96,128a183.74,183.74,0,0,0,24-1.54v23.79A163,163,0,0,1,96,152,163,163,0,0,1,72,150.25Zm96-40.32V124c0,8.39-12.41,17.4-32,22.87V123.5C148.91,120.37,159.84,115.71,168,109.93ZM96,56c41.21,0,72,14.78,72,28s-30.79,28-72,28S24,97.22,24,84,54.79,56,96,56ZM24,124V109.93c8.16,5.78,19.09,10.44,32,13.57v23.37C36.41,141.4,24,132.39,24,124Zm64,48v-4.17c2.63.1,5.29.17,8,.17,3.88,0,7.67-.13,11.39-.35A121.92,121.92,0,0,0,120,171.41v23.46C100.41,189.4,88,180.39,88,172Zm48,26.25V174.4a179.48,179.48,0,0,0,24,1.6,183.74,183.74,0,0,0,24-1.54v23.79a165.45,165.45,0,0,1-48,0Zm64-3.38V171.5c12.91-3.13,23.84-7.79,32-13.57V172C232,180.39,219.59,189.4,200,194.87Z" />
                    </svg>

                  </div>
                  <div>
                    <h2 className="text-base font-bold">Earn and Learn</h2>
                    <p className="text-[#92aec9] text-sm">Teach your skills to earn credits, which you can then use to learn from others. It's a win-win!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="flex justify-center">
          <div className="max-w-[960px] w-full flex flex-col px-5 py-10 text-center text-[#92aec9]">
            <div className="flex flex-wrap justify-center gap-6">
              <a className="min-w-40 text-base font-normal" href="#">About</a>
              <a className="min-w-40 text-base font-normal" href="#">Contact</a>
              <a className="min-w-40 text-base font-normal" href="#">Terms of Service</a>
              <a className="min-w-40 text-base font-normal" href="#">Privacy Policy</a>
            </div>
            <p className="mt-6 text-base">@2025 SkillNetix. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default page


