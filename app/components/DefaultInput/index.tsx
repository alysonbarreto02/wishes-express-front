"use client"
import { Control, Controller, FieldValues } from "react-hook-form"

export function DefaultInput({
  title,
  name,
  control
}: {
  title: string
  name: string
  control: Control<FieldValues, any>
  placeholder?: string
}) {
  return (
    <Controller
      name={name}
      control={control}
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
            className="border rounded-md h-9 border-gray-system w-full"
          />
        </div>
      )}
    />
  )
}
