import { SectionHeading, EducationItem } from "../../components";


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
                description="This advanced program provided me with a comprehensive understanding of the interplay between IoT technologies and mobile services, equipping me with the knowledge and skills to navigate the evolving landscape of connected devices and mobile applications"
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
        </div>
    );
}

export default About;
