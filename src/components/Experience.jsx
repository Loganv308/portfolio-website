import React from "react";

const experiences = [
  {
    date: "2023 — Present",
    role: "Full-Stack Engineer",
    company: "Company Name",
    description:
      "Describe your role, responsibilities, and key achievements. What did you build? What impact did you have on the team or product?",
  },
  {
    date: "2022 — 2023",
    role: "Frontend Developer",
    company: "Company Name",
    description:
      "Describe your role here. Mention the tech stack, team size, and notable projects you shipped.",
  },
  {
    date: "2021 — 2022",
    role: "Junior Developer",
    company: "Company Name",
    description:
      "Your first role or internship. Describe what you learned, what you built, and how you grew as an engineer.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-cream px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs uppercase tracking-[0.15em] text-terra font-medium mb-2">
          Where I've been
        </p>
        <h2 className="font-serif text-3xl text-ink mb-10">Experience</h2>

        <div className="divide-y divide-soft border-y border-soft">
          {experiences.map((exp) => (
            <div
              key={exp.role + exp.company}
              className="grid md:grid-cols-[160px_1fr] gap-6 py-7"
            >
              <p className="text-sm text-muted pt-0.5">{exp.date}</p>
              <div>
                <h3 className="font-serif text-lg text-ink mb-0.5">{exp.role}</h3>
                <p className="text-sm text-terra font-medium mb-3">{exp.company}</p>
                <p className="text-sm text-muted leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
