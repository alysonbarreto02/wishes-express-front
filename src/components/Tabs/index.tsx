"use client"
import { useState } from "react"

export function Tabs({ tabs }: { tabs: string[] }) {
  const [selected, setSelected] = useState<number>(0)

  return (
    <div className="w-full justify-between flex h-12 gap-2">
      {tabs.map((tab, i) => (
        <div
          role="button"
          onClick={() => setSelected(i)}
          className={`justify-center items-center w-full flex ${
            selected === i
              ? "text-red-system border-b-red-system"
              : "text-gray-system border-b-gray-system"
          } border-b  `}
          key={tab}
        >
          {tab}
        </div>
      ))}
    </div>
  )
}
