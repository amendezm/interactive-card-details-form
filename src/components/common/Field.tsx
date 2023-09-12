import { FC, InputHTMLAttributes, useId } from "react"
import { RegisterOptions, useFormContext } from "react-hook-form"

import { classNames } from "@/utils"

import { Input } from "./Input"
import { ErrorMessage } from "./ErrorMessage"

type FieldProps = InputHTMLAttributes<HTMLInputElement> & { label?: string; options?: RegisterOptions }

export const Field: FC<FieldProps> = ({ options = {}, name, label, className, ...props }) => {
  const { register } = useFormContext()
  const inputId = useId()

  return (
    <div className="w-full flex flex-col space-y-2">
      <div className={classNames("flex justify-between", { "justify-end": !label })}>
        {label && (
          <label htmlFor={inputId} className="uppercase text-xs text-very-dark-violet font-normal tracking-[0.1em]">
            {label}
          </label>
        )}
        <ErrorMessage name={name} />
      </div>
      <Input
        id={inputId}
        {...(name ? register(name, options) : {})}
        className={classNames(className, "placeholder:text-light-grayish-violet")}
        {...props}
      />
    </div>
  )
}
