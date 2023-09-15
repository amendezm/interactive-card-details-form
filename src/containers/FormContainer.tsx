import { useState } from "react"

import { Form, DynamicCard, CardFormFields, ThankYou } from "@/components"

const INITIAL_DATA = { cardHolderName: "", cardNumber: "", cardExpirationDate: "", cardCvc: "" }

export const FormContainer = () => {
  const [isCompleted, setIsCompleted] = useState(false)

  return (
    <Form
      defaultValues={INITIAL_DATA}
      onSubmit={data => {
        console.log(data)
        setIsCompleted(true)
      }}
      className="max-w-[60rem] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 container flex gap-28 items-center justify-center"
    >
      <DynamicCard />
      {isCompleted ? <ThankYou /> : <CardFormFields />}
    </Form>
  )
}
