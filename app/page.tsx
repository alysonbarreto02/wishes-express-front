"use client"
import Image from "next/image"

import Logo from "assets/images/Logo.svg"
import { Tabs, DefaultInput, OutlineButton, DefaultButton } from "@/components"
import { tabsRegister } from "@/constants/tabsRegister"
import { RegisterRestaurantForm } from "@/types/RegisterRestaurantForm"

import { useForm } from "react-hook-form"

export default function Home() {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterRestaurantForm>()

  function onSubmit(data: RegisterRestaurantForm) {
    console.log(data)
  }

  return (
    <main className="w-full h-screen flex">
      <div className="w-5/12 h-full flex bg-red-system justify-center items-center">
        <Image alt="logo" src={Logo} width={96} height={89} />
      </div>
      <div className="w-7/12 h-full px-5">
        <Tabs tabs={tabsRegister} />
        <form className=" px-20 py-1" onSubmit={handleSubmit(onSubmit)}>
          <p className="py-2">Como podemos chamar seu restaurante?</p>
          <DefaultInput
            control={control}
            name="enterpriseName"
            title="Nome do restaurante *"
          />
          <p className="py-2">Quantos pedidos você tem por dia?</p>
          <div className="flex gap-5">
            <OutlineButton
              title="Mais de 10"
              onClick={() => console.log("oi")}
            />
            <OutlineButton
              title="Menos de 10"
              onClick={() => console.log("oi")}
            />
          </div>
          <p className="py-2">Qual o endereço do seu estabelecimento?</p>
          <DefaultInput control={control} name="cep" title="CEP" />
          <p className="mt-2">Fale um pouco sobre você</p>
          <div className="flex flex-col gap-6">
            <DefaultInput
              control={control}
              name="entireName"
              title="Nome completo *"
            />
            <DefaultInput control={control} name="phone" title="Telefone *" />
            <DefaultInput control={control} name="email" title="E-mail *" />
          </div>
          <div className="flex mt-3 gap-5">
            <DefaultButton type="submit" title="Confirmar" />
            <OutlineButton color="yellow" title="Cancelar" onClick={() => {}} />
          </div>
        </form>
      </div>
    </main>
  )
}
