import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGavel,
  faShieldHalved,
  faStethoscope,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const expertiseItems = [
  {
    title: "Medical Records Expertise",
    description:
      "Our seasoned team of professionals specialises in the meticulous review and analysis of medical records. We understand the nuances of medical documentation, ensuring that you receive the most accurate and relevant information for your medico-legal needs.",
    icon: faStethoscope,
  },
  {
    title: "Litigation Support Excellence",
    description:
      "Inscribe offers top-notch support for your legal cases. We provide in-depth research and documentation support to give you a strategic advantage in litigation. Our commitment to precision and thoroughness is unmatched.",
    icon: faGavel,
  },
  {
    title: "Insurance Industry Solutions",
    description:
      "We understand the insurance industry inside out. Whether it's policy reviews, claims investigations, or underwriting support, Inscribe provides comprehensive solutions to meet the unique needs of the insurance sector.",
    icon: faShieldHalved,
  },
  {
    title: "Mass Tort Case Specialists",
    description:
      "When it comes to mass tort cases, we excel at handling large-scale legal challenges with finesse. Our specialised expertise and efficient processes make Inscribe your trusted partner for managing complex mass tort litigation.",
    icon: faUsers,
  },
];

export function Expertise() {
  return (
    <section
      aria-label="Our areas of expertise"
      className="bg-white py-12 sm:py-14 lg:py-16"
    >
      <div className="container-site grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:gap-x-14 lg:gap-y-14 xl:grid-cols-4">
        {expertiseItems.map((item) => (
          <article className="text-center" key={item.title}>
            <div className="mb-3 flex justify-center">
              <FontAwesomeIcon
                aria-hidden="true"
                className="size-11 shrink-0 text-brand"
                icon={item.icon}
              />
            </div>
            <h2 className="mb-2 text-[18px] leading-snug font-semibold text-brand sm:text-[19px]">
              {item.title}
            </h2>
            <p className="text-[16px] leading-[1.7] text-ink-2 sm:text-[17px]">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
