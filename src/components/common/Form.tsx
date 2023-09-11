import { HTMLAttributes, PropsWithChildren } from "react"
import { FieldValues, FormProvider, UseFormProps, useForm } from "react-hook-form"

type FormProps<T extends FieldValues> = PropsWithChildren<Omit<HTMLAttributes<HTMLFormElement>, "onSubmit">> &
  UseFormProps<T> & {
    onSubmit(_: T): void
  }

export const Form = <T extends FieldValues>({ children, onSubmit, defaultValues, ...props }: FormProps<T>) => {
  const methods = useForm<T>({ defaultValues })

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} autoComplete="off" {...props}>
        {children}
      </form>
    </FormProvider>
  )
}
