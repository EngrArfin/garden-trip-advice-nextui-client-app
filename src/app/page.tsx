import { title, subtitle } from "@/src/components/primitives";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>This is the &nbsp;</span>
        <span className={title({ color: "yellow" })}>beautiful&nbsp;</span>
        <br />
        <span className={title({ color: "violet" })}>
          Garden Trip Advice Site&nbsp;
        </span>
        <div className={subtitle({ class: "mt-4" })}>
          Explore this site for Gardening Trip Advice .
        </div>
      </div>
    </section>
  );
}
