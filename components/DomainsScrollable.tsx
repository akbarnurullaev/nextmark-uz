import ParallaxText from "./ParallaxText";

export default function DomainsScrollable() {
  return (
    <section className="md:my-48 pt-16:pt-0 my-24 pt-16">
      <div className="domains-scroll-2 -mt-16">
        <ParallaxText
          className="bg-white"
          baseVelocity={1}
          words={[...firstRow, ...firstRow, ...firstRow]}
        />
      </div>

      <div className="domains-scroll-1">
        <ParallaxText
          className="bg-orange"
          baseVelocity={-1}
          words={[...firstRow, ...firstRow, ...firstRow]}
        />
      </div>
    </section>
  );
}

const firstRow = [
  "#строительство",
  "#FMCG",
  "#производство",
  "#банки",
  "#образование",
  "#медицина",
  "#строительство",
];
