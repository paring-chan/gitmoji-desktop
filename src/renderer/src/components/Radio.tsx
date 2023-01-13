import React, { ChangeEventHandler } from 'react'

export const Radio: React.FC<{
  value: string
  name: string
  label: string
  checked: boolean
  onChange: ChangeEventHandler<HTMLInputElement>
}> = ({ name, onChange, value, label, checked }) => {
  return (
    <label className="flex gap-2">
      <input name={name} type="radio" checked={checked} onChange={onChange} value={value} />
      <div>{label}</div>
    </label>
  )
}
