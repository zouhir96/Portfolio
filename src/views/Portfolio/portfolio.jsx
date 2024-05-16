import { SectionHeading } from "../../components";
import PortfolioItem from "../../components/portfolioItem";

const Portfolio = () => {
    
  const portfolioItems = [
    {
      image: 'portfolio/project1.png',
      title: 'Hackertab-android',
      type: 'Personal project',
      description: 'The Developers homepage, Hackertab makes it easy for you to stay up-to-date with the latest developer news, tools and conferences.',
      technologies: ['Kotlin', 'Coroutines', 'Compose', 'Hilt', 'Navigation', 'Retrofit2', 'Room']
    },
    {
      image: 'portfolio/project2.png',
      title: 'Skincare',
      type: 'Personal project',
      description: 'Native Android E-commerce application to sell skincare products.',
      technologies: ['Kotlin', 'Coroutines', 'Compose', 'Hilt', 'Navigation', 'Material', 'Datastore']
    },
    {
      image: 'portfolio/project3.png',
      title: 'Konnash',
      type: 'Inyad experience',
      description: 'Digital cash book, 100% free and secure.<br>Record customers\' debts and payments, simplify follow-up and speed up collection.',
      technologies: ['Java', 'RxJava', 'offline-first', 'Navigation', 'room', 'Retrofit2', 'Real-time synch']
    }
  ];
    return (
        <div className="p-10" id="portfolio">
            <SectionHeading
                title="portfolio"
                subtitle="Discover my work"
                description="Feel free to to visit projects repositories and report any issue."
            />
            <div className="sm:grid grid-cols-2 gap-7 flex flex-col mt-10">
            {portfolioItems.map((item, index) => (
                <PortfolioItem
                key={index}
                image={item.image}
                title={item.title}
                type={item.type}
                description={item.description}
                technologies={item.technologies}
                />
            ))}
            </div>
        </div>
    );
}

export default Portfolio;
