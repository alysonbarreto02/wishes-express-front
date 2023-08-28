"use client"
import { useState } from "react"

export function useOutlineButton() {
  function OutlineButton({
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
    const [clicked, setClicked] = useState(false)
    return (
      <button
        type={type}
        className={`border  rounded-md ${
          clicked && "bg-red-system-200 border-yellow-system "
        } ${
          !clicked && color === "gray"
            ? "border-gray-system"
            : "border-yellow-system"
        } h-9 w-full`}
        onClick={() => {
          onClick
          setClicked(!clicked)
        }}
      >
        <p
          className={`${
            color === "gray" ? "text-gray-system" : "text-yellow-system"
          }
          ${clicked && "text-black-system"} text-sm`}
        >
          {title}
        </p>
      </button>
    )
  }

  return { OutlineButton }
}
