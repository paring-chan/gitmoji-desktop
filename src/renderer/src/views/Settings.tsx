import { Radio } from '@renderer/components/Radio'
import React from 'react'

export const SettingsPage: React.FC = () => {
  const [copyType, setCopyType] = React.useState('emoji')
  const initialized = React.useRef(false)

  React.useEffect(() => {
    if (initialized.current) return

    initialized.current = true

    setCopyType(localStorage.copyType ?? 'emoji')
  }, [])

  React.useEffect(() => {
    if (!initialized.current) return
    localStorage.copyType = copyType
  }, [copyType])

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

      <div className="mt-2">
        <div className="text-xl font-bold">Copy</div>
        <fieldset>
          <Radio
            checked={copyType === 'emoji'}
            name="copy_type"
            value="emoji"
            onChange={(e): void => setCopyType(e.target.value)}
            label="Emoji"
          />
          <Radio
            checked={copyType === 'code'}
            name="copy_type"
            value="code"
            onChange={(e): void => setCopyType(e.target.value)}
            label="Code"
          />
        </fieldset>
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
