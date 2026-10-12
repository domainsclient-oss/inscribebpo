import { Gavel, ShieldCheck, Stethoscope, UsersRound } from "lucide-react";

const features = [
  {
    icon: Stethoscope,
    title: "Medical Records Expertise",
    text: "Our seasoned team of professionals specialises in the meticulous review and analysis of medical records. We understand the nuances of medical documentation, ensuring that you receive the most accurate and relevant information for your medico-legal needs.",
  },
  {
    icon: Gavel,
    title: "Litigation Support Excellence",
    text: "Inscribe offers top-notch support for your legal cases. We provide in-depth research and documentation support to give you a strategic advantage in litigation. Our commitment to precision and thoroughness is unmatched.",
  },
  {
    icon: ShieldCheck,
    title: "Insurance Industry Solutions",
    text: "We understand the insurance industry inside out. Whether it's policy reviews, claims investigations, or underwriting support, Inscribe provides comprehensive solutions to meet the unique needs of the insurance sector.",
  },
  {
    icon: UsersRound,
    title: "Mass Tort Case Specialists",
    text: "When it comes to mass tort cases, we excel at handling large-scale legal challenges with finesse. Our specialised expertise and efficient processes make Inscribe your trusted partner for managing complex mass tort litigation.",
  },
];

export function Features() {
  return (
    <section id="features" aria-label="Why clients rely on Inscribe" className="bg-white py-16 lg:py-20">
      <div className="container-site grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {features.map(({ icon: Icon, title, text }) => (
          <article key={title} className="text-center">
            <Icon className="mx-auto size-10 text-brand" strokeWidth={2.2} aria-hidden="true" />
            <h2 className="mt-4 text-[15px] font-semibold text-brand">{title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
