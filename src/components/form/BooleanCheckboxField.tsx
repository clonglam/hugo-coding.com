"use client"

import { FC, useRef } from "react"
import { Controller, useFormContext } from "react-hook-form"
import { Checkbox } from "../ui/checkbox"

export const BooleanCheckboxField: FC<{
  name: string
  defaultValue?: boolean
  label: string
}> = ({ name, defaultValue = false, label, ...rest }) => {
  const { control } = useFormContext()

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue || []}
      render={({ field: { value, onChange } }) => (
        <label key={name} className="flex items-center gap-x-2">
          <Checkbox
            // {...rest}
            defaultChecked={defaultValue}
            checked={value}
            onCheckedChange={(checked) => {
              onChange(checked) // Pass the new value array to the react-hook-form onChange method
            }}
          />
          {label}
        </label>
      )}
    />
  )
}

export default BooleanCheckboxField
