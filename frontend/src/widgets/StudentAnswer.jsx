import FileDownload from '../features/FileDownload.jsx';

export default function StudentAnswer({ answer }) {
    return (
        <div className="rounded-[16px] bg-[#FFFFFF] mt-2.5 p-8 shadow-sm">
            <h3 className="text-[#191C30]/90 text-4xl font-extrabold">Ответ</h3>
            <p className="mt-6 text-[17px] text-[#191C30]/90 font-medium w-[90%]">
                {answer?.length !== 0
                    ? answer[0]?.message
                    : 'Вы пока не сдали задание, ждём ваше гениальное решение :)'}
            </p>
            {answer?.length !== 0 && (
                <div className="flex flex-col gap-6 mt-10">
                    <h4 className="text-xl font-extrabold text-[#1B1F3B]/65">
                        Прикрепленные файлы
                    </h4>
                    <div className="w-fit">
                        {answer[0]?.files.map((file) => (
                            <FileDownload
                                name={file.name}
                                size={file.size}
                                filePath={file.filePath}
                                key={file.id}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
