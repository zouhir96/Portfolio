import { SectionHeading } from "../../components";
import { Link as RouterLink } from "react-router-dom";

const Skills = () => {
    
    const skills = [
    "Kotlin", "Java", "Compose", "Coroutines/flows", "RxJava", "Material",
    "Navigation", "MVVM", "MVI", "Kotlin", "Kotlin", "Kotlin", "Kotlin", "Kotlin", "Kotlin"
    ];
    return (
        <div className="p-10" id="skills">
            <SectionHeading
                title="skills and tools"
                subtitle="Discover what i can do"
                description="Well i got a lot of skills, from developement, design to project management."
            />

            <div className="flex gap-4 justify-center mt-16 mb-32 flex-wrap">
                <RouterLink to="" className="border p-2 rounded-sm px-4 border-[#3C5065]">Android</RouterLink>
                <RouterLink to="" className="p-2  px-4">Web</RouterLink>
                <RouterLink to="" className="p-2  px-4">Design</RouterLink>
                <RouterLink to="" className="p-2  px-4">Project Managment</RouterLink>
            </div>

            <div className="flex flex-col gap-10 lg:gap-x-20 lg:px-16 lg:grid grid-cols-2">
                <div>
                    <h2 className="text-4xl font-bold mb-7">I developed several Android applications</h2>
                    <div className="grid grid-cols-2 gap-y-7">
                        <h6 className="font-bold">Worked on:<br/><span className="font-normal">7 Android projects</span></h6>
                        <h6 className="font-bold">Worked with<br/><span className="font-normal">5 companies (small and big)</span></h6>
                        <h6 className="font-bold">Worked on:<br/><span className="font-normal">7 different teams</span></h6>
                        <h6 className="font-bold">100%<br/><span className="font-normal">Completed projects</span></h6>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-1 font-semibold text-sm md:text-base">
                    {skills.map((skill, index) => (
                    <div key={index} 
                        className={`flex justify-around items-center p-2 bg-white ${
                        index === 3 ? 'sm:col-span-5 col-span-6' :
                        index === 4 ? 'sm:col-span-4 col-span-6' :
                        index === 5 ? 'sm:col-span-3 col-span-4' :
                        index === 14 ? 'sm:col-span-4 sm:flex hidden' :
                        'col-span-4'
                        }`}>
                        <img src="Vector.png" alt="" className="h-7" />
                        <p>{skill}</p>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;
