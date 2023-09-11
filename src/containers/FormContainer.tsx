import { Form, DynamicCard } from "@/components"

const INITIAL_DATA = { cardHolderName: "string ", cardNumber: "", cardExpirationDate: "", cardCvc: "" }

export const FormContainer = () => {
  return (
    <Form
      defaultValues={INITIAL_DATA}
      onSubmit={data => console.log(data)}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 container flex justify-center"
    >
      <DynamicCard />
    </Form>
  )
}
