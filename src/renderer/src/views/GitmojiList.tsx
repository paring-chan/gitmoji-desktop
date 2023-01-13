import React from 'react'
import { gitmojis } from 'gitmojis/src/gitmojis.json'
import { GitmojiItem } from '../components/GitmojiItem'

export const GitmojiList: React.FC = () => {
  const [term, setTerm] = React.useState('')

  const [emojis, setEmojis] = React.useState<(typeof gitmojis)[0][]>([])

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setEmojis(gitmojis.filter((x) => x.code.includes(term) || x.description.includes(term)))
    }, 300)

    return () => clearTimeout(timeout)
  }, [term])

  return (
    <div className="p-4 pt-0">
      <input
        onChange={(e): void => setTerm(e.target.value)}
        placeholder="Search..."
        className="rounded-md bg-white drop-shadow-md outline-none focus:outline-none focus:drop-shadow-lg mt-4 p-4 transition-all w-full"
      />
      {emojis.map((x, i) => (
        <GitmojiItem key={i} emoji={x} />
      ))}
    </div>
  )
}
