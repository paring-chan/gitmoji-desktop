import React from 'react'

export const SettingsPage: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold">Gitmoji Desktop</h2>
      <div className="text-lg">
        by{' '}
        <a
          href="https://github.com/pikokr"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600"
        >
          파링
        </a>
      </div>

      <h3 className="text-2xl mt-4 font-medium">Credits</h3>
      <div className="flex flex-col text-blue-600">
        <a href="https://gitmoji.dev" target="_blank" rel="noreferrer">
          Gitmoji
        </a>
        <a href="https://toss.im/tossface" target="_blank" rel="noreferrer">
          TossFace
        </a>
        <a href="https://tabler-icons-react.vercel.app/" target="_blank" rel="noreferrer">
          Tabler Icons
        </a>
      </div>
    </div>
  )
}
