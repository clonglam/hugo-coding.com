"use client"

import React, { FC } from "react"
import { useForm, Controller, useFormContext } from "react-hook-form"
import { Checkbox } from "../ui/checkbox"
import { SelectCategory } from "@/db/backupSchema"

export const SelectCategoriesField: FC<{
  name: string
  defaultValue?: string[]
  choices?: SelectCategory[]
}> = ({ name, defaultValue, choices, ...rest }) => {
  const { control } = useFormContext()
  console.log("defaultValue", defaultValue)
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue || []}
      render={({ field: { value, onChange } }) => (
        <div {...rest}>
          {choices?.map((choice) => (
            <label key={choice.id}>
              <Checkbox
                checked={value.includes(choice.id)}
                onCheckedChange={(checked) => {
                  const newValue = checked
                    ? [...value, choice.id]
                    : value.filter((v: string) => v !== choice.id)
                  onChange(newValue) // Pass the new value array to the react-hook-form onChange method
                }}
              />
              {choice.label}
            </label>
          ))}
        </div>
      )}
    />
  )
}

export default SelectCategoriesField
