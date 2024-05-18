import { useEffect, useState } from 'react';
import DeadlineWidget from '../widgets/DeadlineWidget.jsx';

let testDeadlines = [
    {
        id: 1,
        subject: 'База данных',
        teacher: 'Титов Ю.П.',
        title: 'Практическое занятие №4',
        expiredAt: new Date().toString(),
    },
    {
        id: 2,
        subject: 'База данных',
        teacher: 'Титов Ю.П.',
        title: 'Практическое занятие №4',
        expiredAt: new Date().toString(),
    },
    {
        id: 3,
        subject: 'База данных',
        teacher: 'Титов Ю.П.',
        title: 'Практическое занятие №4',
        expiredAt: new Date().toString(),
    },
    {
        id: 4,
        subject: 'База данных',
        teacher: 'Титов Ю.П.',
        title: 'Практическое занятие №4',
        expiredAt: new Date().toString(),
    },
    {
        id: 5,
        subject: 'База данных',
        teacher: 'Титов Ю.П.',
        title: 'Практическое занятие №4',
        expiredAt: new Date().toString(),
    },
    {
        id: 6,
        subject: 'База данных',
        teacher: 'Титов Ю.П.',
        title: 'Практическое занятие №4',
        expiredAt: new Date().toString(),
    },
    {
        id: 7,
        subject: 'База данных',
        teacher: 'Титов Ю.П.',
        title: 'Практическое занятие №4',
        expiredAt: new Date().toString(),
    },
    {
        id: 8,
        subject: 'База данных',
        teacher: 'Титов Ю.П.',
        title: 'Практическое занятие №4',
        expiredAt: new Date().toString(),
    },
    {
        id: 9,
        subject: 'База данных',
        teacher: 'Титов Ю.П.',
        title: 'Практическое занятие №4',
        expiredAt: new Date().toString(),
    },
];

export default function DeadlineLayout() {
    const [deadlines, setDeadlines] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    'http://185.84.162.160:8080/api/v1/tasks?isDeadline=true'
                );
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const result = await response.json();
                setDeadlines(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        deadlines.length !== 0 && (
            <div className="px-8">
                <h2 className="flex gap-2 text-[28px] font-extrabold items-center text-[#191C30E5]">
                    <span>
                        <img src="./images/deadline.svg" alt="deadline-icon" />
                    </span>
                    Скоро дедлайн
                </h2>
                <div className="flex items-center mt-6 pb-[42px] gap-4 overflow-x-auto w-screen no-scrollbar">
                    {deadlines.map((deadline) => (
                        <DeadlineWidget
                            key={deadline.id}
                            id={deadline.id}
                            subject={deadline.subject}
                            teacher={deadline.teacher}
                            title={deadline.title}
                            expiredAt={deadline.expiredAt}
                        />
                    ))}
                </div>
            </div>
        )
    );
}
