"use client"
import axios from "axios"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useDebounce } from "use-debounce"

import { DefaultInput, DefaultButton, useOutlineButton } from "@/components"
import { AddressType } from "@/types/AddressType"
import { RegisterRestaurantForm } from "@/types/RegisterRestaurantForm"

export function Form() {
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
  const [tab, setTab] = useState(0)

  async function onSubmit(data: RegisterRestaurantForm) {
    // await axios.post("http://localhost:3333/create-restaurant", {
    //   email: data.email,
    //   cpfOrCnpj: data.c,
    //   name: data.enterpriseName,
    //   ownerName: data.entireName,
    //   password: data.,
    //   phone: "23456789",
    //   wishes: 2,
    //   CEP: 123457889,
    //   city: "Natal",
    //   complement: "Compĺemento",
    //   neighborhood: " Bairro",
    //   number: 20,
    //   road: "Rua odilon braga ",
    //   UF: "RN"
    // })
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

  console.log({ tab })

  return (
    <form className=" px-20 py-1" onSubmit={handleSubmit(onSubmit)}>
      {tab === 0 ? (
        <>
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
            <DefaultButton onClick={() => setTab(1)} title="Confirmar" />
            <OutlineButton color="yellow" title="Cancelar" onClick={() => {}} />
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-3">
          <p className="mt-3">Vamos criar uma senha de acesso ao sistema</p>
          <DefaultInput
            control={control}
            placeholder="Digite uma senha"
            name="password"
            title="Criar senha"
            required="Forneça sua senha de acesso"
            error={errors.password?.message}
          />
          <DefaultInput
            control={control}
            placeholder="Digite a senha novamente"
            name="confirmPassword"
            title="Repetir senha"
            error={errors.confirmPassword?.message}
            required="Repita a senha inserida"
          />
          <DefaultButton title="Finalizar cadastro" type="submit" />
          <DefaultButton title="Cancelar" />
        </div>
      )}
    </form>
  )
}
