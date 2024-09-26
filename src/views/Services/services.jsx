import { SectionHeading } from "../../components";

const Service = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center rounded-lg border border-[#3C5065] p-4 space-y-4 hover:drop-shadow-2xl">
      <img src={icon} alt="" className="h-7 w-7" />
      <p className="font-bold text-2xl text-center">{title}</p>
      <p className="text-lg font-light text-center">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: "Vector.png",
      title: "Mobile/Web Developer",
      description:
        "Build dynamic and engaging digital experiences with tailored Android/Web development solutions that bring your vision to life and connect with your audience.",
    },
    {
      icon: "Vector.png",
      title: "UI/UX Design",
      description:
        "Using tools like Figma, I love to create beautiful and functional designs.  I'm passionate about creating accessible and responsive designs that are intentional, effective, and evocative.",
    },
    {
      icon: "Vector.png",
      title: "Project management",
      description:
        "In my experience, utilizing tools like Jira has allowed me to effectively manage teams and prioritize user stories, which are essential for project success.",
    },
  ];

  return (
    <div className="flex flex-col flex-wrap space-y-10 p-10" id="services">
      <SectionHeading title="Services" subtitle="What i offer" description="" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {services.map((service) => (
          <Service
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
