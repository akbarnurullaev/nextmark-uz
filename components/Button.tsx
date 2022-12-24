type ButtonProps = {
    title: string
    className?: string
}

export default function Button({ title, className }: ButtonProps) {
  return (
    <button type="button" className={`text-white uppercase duration-150 hover:text-dark text-base font-extrabold bg-orange rounded-full px-10 py-4 mr-3 md:mr-0 ${className}`}>
      {title}
    </button>
  );
}
