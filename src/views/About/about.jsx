import {
  SectionHeading,
  EducationItem,
  ExperienceItem,
} from "../../components";
import BlurFade from "../../components/ui/blur-fade.tsx";

const About = () => {
  const educationItems = [
    {
      institution: "National School of Computer Science and Systems Analysis",
      degree: "Master's degree: Internet of Things and Mobile Services",
      location: "Rabat, Morocco",
      date: "2018 -> 2020",
    },
    {
      institution: "Faculty of Science and Technologies",
      degree: "Bachelor's Degree: Software Engineering",
      location: "Errachidia, Morocco",
      date: "2014 -> 2018",
    },
  ];

  const experienceItems = [
    {
      role: "LEAD ANDROID DEVELOPER",
      type: "Freelance",
      company: "Avito.ma - Frontier Digital Ventures",
      location: "Villejuif, ile-de-france, France",
      date: "November 2023 -> Present",
    },
    {
      role: "ANDROID ENGINEER CONSULTANT",
      type: "CDI",
      company: "Altados by niji       Client: Niji France",
      location: "Casablanca, Morocco",
      date: "September 2022 -> November 2023",
    },
    {
      role: "CONFIRMED ANDROID ENGINEER",
      type: "CDI",
      company: "Avito.ma - Frontier Digital Ventures",
      location: "Casablanca, Morocco",
      date: "February 2022 -> September 2022",
    },
    {
      role: "ANDROID ENGINEER",
      type: "CDI",
      company: "Inyad",
      location: "Casablanca, Morocco",
      date: "February 2022 -> September 2022",
    },
  ];

  return (
    <div className="flex flex-col p-8 gap-7" id="about">
      <SectionHeading
        title="about"
        subtitle="Education & Professional Experience"
        description="My journey of learning and growth through academics and real-world practice."
      />
      <h1 className="font-bold text-2xl">Experiences</h1>
      <div className="sm:grid grid-cols-2 gap-7 flex flex-col">
        {experienceItems.map((experienceItem, idx) => (
          <BlurFade key={idx} delay={0.25 + idx * 0.05} inView>
            <ExperienceItem
              role={experienceItem.role}
              type={experienceItem.type}
              company={experienceItem.company}
              location={experienceItem.location}
              date={experienceItem.date}
            />
          </BlurFade>
        ))}
      </div>
      <h1 className="font-bold text-2xl">Education</h1>
      <div className="sm:grid grid-cols-2 gap-7 flex flex-col">
        {educationItems.map((educationItem, idx) => (
          <BlurFade key={idx} delay={0.25 + idx * 0.05} inView>
            <EducationItem
              institution={educationItem.institution}
              degree={educationItem.degree}
              location={educationItem.location}
              date={educationItem.date}
            />
          </BlurFade>
        ))}
      </div>
    </div>
  );
};

export default About;
