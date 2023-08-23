export function DefaultButton({
  title,
  onClick
}: {
  title: string
  onClick: () => void
}) {
  return (
    <button
      className="rounded-md bg-gray-system h-9 w-full"
      onClick={() => onClick}
    >
      <p className="text-dark-gray-system text-sm">{title}</p>
    </button>
  )
}
