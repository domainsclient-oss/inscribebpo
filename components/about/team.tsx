import Image from "next/image";
import { SectionLabel } from "@/components/site/section-label";

const members = [
  {
    name: "Prakash Radhakrishnan",
    role: "CEO",
    image: "/images/about/ceo-inscribe.webp",
    width: 700,
    height: 700,
  },
  {
    name: "Omer Sheriff",
    role: "COO",
    image: "/images/about/coo-inscribe-500x500.webp",
    width: 500,
    height: 500,
  },
  {
    name: "Sulthan Hameed",
    role: "Director",
    image: "/images/about/Director-inscribe-500x500.webp",
    width: 500,
    height: 500,
  },
];

export function Team() {
  return (
    <section
      aria-label="Our team"
      className="bg-white py-14 sm:py-16 lg:py-20"
      id="team"
    >
      <div className="container-site">
        <div className="text-center">
          <SectionLabel>Our Team</SectionLabel>
          <h2 className="mt-2 text-[clamp(1.6rem,2.8vw,2.25rem)] leading-tight font-bold text-navy">
            The Force Behind Inscribe
          </h2>
        </div>

        <ul className="mx-auto mt-10 grid max-w-[1050px] grid-cols-1 gap-10 sm:grid-cols-3 lg:mt-14">
          {members.map((member) => (
            <li className="text-center" key={member.name}>
              <div className="mx-auto w-full max-w-[280px] overflow-hidden">
                <Image
                  alt={`${member.name}, ${member.role} of Inscribe`}
                  className="aspect-square h-auto w-full object-cover"
                  height={member.height}
                  sizes="(min-width: 640px) 280px, 70vw"
                  src={member.image}
                  width={member.width}
                />
              </div>

              <h3 className="mt-5 font-heading text-[18px] font-bold text-navy sm:text-[19px]">
                {member.name}
              </h3>
              <p className="mt-1 text-[15px] text-brand">{member.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
