import { ButtonHTMLAttributes } from "react";

type ButtonProps = {
  title: string;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ title, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      type="button"
      className={`text-white uppercase duration-150 hover:text-dark font-extrabold bg-orange rounded-full xl:text-base lg:text-xs text-xs xl:px-10 lg:px-7 px-8 xl:py-5 lg:py-4 py-5 mr-3 md:mr-0 ${className}`}
    >
      {title}
    </button>
  );
}
