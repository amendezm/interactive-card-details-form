import iconComplete from "@/assets/icon-complete.svg"

import { Button } from "../common"

export const ThankYou = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <img src={iconComplete} className="mb-8" />
      <h1 className="uppercase text-very-dark-violet text-2xl tracking-widest mb-4">Thank You!</h1>
      <p className="text-dark-grayish-violet text-base tracking-wider">We've added your card details</p>
      <Button
        className="w-full mt-12"
        onClick={() => {
          window.location.reload()
        }}
      >
        Continue
      </Button>
    </div>
  )
}
