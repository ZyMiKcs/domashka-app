import { getStatusText } from '../services/getStatusText.js';
import { formatDate } from '../services/dateFormatter.js';
import FileDownload from '../features/FileDownload.jsx';
import SendTask from '../features/SendTask.jsx';

export default function TaskInfoWidget({
    id,
    status,
    isDeadline = false,
    subject,
    teacher,
    title,
    description,
    expiredAt,
    files,
    answer,
}) {
    let statusText = getStatusText(status);
    let formattedDate = formatDate(expiredAt);

    return (
        <div className="bg-[#FFFFFF] p-8 rounded-[16px] mt-3 shadow-sm">
            <div className="flex justify-between items-start">
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
                <div className="flex flex-col items-start">
                    <p className="text-[#1B1F3B]/40 text-[11px] font-medium">
                        сдать до:
                    </p>
                    <p className="text-[13px] text-[#191C30]/90 font-extrabold">
                        {formattedDate}
                    </p>
                </div>
            </div>
            <div className="flex justify-between items-start mt-9">
                <div className="flex flex-col gap-6 w-[600px] leading-[48px]">
                    <h2 className="text-[44px] font-extrabold text-[#191C30]/90 text-wrap">
                        {title}
                    </h2>
                    <p className="leading-[28px] font-medium text-[17px] text-[#191C30]/90">
                        {description}
                    </p>
                </div>
                {answer?.length === 0 && <SendTask />}
            </div>
            <div className="flex flex-col gap-6 mt-10">
                <h4 className="text-xl font-extrabold text-[#1B1F3B]/65">
                    Прикрепленные файлы
                </h4>
                <div className="w-fit">
                    {files?.map((file) => (
                        <FileDownload
                            name={file.name}
                            size={file.size}
                            filePath={file.filePath}
                            key={file.id}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
