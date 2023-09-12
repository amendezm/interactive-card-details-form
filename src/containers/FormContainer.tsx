import { Form, DynamicCard, CardFormFields } from "@/components"

const INITIAL_DATA = { cardHolderName: "", cardNumber: "", cardExpirationDate: "", cardCvc: "" }

export const FormContainer = () => {
  return (
    <Form
      defaultValues={INITIAL_DATA}
      onSubmit={data => console.log(data)}
      className="max-w-[60rem] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 container flex gap-28 items-center justify-center"
    >
      <DynamicCard />
      <CardFormFields />
    </Form>
  )
}
