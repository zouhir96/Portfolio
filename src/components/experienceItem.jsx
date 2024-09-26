import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";

const ExperienceItem = ({ role, company, type, location, date }) => {
    return (
        <div className="bg-white rounded-xl p-5">
            <h3 className="font-bold text-lg mb-1">{role}&nbsp; <span className="text-xs">{type}</span></h3>
            <h4 className="mb-4 text-sm font-bold">{company}</h4>
            <div className="flex sm:flex-row flex-col sm:gap-5">
                <h6 className="flex items-center gap-3 inline"><FaLocationDot/>{location}</h6>
                <h6 className="flex items-center gap-3 inline-block"><FaCalendarAlt/>{date}</h6>
            </div>
        </div>
    );
}

export default ExperienceItem;
