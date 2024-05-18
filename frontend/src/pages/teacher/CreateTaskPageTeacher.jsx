import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FileUpload from '../../features/FileUpload.jsx';

export default function CreateTaskPageTeacher() {
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [titleFocused, setTitleFocused] = useState(false);
    const [descriptionFocused, setDescriptionFocused] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [taskDueDate, setTaskDueDate] = useState('');
    const [teacherId, setTeacherId] = useState(145); // Предположим, что teacherId будет получен откуда-то
    const [subjectId, setSubjectId] = useState(2); // Предположим, что subjectId будет получен откуда-то

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const formData = new FormData();
            formData.append(
                'taskDto',
                JSON.stringify({
                    teacherId,
                    subjectId,
                    title: taskTitle,
                    description: taskDescription,
                    expiredAt: new Date(taskDueDate).toISOString(),
                })
            );
            selectedFiles.forEach((file) => {
                formData.append('files', file);
            });

            const response = await fetch(
                'http://185.84.162.160:8080/api/v1/tasks',
                {
                    method: 'POST',
                    body: formData,
                }
            );

            if (!response.ok) {
                throw new Error('Failed to create task');
            }

            const result = await response.json();
            navigate('/tasks/teacher');
        } catch (error) {
            console.error('Error creating task:', error);
        }
    };

    useEffect(() => {
        const today = new Date();
        const formattedDate = today.toISOString().split('T')[0];

        setTaskDueDate(formattedDate);
    }, []);

    const handleDateChange = (event) => {
        const selectedDate = event.target.value;
        setTaskDueDate(selectedDate);
    };

    return (
        <div className="pt-[42px] px-8">
            <Link to="/tasks/teacher" className="flex items-center gap-2.5">
                <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.70711 0.292893C8.09763 0.683417 8.09763 1.31658 7.70711 1.70711L2.41421 7L7.70711 12.2929C8.09763 12.6834 8.09763 13.3166 7.70711 13.7071C7.31658 14.0976 6.68342 14.0976 6.29289 13.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289L6.29289 0.292893C6.68342 -0.0976311 7.31658 -0.0976311 7.70711 0.292893Z"
                        fill="#191C30"
                        fillOpacity="0.9"
                    />
                </svg>

                <p>К заданиям</p>
            </Link>
            <div className="bg-[#FFFFFF] rounded-[16px] mt-9 p-8">
                <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-[24px] grow">
                        <input
                            placeholder="Введите название"
                            value={taskTitle}
                            onChange={(e) => setTaskTitle(e.target.value)}
                            onFocus={() => setTitleFocused(true)}
                            onBlur={() => setTitleFocused(false)}
                            className={`outline-none text-[44px] text-[#191C30]/90 font-extrabold w-[70%] text-wrap  ${
                                titleFocused
                                    ? 'placeholder:text-transparent'
                                    : 'placeholder:text-[#191C30]/60'
                            }`}
                            type="text"
                        />
                        <input
                            placeholder="Введите описание задачи, чтобы студентам было проще разобраться в нём"
                            value={taskDescription}
                            onChange={(e) => setTaskDescription(e.target.value)}
                            onFocus={() => setDescriptionFocused(true)}
                            onBlur={() => setDescriptionFocused(false)}
                            className={`outline-none text-[17px] text-[#191C30]/90 font-medium w-[70%] text-wrap ${
                                descriptionFocused
                                    ? 'placeholder:text-transparent'
                                    : 'placeholder:text-[#191C30]/90'
                            }`}
                            type="text"
                        />
                    </div>

                    <button
                        className="text-[#526ED3] text-[15px] font-extrabold flex items-center p-4"
                        onClick={handleSubmit}
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M17.7304 7.31701C18.1076 7.72041 18.0864 8.35322 17.683 8.73043L11.058 16.7304C10.6736 17.0898 10.0765 17.0899 9.69209 16.7305L6.31709 13.6405C5.91365 13.2633 5.89234 12.6305 6.2695 12.2271C6.64667 11.8236 7.27947 11.8023 7.68292 12.1795L10.3749 14.631L16.317 7.26958C16.7204 6.89237 17.3532 6.91361 17.7304 7.31701Z"
                                fill="#526ED3"
                            />
                        </svg>
                        Сохранить
                    </button>
                </div>
                <div className="mt-12">
                    <div className="flex flex-col items-start gap-4">
                        <label
                            htmlFor="date-picker"
                            className="text-[#1B1F3B]/65 text-[24px] font-extrabold"
                        >
                            Срок сдачи
                        </label>
                        <input
                            type="date"
                            id="date-picker"
                            className="outline-[#E0E0E0] border border-[#E0E0E0] outline-1 text-[#1B1F3B]/65 p-4 rounded-[12px] w-[320px]"
                            value={taskDueDate}
                            onChange={handleDateChange}
                        />
                    </div>
                </div>
                <div className="mt-12 flex flex-col items-start gap-6">
                    <h4
                        htmlFor="date-picker"
                        className="text-[#1B1F3B]/65 text-[20px] font-extrabold"
                    >
                        Прикрепленные файлы
                    </h4>
                    <FileUpload
                        selectedFiles={selectedFiles}
                        setSelectedFiles={setSelectedFiles}
                    />
                </div>
            </div>
        </div>
    );
}
