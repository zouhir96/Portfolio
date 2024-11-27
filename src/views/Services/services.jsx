import { SectionHeading } from "../../components";
import BlurFade from "../../components/ui/blur-fade.tsx";

const Service = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col h-full items-center rounded-lg border border-[#3C5065] p-4 space-y-4 hover:drop-shadow-2xl">
      <img src={icon} alt="" className="h-7 w-7" />
      <p className="font-bold text-2xl text-center">{title}</p>
      <p className="text-lg font-light text-start">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: "Vector.png",
      title: "Mobile/Web Developer",
      description:
        "I specialize in creating robust Android applications tailored to meet your business needs, ensuring smooth performance, scalability, and an intuitive user experience.",
    },
    {
      icon: "Vector.png",
      title: "UI/UX Design",
      description:
        "I craft modern, user-centered designs that enhance usability and create delightful experiences for your users, from wireframes to polished visuals.",
    },
    {
      icon: "Vector.png",
      title: "Project management",
      description:
        "With a strong focus on delivering quality results, I manage projects efficiently, ensuring timelines are met, and collaboration flows smoothly from start to finish.",
    },
  ];

  return (
    <div className="flex flex-col flex-wrap space-y-10 p-10" id="services">
      <SectionHeading title="Services" subtitle="Services I Offer" description="Helping you build high-quality, user-friendly, and scalable solutions." />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {services.map((service, index) => (
          <BlurFade key={index} delay={0.25 + index * 0.05} inView>
            <Service
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          </BlurFade>
        ))}
      </div>
    </div>
  );
};

export default Services;
