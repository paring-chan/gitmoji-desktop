import React from 'react'
import { gitmojis } from 'gitmojis/src/gitmojis.json'
import { GitmojiItem } from './GitmojiItem'

export const GitmojiList: React.FC = () => {
  return (
    <div className="p-4 pt-0">
      {gitmojis.map((x, i) => (
        <GitmojiItem key={i} emoji={x} />
      ))}
    </div>
  )
}
