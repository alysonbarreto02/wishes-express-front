"use client"
import { Control, Controller } from "react-hook-form"

export function DefaultInput({
  title,
  name,
  control,
  required
}: {
  title: string
  name: string
  control: Control<any>
  placeholder?: string
  required?: string
}) {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required }}
      render={({ field: { onChange, value } }) => (
        <div className="w-full justify-center flex flex-col">
          <label htmlFor="nameEnterprise" className="text-xs font-extralight">
            {title}
          </label>
          <input
            placeholder={""}
            onChange={onChange}
            value={value}
            name="nameEnterprise"
            type="text"
            className="border rounded-md h-9 p-2 border-gray-system w-full"
          />
        </div>
      )}
    />
  )
}
