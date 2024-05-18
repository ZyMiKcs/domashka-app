import { Link } from 'react-router-dom';
import { formatDate } from '../services/dateFormatter.js';

export default function DeadlineWidget({
    id,
    subject,
    teacher,
    title,
    expiredAt,
}) {
    const formattedDate = formatDate(expiredAt);
    return (
        <Link
            to={`/tasks/${id}`}
            className="w-[225px] h-[170px] bg-[#FFFFFF] rounded-xl flex flex-col p-6 justify-between shadow-md flex-shrink-0"
        >
            <div className="flex items-start justify-between text-[13px] font-medium flex-col gap-2">
                <p className="bg-[#79818C1F] px-[5px] rounded-[30px]">
                    {subject}
                </p>
                <p className="bg-[#79818C1F] px-[5px] rounded-[30px]">
                    {teacher}
                </p>
            </div>
            <div className="flex flex-col gap-2">
                <h5 className="text-[15px] font-extrabold">{title}</h5>
                <div className="flex items-center gap-2.5">
                    <img src="./images/date.svg" alt="date" />
                    <p>{formattedDate}</p>
                </div>
            </div>
        </Link>
    );
}
