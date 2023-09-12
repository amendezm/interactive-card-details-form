import { Button, Field } from "../common"

export const CardFormFields = () => {
  return (
    <div className="grow flex flex-col gap-6">
      <Field name="cardHolderName" label="Cardholder Name" placeholder="e.g. Jane Appleseed" />
      <Field name="cardNumber" label="Card Number" placeholder="e.g. 1234 5678 9123 0000" type="number" />
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="uppercase text-xs text-very-dark-violet font-normal tracking-[0.1em]">
            Exp. Date (MM/YY)
          </label>
          <div className="grid grid-cols-2 gap-3">
            <Field name="month" placeholder="MM" />
            <Field name="year" placeholder="YY" />
          </div>
        </div>
        <Field name="cardCvc" label="CVC" placeholder="e.g. 123" type="number" max={999} />
      </div>
      <Button type="submit" className="mt-4">
        Confirm
      </Button>
    </div>
  )
}
