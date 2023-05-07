import React from 'react'

type OptionsProps = {
  id: string
  label: string
}

const Select = ({
  label,
  name,
  options,
  onChange,
}: {
  label: string
  name: string
  options: OptionsProps[]
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}) => (
  <div className="flex mx-1 gap-2 items-center">
    <label
      className="text-white text-xs m-0 font-bold whitespace-nowrap"
      htmlFor={name}
    >
      {label}
    </label>
    <select
      name={name}
      onChange={onChange}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1"
    >
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
)

export default Select
