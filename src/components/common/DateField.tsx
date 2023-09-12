import { ChangeEvent, FC, useEffect, useState } from "react"
import { useFormContext } from "react-hook-form"

import { ErrorMessage, Input } from "../common"
import classNames from "classnames"

interface DateFieldProps {
  name: string
}

export const DateField: FC<DateFieldProps> = ({ name }) => {
  const {
    setValue,
    setError,
    clearErrors,
    formState: { errors }
  } = useFormContext()
  const [values, setValues] = useState({ month: "", year: "" })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }))
  }

  useEffect(() => {
    const { month, year } = values
    if (!values.month.length && !values.year.length) {
      setError(name, { message: "Can't be blank" })
      setValue(name, "")
      return
    }
    if (!validateMonth(values.month) || !validateYear(values.year)) {
      setError(name, { message: "Invalid date" })
      setValue(name, "")
      return
    }
    clearErrors(name)
    setValue(name, month.length || year.length ? `${month}/${year}` : "")
  }, [values, name, setError, setValue, clearErrors])

  return (
    <div className="flex flex-col">
      <label className="uppercase text-xs text-very-dark-violet font-normal tracking-[0.1em] mb-2">
        Exp. Date (MM/YY)
      </label>
      <div className="grid grid-cols-2 gap-3 mb-2">
        <Input
          name="month"
          placeholder="MM"
          mask="99"
          value={values.month}
          onChange={handleChange}
          className={classNames({ "border-red": errors[name] })}
        />
        <Input
          name="year"
          placeholder="YY"
          mask="99"
          value={values.year}
          onChange={handleChange}
          className={classNames({ "border-red": errors[name] })}
        />
      </div>
      <ErrorMessage name={name} />
    </div>
  )
}

const validateMonth = (month: string) => {
  const intMonth = parseInt(month)
  return intMonth >= 1 && intMonth <= 12
}

const validateYear = (year: string) => {
  const currentYear = new Date().getFullYear() % 100
  const intYear = parseInt(year)
  return intYear >= currentYear
}
