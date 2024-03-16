import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";

type StatisticsTabProps = {
  number: number | string | any;
  title: string;
  className?: string;
  isMobile?: boolean;
};
export default function StatisticsTab({
  number,
  title,
  className,
  isMobile,
}: StatisticsTabProps) {
  return (
    <div
      className={`${
        isMobile ? "w-full" : "w-2/6"
      } max-[768px]:mb-4 xl:py-14 lg:py-10 px-4 xl:pr-24 lg:pr-14 py-8 text-center ${className}`}
    >
      <h1 className="max-[768px]:w-3/6 text-orange font-bold xl:text-9xl lg:text-7xl text-8xl">
        <CountUp
          start={0}
          end={number.split("+")[0]}
          redraw={true}
          duration={5}
        >
          {({ countUpRef, start }) => (
            <ReactVisibilitySensor onChange={start} delayedCall>
              <span ref={countUpRef} />
            </ReactVisibilitySensor>
          )}
        </CountUp>
        {number.includes("+") ? "+" : null}
      </h1>
      <p className="max-[768px]:w-3/6 text-white xl:text-base lg:text-sm pt-4">
        {title}
      </p>
    </div>
  );
}
