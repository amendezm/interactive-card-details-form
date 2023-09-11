import { FC, InputHTMLAttributes, useId } from "react"
import { RegisterOptions, useFormContext } from "react-hook-form"

import { classNames } from "@/utils"

import { Input } from "./Input"
import { ErrorMessage } from "./ErrorMessage"

type FieldProps = InputHTMLAttributes<HTMLInputElement> & { label?: string; options?: RegisterOptions }

export const Field: FC<FieldProps> = ({ options = {}, name, label, ...props }) => {
  const { register } = useFormContext()
  const inputId = useId()

  return (
    <div className="w-full flex flex-col space-y-2">
      <div className={classNames("flex justify-between", { "justify-end": !label })}>
        {label && (
          <label htmlFor={inputId} className="text-sm text-marine-blue font-medium tracking-tight">
            {label}
          </label>
        )}
        <ErrorMessage name={name} />
      </div>
      <Input id={inputId} {...(name ? register(name, options) : {})} {...props} />
    </div>
  )
}
