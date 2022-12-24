type StatisticsTabProps = {
    number: number | string
    title: string
    className?: string
}
export default function StatisticsTab({ number, title, className }: StatisticsTabProps) {
  return (
    <div className={`w-2/6 py-14 pl-4 pr-24 flex border-2 border-lightGrey ${className}`}>
      <h1 className="text-orange font-bold text-9xl">{number}</h1>
      <p className="text-white self-center pl-4">{title}</p>
    </div>
  )
}
