export function Input() {
  return (
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
  )
}
