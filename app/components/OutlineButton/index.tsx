export function OutlineButton({
  title,
  onClick,
  color = "gray",
  type = "button"
}: {
  title: string
  onClick?: () => void
  color?: "gray" | "yellow"
  type?: "button" | "submit" | "reset"
}) {
  return (
    <button
      type={type}
      className={`border rounded-md ${
        color === "gray" ? "border-gray-system" : "border-yellow-system"
      } h-9 w-full`}
      onClick={() => onClick}
    >
      <p
        className={`${
          color === "gray" ? "text-gray-system" : "text-yellow-system"
        } text-sm`}
      >
        {title}
      </p>
    </button>
  )
}
