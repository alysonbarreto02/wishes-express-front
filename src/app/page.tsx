"use client"
import Image from "next/image"
import axios from "axios"
import { useDebounce } from "use-debounce"

import Logo from "assets/images/Logo.svg"
import {
  Tabs,
  DefaultInput,
  useOutlineButton,
  DefaultButton
} from "@/components"
import { tabsRegister } from "src/constants/tabsRegister"
import { RegisterRestaurantForm } from "src/types/RegisterRestaurantForm"
import { AddressType } from "@/types/AddressType"

import { useForm } from "react-hook-form"
import { useEffect, useState } from "react"

export default function Home() {
  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm<RegisterRestaurantForm>()
  const { OutlineButton } = useOutlineButton()
  const [value] = useDebounce(watch("cep"), 1000)
  const [address, setAddress] = useState<AddressType>()

  function onSubmit(data: RegisterRestaurantForm) {
    console.log(data)
  }

  async function getAddress() {
    const cep = value
    try {
      if (cep) {
        const { data }: { data: AddressType } = await axios.get(
          `https://viacep.com.br/ws/${cep}/json/`
        )
        setAddress(data)
      }
    } catch (error) {
      console.error("Error fetching address:", error)
    }
  }

  useEffect(() => {
    address &&
      (setValue("city", address?.localidade),
      setValue("neighborhood", address?.bairro),
      setValue("state", address?.uf),
      setValue("road", address?.logradouro))
  }, [address])

  useEffect(() => {
    getAddress()
  }, [value])

  return (
    <main className="w-full h-screen flex">
      <div className="w-5/12 h-full flex bg-red-system justify-center items-center ">
        <Image alt="logo" src={Logo} width={96} height={89} />
      </div>
      <div className="w-7/12 h-full px-5 overflow-y-scroll">
        <Tabs tabs={tabsRegister} />
        <form className=" px-20 py-1" onSubmit={handleSubmit(onSubmit)}>
          <p className="py-2">Como podemos chamar seu restaurante?</p>
          <DefaultInput
            control={control}
            name="enterpriseName"
            title="Nome do restaurante *"
            required="Você deve fornencer o nome da empresa"
            error={errors.enterpriseName?.message}
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
          <div className="pb-5">
            <DefaultInput
              control={control}
              name="cep"
              title="CEP"
              required="Forneça o seu CEP"
              error={errors.cep?.message}
            />
          </div>
          {address && (
            <div className="flex flex-col gap-5">
              <DefaultInput
                control={control}
                name="road"
                title="Rua"
                required="Forneça a rua do seu estabelecimento"
                error={errors.cep?.message}
              />
              <DefaultInput
                control={control}
                name="number"
                title="Número"
                required="Forneça o número do seu estabelecimento"
                error={errors.cep?.message}
              />
              <DefaultInput
                control={control}
                name="neighborhood"
                title="Bairro"
                required="Forneça o bairro do seu estabelecimento"
                error={errors.cep?.message}
              />
              <DefaultInput
                control={control}
                name="city"
                title="Cidade"
                required="Forneça a cidade do seu estabelecimento"
                error={errors.cep?.message}
              />
              <DefaultInput
                control={control}
                name="state"
                title="Estado"
                required="Forneça o estado do seu estabelecimento"
                error={errors.cep?.message}
              />
              <DefaultInput
                control={control}
                name="complement"
                title="Complemento"
                error={errors.cep?.message}
              />
            </div>
          )}
          <p className="mt-2">Fale um pouco sobre você</p>
          <div className="flex flex-col gap-5">
            <DefaultInput
              control={control}
              name="entireName"
              title="Nome completo *"
              required="Forneça seu nome completo"
              error={errors.entireName?.message}
            />
            <DefaultInput
              control={control}
              name="phone"
              title="Telefone *"
              required="Forneça o seu telefone"
              error={errors.phone?.message}
            />
            <DefaultInput
              control={control}
              name="email"
              title="E-mail *"
              required="Forneça o seu e-mail"
              error={errors.email?.message}
            />
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
