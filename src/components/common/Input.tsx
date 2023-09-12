import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react"
import { RegisterOptions, useFormContext } from "react-hook-form"
import InputMask, { ReactInputMask } from "react-input-mask"

import { classNames } from "@/utils"

type InputProps = InputHTMLAttributes<HTMLInputElement> & { options?: RegisterOptions; mask?: string }

export const Input = forwardRef<ReactInputMask, InputProps>(
  ({ options = {}, name = "", className, mask, ...props }, inputRef) => {
    const {
      register,
      formState: { errors }
    } = useFormContext()

    if (mask?.length) {
      return (
        <InputMask
          mask={mask ?? ""}
          maskChar={null}
          className={classNames(
            "cursor-pointer border border-light-grayish-violet px-3 py-2 rounded-lg tracking-wider placeholder:font-medium placeholder:text-light-grayish-violet focus-visible:outline-none focus-visible:border-dark-grayish-violet",
            className,
            { "border-red focus-visible:border-red": errors[name] }
          )}
          autoComplete="off"
          {...(name ? register(name, options) : {})}
          {...props}
          ref={inputRef}
        />
      )
    }

    return (
      <input
        className={classNames(
          "cursor-pointer border border-light-gray px-3 py-2 rounded-lg tracking-wider placeholder:font-medium placeholder:text-cool-gray focus-visible:outline-none focus-visible:border-purplish-blue",
          className,
          { "border-strawberry-red focus-visible:border-strawberry-red": errors[name] }
        )}
        autoComplete="off"
        {...(name ? register(name, options) : {})}
        {...props}
        ref={inputRef as ForwardedRef<HTMLInputElement>}
      />
    )
  }
)
