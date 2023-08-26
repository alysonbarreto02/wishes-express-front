export function DefaultButton({
  title,
  onClick,
  type = "button"
}: {
  title: string
  onClick?: () => void
  type?: "button" | "submit" | "reset"
}) {
  return (
    <button
      type={type}
      className="rounded-md bg-gray-system h-9 w-full"
      onClick={() => onClick}
    >
      <p className="text-dark-gray-system text-sm">{title}</p>
    </button>
  )
}
