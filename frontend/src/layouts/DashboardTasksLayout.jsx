import { useEffect, useState } from 'react';
import SortTasksWidget from '../widgets/SortTasksWidget.jsx';
import AvailibleTasksLayout from './AvailibleTasksLayout.jsx';

let tasksArr = [
    {
        id: 1,
        status: 'new',
        subject: 'Базы данных',
        teacher: 'Титов Ю.П.',
        title: 'Создать базу данных для интернет-магазина',
        description:
            'Создать базу данных на основании работы на практическом задании. Прикрепить Word файл с обоснованием решения.',
        expiredAt: new Date().toString(),
    },
    {
        id: 2,
        status: 'in_progress',
        subject: 'Базы данных',
        teacher: 'Титов Ю.П.',
        title: 'Создать базу данных для интернет-магазина',
        description:
            'Создать базу данных на основании работы на практическом задании. Прикрепить Word файл с обоснованием решения.',
        expiredAt: new Date().toString(),
    },
    {
        id: 3,
        status: 'closed',
        subject: 'Базы данных',
        teacher: 'Титов Ю.П.',
        title: 'Создать базу данных для интернет-магазина',
        description:
            'Создать базу данных на основании работы на практическом задании. Прикрепить Word файл с обоснованием решения.',
        expiredAt: new Date().toString(),
    },
    {
        id: 4,
        status: 'new',
        isDeadline: true,
        subject: 'Базы данных',
        teacher: 'Титов Ю.П.',
        title: 'Создать базу данных для интернет-магазина',
        description:
            'Создать базу данных на основании работы на практическом задании. Прикрепить Word файл с обоснованием решения.',
        expiredAt: new Date().toString(),
    },
];

export default function DashboardTasksLayout() {
    const [tasks, setTasks] = useState([]);
    const studentId = 143;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `http://185.84.162.160:8080/api/v1/tasks/users/${studentId}`
                );
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const result = await response.json();
                setTasks(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="bg-[#FFFFFF] rounded-[16px] p-8 mx-8">
            <h2 className="text-[28px] font-extrabold text-[#191C30E5]">
                Мои задания
            </h2>
            <SortTasksWidget />
            <AvailibleTasksLayout tasks={tasks} />
        </div>
    );
}
