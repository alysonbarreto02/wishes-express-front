"use client"
import { Control, Controller } from "react-hook-form"

export function DefaultInput({
  title,
  name,
  control,
  required,
  error
}: {
  title: string
  name: string
  control: Control<any>
  placeholder?: string
  required?: string
  error?: string
}) {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required }}
      render={({ field: { onChange, value } }) => (
        <div className="w-full justify-center flex flex-col">
          <label
            htmlFor="nameEnterprise"
            className={` ${
              error && "text-red-system font-medium"
            } text-xs font-extralight`}
          >
            {title}
          </label>
          <input
            placeholder={""}
            onChange={onChange}
            value={value}
            name="nameEnterprise"
            type="text"
            className={`border rounded-md h-9 p-2 ${
              error ? "border-red-system" : "border-gray-system "
            } w-full`}
          />
          {error && <p className="text-xs text-red-system mt-1">{error}</p>}
        </div>
      )}
    />
  )
}
