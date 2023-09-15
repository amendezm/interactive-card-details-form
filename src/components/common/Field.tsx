import { FC, InputHTMLAttributes, useId } from "react"
import { RegisterOptions, useFormContext } from "react-hook-form"

import { classNames } from "@/utils"

import { Input } from "./Input"
import { ErrorMessage } from "./ErrorMessage"

type FieldProps = InputHTMLAttributes<HTMLInputElement> & { label?: string; options?: RegisterOptions; mask?: string }

export const Field: FC<FieldProps> = ({ options = {}, name, label, className, ...props }) => {
  const { register } = useFormContext()
  const inputId = useId()

  return (
    <div className="relative w-full flex flex-col space-y-2">
      <div className={classNames("flex justify-between", { "justify-end": !label })}>
        {label && (
          <label
            htmlFor={inputId}
            className="uppercase text-[0.65rem] xs:text-xs text-very-dark-violet font-normal tracking-[0.1em]"
          >
            {label}
          </label>
        )}
      </div>
      <Input
        id={inputId}
        className={classNames(className, "placeholder:text-light-grayish-violet")}
        {...(name ? register(name, options) : {})}
        {...props}
      />
      <ErrorMessage name={name} />
    </div>
  )
}
