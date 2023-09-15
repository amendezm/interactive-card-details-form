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
    <div className="shrink-0 flex flex-col-reverse lg:flex-col gap-8 pt-8 lg:pt-0">
      <figure className="relative w-fit z-20 grid">
        <img
          src={cardFront}
          className="justify-self-start lg:justify-self-auto w-full xs:w-11/12 lg:w-auto mt-[-5.5rem] lg:mt-0"
        />
        <div className="absolute top-[-7.5rem] lg:top-0 -left-4 lg:left-0 w-full h-full p-8 pb-6 z-30 flex flex-col justify-between">
          <img src={cardLogo} className="w-[60px] mt-4 lg:mt-0 ml-4 lg:ml-0 lg:w-[84px]" />
          <div className="flex flex-col text-white mt-8 lg:mt-0">
            <p className="text-xs xs:text-lg ml-4 lg:ml-0 lg:text-2xl mb-3 lg:mb-6 tracking-[0.1em]">
              {cardNumber || Default.number}
            </p>
            <div className="flex justify-between ml-4 lg:ml-0 w-full xs:w-4/5 lg:w-full">
              <span className="uppercase tracking-wider text-[0.65rem] xs:text-xs lg:text-sm font-light max-w-[270px] break-words">
                {cardholderName || Default.holderName}
              </span>
              <span className="text-[0.65rem] xs:text-xs lg:text-sm tracking-[0.1em]">
                {cardExpirationDate || Default.expirationDate}
              </span>
            </div>
          </div>
        </div>
      </figure>
      <figure className="relative w-fit z-10 lg:ml-20 grid">
        <img src={cardBack} className="justify-self-end lg:justify-self-auto w-full xs:w-11/12 lg:w-auto" />
        <div className="absolute text-sm tracking-[0.1em] text-white top-[43%] lg:top-[45%] right-[17%] lg:right-[13%]">
          {cardCvc || Default.cvc}
        </div>
      </figure>
    </div>
  )
}
