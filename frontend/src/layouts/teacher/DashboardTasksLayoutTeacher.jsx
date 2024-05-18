import { useEffect, useState } from 'react';
import SortTasksWidget from '../../widgets/SortTasksWidget.jsx';
import AvailibleTasksLayout from '../AvailibleTasksLayout.jsx';
import { Link } from 'react-router-dom';

export default function DashboardTasksLayoutTeacher() {
    const [tasks, setTasks] = useState([]);
    const teacherId = 145;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `http://185.84.162.160:8080/api/v1/tasks/users/${teacherId}?isTeacher=true`
                );
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const result = await response.json();
                console.log(result);
                setTasks(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="bg-[#FFFFFF] rounded-[16px] p-8 mx-8">
            <div className="flex justify-between">
                <h2 className="text-[28px] font-extrabold text-[#191C30E5]">
                    Задания
                </h2>
                <Link
                    to={`/create-task/teacher`}
                    className="bg-[#526ED3] text-white rounded-xl px-2 h-11 font-extrabold hover:bg-[#6C86E2] transition-colors duration-200 flex items-center"
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
                            d="M12 4C12.5523 4 13 4.44772 13 5V11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H13V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11V5C11 4.44772 11.4477 4 12 4Z"
                            fill="white"
                        />
                    </svg>{' '}
                    Создать задание
                </Link>
            </div>
            <SortTasksWidget />
            <AvailibleTasksLayout tasks={tasks} />
        </div>
    );
}
