import { Button, Field } from "../common"

export const CardFormFields = () => {
  return (
    <div className="grow flex flex-col gap-6">
      <Field
        name="cardHolderName"
        label="Cardholder Name"
        placeholder="e.g. Jane Appleseed"
        maxLength={40}
        options={{ required: "Can't be blank" }}
      />
      <Field
        name="cardNumber"
        label="Card Number"
        placeholder="e.g. 1234 5678 9123 0000"
        mask="9999 9999 9999 9999"
        options={{ required: "Can't be blank", validate: { invalidNumber: validateCardNumber } }}
      />
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="uppercase text-xs text-very-dark-violet font-normal tracking-[0.1em]">
            Exp. Date (MM/YY)
          </label>
          <div className="grid grid-cols-2 gap-3">
            <Field name="month" placeholder="MM" mask="99" />
            <Field name="year" placeholder="YY" mask="99" />
          </div>
        </div>
        <Field
          name="cardCvc"
          label="CVC"
          placeholder="e.g. 123"
          mask="999"
          maxLength={3}
          options={{ required: "Can't be blank", validate: { invalidCVC: validateCVC } }}
        />
      </div>
      <Button type="submit" className="mt-4">
        Confirm
      </Button>
    </div>
  )
}

const validateCardNumber = (cardNumber: string) => {
  const res = /^(\d{4})[ ](\d{4})[ ](\d{4})[ ](\d{4})$/
  return res.test(String(cardNumber).toLowerCase()) || "Wrong format, numbers only"
}

const validateCVC = (cvc: string) => {
  const res = /^(\d{3})$/
  return res.test(String(cvc).toLowerCase()) || "Must be a 3 digits code"
}
