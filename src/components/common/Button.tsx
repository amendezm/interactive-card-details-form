import { classNames } from "@/utils"
import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react"

interface ButtonProps extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  secondary?: boolean
}

export const Button: FC<ButtonProps> = ({ className, children, secondary, ...props }) => {
  return (
    <button
      className={classNames(
        "px-7 py-3 bg-very-dark-violet text-white rounded-lg font-medium hover:bg-purplish-blue hover:opacity-90",
        className,
        {
          "p-0 bg-transparent text-cool-gray hover:bg-transparent": secondary
        }
      )}
      {...props}
    >
      {children}
    </button>
  )
}
