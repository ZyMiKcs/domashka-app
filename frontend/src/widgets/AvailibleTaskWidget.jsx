import { Link } from 'react-router-dom';
import { formatDate } from '../services/dateFormatter.js';
import { getStatusText } from '../services/getStatusText.js';

export default function AvailibleTaskWidget({
    id,
    status,
    isDeadline = false,
    subject,
    teacher,
    title,
    description,
    expiredAt,
}) {
    let statusText = getStatusText(status);
    let formattedDate = formatDate(expiredAt);

    return (
        <div className="p-8 flex justify-between task-shadow rounded-[16px]">
            <div className="flex flex-col justify-between gap-[25px]">
                <div className="flex items-center gap-2">
                    <p
                        className={`${
                            isDeadline ? 'deadline' : ''
                        } relative flex items-center gap-2 h-6 text-[13px] font-medium px-2 w-fit ${status} z-0`}
                    >
                        <span
                            className={`h-1.5 w-1.5 rounded-full bg-[#FFC700] `}
                        ></span>
                        {!isDeadline ? statusText : 'Скоро дедлайн'}
                    </p>
                    <p className="h-6 bg-[#79818C1F] px-2 rounded-[30px] text-[13px] font-medium flex items-center">
                        {subject}
                    </p>
                    <p className="h-6 bg-[#79818C1F] px-2 rounded-[30px] text-[13px] font-medium flex items-center">
                        {teacher}
                    </p>
                </div>
                <div className="flex flex-col gap-3">
                    <h4 className="text-[20px] font-extrabold w-[632px] text-[#191C30]/90">
                        {title}
                    </h4>
                    <p className="text-[13px] font-medium w-[632px] text-[#191C30]/90">
                        {description}
                    </p>
                </div>
            </div>
            <div className="flex flex-col justify-between">
                <div className="flex flex-col items-start">
                    <p className="text-[#1B1F3B]/40 text-[11px] font-medium">
                        сдать до:
                    </p>
                    <p className="text-[13px] text-[#191C30]/90 font-bold">
                        {formattedDate}
                    </p>
                </div>
                <Link
                    to={`/tasks/${id}`}
                    className="bg-[#526ED3] text-white rounded-xl px-2 h-8 font-extrabold hover:bg-[#6C86E2] transition-colors duration-200 flex items-center"
                >
                    Посмотреть
                </Link>
            </div>
        </div>
    );
}
