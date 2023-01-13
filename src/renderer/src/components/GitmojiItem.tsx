import React from 'react'
import { gitmojis } from 'gitmojis/src/gitmojis.json'
import confetti from 'canvas-confetti'

export const GitmojiItem: React.FC<{ emoji: (typeof gitmojis)[0] }> = ({ emoji }) => {
  const mouseX = React.useRef(0)
  const mouseY = React.useRef(0)

  React.useEffect(() => {
    const listener = (e: MouseEvent): void => {
      mouseX.current = e.clientX
      mouseY.current = e.clientY
    }

    window.addEventListener('mousemove', listener)

    return () => {
      window.removeEventListener('mousemove', listener)
    }
  }, [])

  const copy = React.useCallback(async () => {
    await navigator.clipboard.writeText(emoji.emoji)

    const x = mouseX.current / window.innerWidth
    const y = mouseY.current / window.innerHeight

    await confetti({
      shapes: ['star'],
      spread: 300,
      origin: { x, y }
    })
  }, [emoji, mouseX, mouseY])

  return (
    <div
      className="rounded-md bg-white shadow-md mt-4 p-4 hover:scale-95 active:scale-90 transition-all cursor-pointer"
      onClick={copy}
    >
      <div className="flex gap-4">
        <div className="text-4xl drop-shadow-lg">{emoji.emoji}</div>
        <div>
          <div className="text-xl">{emoji.code}</div>
          <div className="mt-2 text-sm">{emoji.description}</div>
        </div>
      </div>
    </div>
  )
}
