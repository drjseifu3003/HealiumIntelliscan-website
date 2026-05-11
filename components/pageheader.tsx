export default function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <section className="relative w-full pt-10 pb-20 px-6 text-center text-white overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-b from-[#1e45d5cc] to-[#010304]"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-[56px] mb-4 font-bold bg-linear-180 from-white to-[#a2a2a2] text-transparent bg-clip-text">{title}</h1>
        <p className=" text-[#999] text-[18px]">
          {subtitle}
        </p>
      </div>
    </section>
  );
}