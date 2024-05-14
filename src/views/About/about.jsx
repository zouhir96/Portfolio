import { SectionHeading, EducationItem, ExperienceItem } from "../../components";


const About = () => {
    return (
        <div className="flex flex-col p-8 mt-20 gap-7" id="about">
            <SectionHeading
                title="about"
                subtitle="My education and experiences"
                description="Explore my academic accolades, professional certifications, and project experiences, as they converge to showcase the breadth and depth of my expertise in crafting cutting-edge Android solutions."
            />
            <h1 className="font-bold text-2xl">Education</h1>
            <EducationItem
                institution="National School of Computer Science and Systems Analysis"
                degree="Master's degree: Internet of Things and Mobile Services"
                description="This advanced program provided me with a comprehensive understanding of the interplay between IoT technologies and mobile services, equipping me with the knowledge and skills to navigate the evolving landscape of connected devices and mobile applications."
                location="Rabat, Morocco"
                date="2018 -> 2020"
            />
            <EducationItem
                institution="Faculty of Science and Technologies"
                degree="Bachelor's Degree: Software Engineering"
                description="This foundational program provided me with a robust understanding of software development principles, algorithms, and system architecture. Throughout my undergraduate studies, I immersed myself in a diverse range of subjects, from programming languages to database management, acquiring essential skills to tackle complex software challenges. "
                location="Errachidia, Morocco"
                date="2014 -> 2018"
            />
            <h1 className="font-bold text-2xl">Experiences</h1>
            <div className="sm:grid grid-cols-2 gap-7 flex flex-col gap-7"> 
                <ExperienceItem
                role="Lead android developer"
                type="Freelance"
                company="Avito.ma - Frontier Digital Ventures"
                description="Leading the developement and maintenance of the Avito android application 10M+ downloads on PlayStore."
                location="Villejuif, ile-de-france, France"
                date="November 2023 -> Present"
                />
                <ExperienceItem
                role="ANDROID ENGINEER CONSULTANT"
                type="CDI"
                company="Altados by niji &nbsp;&nbsp;&nbsp;&nbsp; Client: Niji France"
                description="Assigned to Niji to work on the Barrière Play and HelloAsso projects:<br>- Barrière Play:- 10k+ downloads on PlayStore<br>- HelloAsso: 10k+ downloads on PlayStore."
                location="Casablanca, Morocco"
                date="September 2022 -> November 2023"
                />
                <ExperienceItem
                role="CONFIRMED ANDROID ENGINEER"
                type="CDI"
                company="Avito.ma - Frontier Digital Ventures"
                description="Evolution within a team of 4 Android developers, 1 QA and 1 PO.Development of new features of the Avito Android application(10M+ downloads on PlayStore)."
                location="Casablanca, Morocco"
                date="February 2022 -> September 2022"
                />
                <ExperienceItem
                role="ANDROID ENGINEER"
                type="CDI"
                company="Inyad"
                description="Start as an intern then got hired as Android engineer, and worked on two Android application:<br>- Konnash: 1M+ téléchargements sur Playstore.<br>- Mahaal :100k+ téléchargements sur Playstore."
                location="Casablanca, Morocco"
                date="February 2022 -> September 2022"
                />
            </div>
        </div>
    );
}

export default About;
