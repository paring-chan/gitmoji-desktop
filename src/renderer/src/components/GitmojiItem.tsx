import React from 'react'
import { gitmojis } from 'gitmojis/src/gitmojis.json'

export const GitmojiItem: React.FC<{ emoji: (typeof gitmojis)[0] }> = ({ emoji }) => {
  return (
    <div className="rounded-md bg-white shadow-md mt-4 p-4">
      <div className="flex gap-4">
        <div style={{ fontFamily: 'TossFace' }} className="text-4xl drop-shadow-lg">
          {emoji.emoji}
        </div>
        <div>
          <div className="text-xl">{emoji.code}</div>
          <div className="mt-2 text-sm">{emoji.description}</div>
        </div>
      </div>
    </div>
  )
}
