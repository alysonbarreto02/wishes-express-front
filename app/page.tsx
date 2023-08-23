import Image from "next/image"

import Logo from "assets/images/Logo.svg"
import { Tabs, Input } from "@/components"
import { tabsRegister } from "@/constants/tabsRegister"

export default function Home() {
  return (
    <main className="w-full h-screen flex">
      <div className="w-5/12 h-full flex bg-red-system justify-center items-center">
        <Image alt="logo" src={Logo} width={96} height={89} />
      </div>
      <div className="w-7/12 h-full p-6">
        <Tabs tabs={tabsRegister} />
        <Input />
      </div>
    </main>
  )
}
