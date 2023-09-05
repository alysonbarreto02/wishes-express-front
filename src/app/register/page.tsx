import Image from "next/image"

import Logo from "assets/images/Logo.svg"
import { Tabs } from "@/components"
import { tabsRegister } from "src/constants/tabsRegister"
import { Form } from "@/app/register/Form"

export default function Home() {
  return (
    <main className="w-full h-screen flex">
      <div className="w-5/12 h-full flex bg-red-system justify-center items-center ">
        <Image alt="logo" src={Logo} width={96} height={89} />
      </div>
      <div className="w-7/12 h-full px-5 overflow-y-scroll">
        <Tabs tabs={tabsRegister} />
        <Form />
      </div>
    </main>
  )
}
