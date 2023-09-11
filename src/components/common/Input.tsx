import { classNames } from "@/utils"
import { InputHTMLAttributes, forwardRef } from "react"
import { RegisterOptions, useFormContext } from "react-hook-form"

type InputProps = InputHTMLAttributes<HTMLInputElement> & { options?: RegisterOptions }

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ options = {}, name = "", className, ...props }, inputRef) => {
    const {
      register,
      formState: { errors }
    } = useFormContext()

    return (
      <input
        className={classNames(
          "cursor-pointer border border-light-gray px-3 py-2 rounded-lg tracking-tighter placeholder:font-medium placeholder:text-cool-gray focus-visible:outline-none focus-visible:border-purplish-blue",
          className,
          { "border-strawberry-red focus-visible:border-strawberry-red": errors[name] }
        )}
        autoComplete="off"
        {...(name ? register(name, options) : {})}
        {...props}
        ref={inputRef}
      />
    )
  }
)
