import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";

const EducationItem = ({ institution, degree, description, location, date }) => {
    return (
        <div className="bg-white rounded-xl p-5">
            <h3 className="font-bold text-lg mb-2">{institution}</h3>
            <h4 className="mb-4">{degree}</h4>
            <p className="text-sm mb-5">{description}</p>
            <div className="flex sm:flex-row flex-col sm:gap-5">
                <h6 className="flex items-center gap-3 inline"><FaLocationDot/>{location}</h6>
                <h6 className="flex items-center gap-3 inline-block"><FaCalendarAlt/>{date}</h6>
            </div>
        </div>
    );
}

export default EducationItem;
