import { FC, InputHTMLAttributes } from "react"
import { RegisterOptions, useFormContext } from "react-hook-form"
import InputMask from "react-input-mask"

import { classNames } from "@/utils"

type InputProps = InputHTMLAttributes<HTMLInputElement> & { options?: RegisterOptions; mask?: string }

export const Input: FC<InputProps> = ({ options = {}, name = "", className, mask, ...props }) => {
  const {
    register,
    formState: { errors }
  } = useFormContext()

  return (
    <InputMask
      mask={mask ?? ""}
      maskChar={null}
      className={classNames(
        "cursor-pointer border border-light-grayish-violet px-3 py-2 rounded-lg tracking-tighter placeholder:font-medium placeholder:text-cool-gray focus-visible:outline-none focus-visible:border-dark-grayish-violet",
        className,
        { "border-red focus-visible:border-red": errors[name] }
      )}
      autoComplete="off"
      {...(name ? register(name, options) : {})}
      {...props}
    ></InputMask>
  )
}
