import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye, faEye, faHeart } from "@fortawesome/free-solid-svg-icons";

const pillars = [
  {
    title: "Core Values",
    icon: faHeart,
    body: "A dedication to offering the greatest level of customer service while exceeding the needs and expectations of our clients via the use of creative, imaginative, and respectful problem-solving techniques. We also treat every member of our team with respect, no matter what position they hold.",
  },
  {
    title: "Vision",
    icon: faEye,
    body: "Our vision is to revolutionize the healthcare industry by providing seamless, secure, and efficient access to medical records. We believe that by leveraging cutting-edge technology, we can improve patient outcomes, reduce costs, and streamline the healthcare process.",
  },
  {
    title: "Mission",
    icon: faBullseye,
    body: "Our goal is to become the leading provider of medical record management solutions, trusted by healthcare providers and patients alike. We envision a future where the exchange of medical information is quick, easy, and stress-free, enabling healthcare professionals to focus on what matters most - providing the best possible care for their patients.",
  },
];

export function Values() {
  return (
    <section
      aria-label="Our core values, vision and mission"
      className="bg-paper py-14 sm:py-16 lg:py-20"
    >
      <div className="container-site grid grid-cols-1 gap-10 md:grid-cols-3 lg:gap-12">
        {pillars.map((pillar) => (
          <article className="text-center" key={pillar.title}>
            <div className="flex justify-center">
              <span className="inline-flex size-16 items-center justify-center rounded-full bg-brand/10 text-brand">
                <FontAwesomeIcon
                  aria-hidden="true"
                  className="size-7"
                  icon={pillar.icon}
                />
              </span>
            </div>

            <h2 className="mt-5 font-heading text-[20px] font-bold text-navy sm:text-[22px]">
              {pillar.title}
            </h2>

            <p className="mt-4 text-[15px] leading-[1.9] text-ink-2">
              {pillar.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
