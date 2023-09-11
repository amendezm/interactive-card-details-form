import { FC, PropsWithChildren } from "react"

import desktopBg from "@/assets/bg-main-desktop.png"
import mobileBg from "@/assets/bg-main-mobile.png"

export const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="w-full h-screen overflow-hidden">
      <div className="abosulute w-full h-full top-0 left-0 grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-3">
        <img src={desktopBg} className="hidden lg:block w-full h-full object-cover" />
        <img src={mobileBg} className="block lg:hidden w-full h-full object-cover" />
      </div>
      {children}
    </main>
  )
}
