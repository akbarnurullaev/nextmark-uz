type StatisticsTabProps = {
    number: number | string
    title: string
    className?: string
    isMobile?: boolean
}
export default function StatisticsTab({ number, title, className, isMobile }: StatisticsTabProps) {
  return (
    <div className={`${isMobile ? 'w-full' : 'w-2/6'} max-[768px]:mb-4 xl:py-14 lg:py-10 px-4 xl:pr-24 lg:pr-14 py-8 flex border-2 border-lightGrey ${className}`}>
      <h1 className="max-[768px]:w-3/6 text-orange font-bold xl:text-9xl lg:text-7xl text-8xl">{number}</h1>
      <p className="max-[768px]:w-3/6 text-white xl:text-base lg:text-sm self-center pl-4">{title}</p>
    </div>
  )
}
