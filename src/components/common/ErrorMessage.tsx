import { FC } from "react"
import { useFormContext } from "react-hook-form"

interface ErrorProps {
  name?: string
}

export const ErrorMessage: FC<ErrorProps> = ({ name = "" }) => {
  const {
    formState: { errors }
  } = useFormContext()

  if (!errors[name]) {
    return null
  }

  return (
    <span className="text-sm tracking-tight font-semibold text-strawberry-red">{`${
      errors?.[name]?.message || "This field is required"
    }`}</span>
  )
}
