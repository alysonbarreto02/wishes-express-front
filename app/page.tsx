import Image from "next/image"

import Logo from "assets/images/Logo.svg"
import { Tabs } from "@/components/Tabs"
import { tabsRegister } from "@/constants/tabsRegister"

export default function Home() {
  return (
    <main className="w-full h-screen flex">
      <div className="w-5/12 h-full flex bg-red-system justify-center items-center">
        <Image alt="logo" src={Logo} width={96} height={89} />
      </div>
      <div className="w-7/12 h-full p-6">
        <Tabs tabs={tabsRegister} />
        <div className="w-full justify-center flex flex-col mt-5">
          <label htmlFor="nameEnterprise" className="text-xs font-extralight">
            Nome do seu estabelecimento
          </label>
          <input
            name="nameEnterprise"
            type="text"
            className="border rounded-md border-gray-system w-9/12"
          />
        </div>
      </div>
    </main>
  )
}
