import landingConfig from "@/config/landing"
import React from "react"
import AllRightReserved from "./AllRightReserved"

type Props = {}

function Footer({}: Props) {
  return (
    <footer className="border-t bg-[#121212] text-[#fff] pt-[50px] pb-[80px]">
      <div className="mx-auto container">
        <p className="text-2xl font-bold mb-2">Hugo Coding.</p>
        <div className="min-h-[180px] grid grid-cols-12">
          <div className="col-span-4 ">
            <p className="w-72 font-light leading-[150%]">
              Everyone can code, even a monkey. But good programe do human
              readable code. - Write code for humans, Not for machines.
            </p>
          </div>
          <div className="col-span-4 ">
            <div className="leading-[200%] mb-3">
              <p>M: +1 604-818-2149</p>
              <p>
                E:{" "}
                <a className="" href={`mailto:${landingConfig.email}`}>
                  {landingConfig.email}
                </a>
              </p>
            </div>

            <div className="flex gap-x-2">
              {landingConfig.socialMedias.map(({ Icon, url }, index) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  className=" hover:bg-slate-300/30 w-7 h-7 rounded-full flex justify-center items-center transition-all duration-300 p-1"
                >
                  <Icon className="fill-[#ddd] stroke-none hover:fill-[#fff]" />
                </a>
              ))}
            </div>
          </div>
          <div className="col-span-4">{/* Empty */}</div>
        </div>

        <AllRightReserved />
      </div>
    </footer>
  )
}

export default Footer

// <footer className="border-t bg-[#121212] text-[#fff] mx-auto container pt-[50px] pb-[80px] grid-cols-12">
//     <div className="flex justify-between py-8">
//       <div className="text-2xl">
//         <span className="mr-5 font-bold">Email</span>
//         <div className="overflow-x-hidden group">
//           <a className="" href={`mailto:${landingConfig.email}`}>
//             {landingConfig.email}
//           </a>
//           <div className="border-b border-solid border-black group-hover:translate-x-0 -translate-x-[100%] transition-transform"></div>
//         </div>
//       </div>

//       <div className="flex gap-x-3">
//         {landingConfig.socialMedias.map(({ Icon, url }, index) => (
//           <a
//             key={index}
//             href={url}
//             target="_blank"
//             className=" hover:bg-slate-300/30 w-10 h-10 rounded-full flex justify-center items-center transition-all duration-300 p-2"
//           >
//             <Icon className="fill-[#ddd] stroke-none w-6 h-6 hover:fill-[#fff]" />
//           </a>
//         ))}
//       </div>
//     </div>

//     <div className="text-xs text-zinc-100">
//       © All rights reserved. Made by{" "}
//       <a className="cursor-pointer underline hover:text-zinc-200">Hugo Lam</a>
//     </div>
//   </footer>
