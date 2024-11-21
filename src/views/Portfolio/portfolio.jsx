import { SectionHeading } from "../../components";
import PortfolioItem from "../../components/portfolioItem";
import BlurFade from "../../components/ui/blur-fade.tsx";

const Portfolio = () => {
  const portfolioItems = [
    {
      image: "portfolio/avito.png",
      title: "Avito",
      type: "Avito.ma experience",
      description:"Contributing to the development and optimization of the Android application for Avito.ma, implementing new features, enhancing user experience, and ensuring app performance and scalability to serve millions of active users. Currently Leading the migration to Jetpack Compose 👊.",
      technologies: [
        "Kotlin",
        "Jetpack compose",
        "Clean archi",
        "MVVM/MVI",
        "Hilt",
        "ApolloGraphql",
        "...",
      ],
      linkToProject: "https://play.google.com/store/apps/details?id=se.scmv.morocco&amp;utm_source=homepage&amp;utm_campaign=homepage",
    },
    {
      image: "portfolio/hackertab.png",
      title: "Hackertab-mobile",
      type: "Personal project",
      description:"The Developers homepage, Hackertab makes it easy for you to stay up-to-date with the latest developer news, tools and conferences.",
      technologies: [
        "Kotlin&compose multiplatform",
        "Android",
        "IOS",
        "MVI",
        "Koin",
        "Ktor",
        "...",
      ],
      linkToProject: "https://github.com/zouhir96/hackertab-android",
    },
    {
      image: "portfolio/pos_lite.png",
      title: "POS lite",
      type: "Personal project",
      description:
        "POS Lite is a versatile Android application designed to empower businesses of all types such as restaurants, coffee shops, retail stores, and more.",
      technologies: [
        "Kotlin",
        "Jetpack compose",
        "Navigation",
        "MVI",
        "Coroutines",
        "Hilt",
        "Room",
        "...",
      ],
      linkToProject: "",
    },
    {
      image: "portfolio/konnash.png",
      title: "Konnash",
      type: "Personal project",
      description:
        "Digital cash book, 100% free and secure. Record customers' debts and payments, simplify follow-up and speed up collection.",
      technologies: [
        "Java",
        "RxJava",
        "Offline-first",
        "Navigation",
        "Room",
        "Retrofit2",
        "Online-synch",
        "...",
      ],
      linkToProject:
        "https://play.google.com/store/apps/details?id=com.invyad.konnash",
    },
  ];
  return (
    <div className="p-10" id="portfolio">
      <SectionHeading
        title="portfolio"
        subtitle="Discover my work"
        description="Explore my project repositories, download the apps, and test them out. Feel free to reach out if you'd like to collaborate or work together!"
      />
      <div className="sm:grid grid-cols-2 gap-7 flex flex-col mt-10">
        {portfolioItems.map((item, index) => (
          <BlurFade key={index} delay={0.25 + index * 0.05} inView>
            <PortfolioItem
              image={item.image}
              title={item.title}
              type={item.type}
              description={item.description}
              technologies={item.technologies}
              linkToProject={item.linkToProject}
            />
          </BlurFade>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
