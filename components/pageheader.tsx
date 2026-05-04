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
        <h1 className="text-4xl md:text-6xl mb-5 font-bold bg-linear-to-r from text-white to text-[#a2a2a2]">{title}</h1>
        <p className="mt-6 text-[#999] text-size-medium">
          {subtitle}
        </p>
      </div>
    </section>
  );
}