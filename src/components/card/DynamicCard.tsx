import cardFront from "@/assets/bg-card-front.png"
import cardBack from "@/assets/bg-card-back.png"
import cardLogo from "@/assets/card-logo.svg"

export const DynamicCard = () => {
  return (
    <div className="shrink-0 flex flex-col gap-8">
      <figure className="relative w-fit z-20">
        <img src={cardFront} />
        <div className="absolute top-0 left-0 w-full h-full p-8 pb-6 z-30 flex flex-col justify-between">
          <img src={cardLogo} className="w-[84px]" />
          <div className="flex flex-col text-white">
            <p className="text-2xl mb-6 tracking-[0.1em]">0000 0000 0000 0000</p>
            <div className="flex justify-between">
              <span className="uppercase tracking-wider text-sm font-light">Jane Appleseed</span>
              <span className="text-sm tracking-[0.1em]">00/00</span>
            </div>
          </div>
        </div>
      </figure>
      <figure className="relative w-fit z-10 ml-20">
        <img src={cardBack} />
        <div className="absolute text-sm tracking-[0.1em] text-white top-[45%] right-[13%]">000</div>
      </figure>
    </div>
  )
}
