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
      className={`w-full lg:max-w-[60rem] absolute left-0 lg:left-1/2 top-0 lg:top-1/2 
                  lg:-translate-x-1/2 lg:-translate-y-1/2 lg:container flex flex-col lg:flex-row
                  gap-16 lg:gap-28 items-center justify-center px-4 lg:px-0`}
    >
      <DynamicCard />
      {isCompleted ? <ThankYou /> : <CardFormFields />}
    </Form>
  )
}
