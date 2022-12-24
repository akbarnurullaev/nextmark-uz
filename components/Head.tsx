type HeadProps = {
    title: string
    subtitle?: string
}

export default function Head({ title, subtitle }: HeadProps) {
  return (
    <>
      <h1 className="text-7xl font-bold text-white uppercase">{title}</h1>
      {subtitle && <h1 className="text-9xl font-black text-outlined font-bold text-white uppercase">{subtitle}</h1>}
    </>
  );
}
