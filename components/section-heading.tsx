type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  text: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, text, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300/75">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold leading-tight text-white md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 leading-8 text-white/66">{text}</p>
    </div>
  );
}
