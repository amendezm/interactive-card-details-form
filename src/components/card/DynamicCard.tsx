import { useEffect, useState } from "react"
import { useFormContext } from "react-hook-form"

import { Card } from "@/types"

import cardFront from "@/assets/bg-card-front.png"
import cardBack from "@/assets/bg-card-back.png"
import cardLogo from "@/assets/card-logo.svg"

const Default = {
  holderName: "Jane Appleseed",
  number: "0000 0000 0000 0000",
  expirationDate: "00/00",
  cvc: "000"
}

export const DynamicCard = () => {
  const {
    watch,
    formState: { defaultValues }
  } = useFormContext<Card>()
  const [cardholderName, setCardHolderName] = useState<string | undefined>(defaultValues?.cardHolderName)
  const [cardNumber, setCardNumber] = useState<string | undefined>(defaultValues?.cardNumber)
  const [cardExpirationDate, setCardExpirationDate] = useState<string | undefined>(defaultValues?.cardExpirationDate)
  const [cardCvc, setCardCvc] = useState<string | undefined>(defaultValues?.cardCvc)

  useEffect(() => {
    const subscription = watch(({ cardHolderName, cardNumber, cardExpirationDate, cardCvc }) => {
      setCardHolderName(cardHolderName)
      setCardNumber(cardNumber)
      setCardExpirationDate(cardExpirationDate)
      setCardCvc(cardCvc)
    })

    return () => subscription.unsubscribe()
  }, [watch])
  return (
    <div className="shrink-0 flex flex-col gap-8">
      <figure className="relative w-fit z-20">
        <img src={cardFront} />
        <div className="absolute top-0 left-0 w-full h-full p-8 pb-6 z-30 flex flex-col justify-between">
          <img src={cardLogo} className="w-[84px]" />
          <div className="flex flex-col text-white">
            <p className="text-2xl mb-6 tracking-[0.1em]">{cardNumber || Default.number}</p>
            <div className="flex justify-between">
              <span className="uppercase tracking-wider text-sm font-light">
                {cardholderName || Default.holderName}
              </span>
              <span className="text-sm tracking-[0.1em]">{cardExpirationDate || Default.expirationDate}</span>
            </div>
          </div>
        </div>
      </figure>
      <figure className="relative w-fit z-10 ml-20">
        <img src={cardBack} />
        <div className="absolute text-sm tracking-[0.1em] text-white top-[45%] right-[13%]">
          {cardCvc || Default.cvc}
        </div>
      </figure>
    </div>
  )
}
