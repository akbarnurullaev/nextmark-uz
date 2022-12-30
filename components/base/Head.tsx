type HeadProps = {
    title: string
    subtitle?: string
}

export default function Head({ title, subtitle }: HeadProps) {
  return (
    <>
      <h1 className="xl:text-7xl lg:text-5xl text-3xl font-bold text-white uppercase">{title}</h1>
      {subtitle && <h1 className="xl:text-9xl lg:text-8xl text-5xl font-black text-outlined font-bold text-white uppercase">{subtitle}</h1>}
    </>
  );
}
