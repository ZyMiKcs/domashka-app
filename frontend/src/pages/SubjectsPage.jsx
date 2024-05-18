import { Link } from 'react-router-dom';
import SubjectCard from '../features/SubjectCard.jsx';
import { useEffect, useState } from 'react';

export default function SubjectsPage() {
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `http://185.84.162.160:8080/api/v1/subjects`
                );
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const result = await response.json();
                setSubjects(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="pt-[42px] mx-8">
            <Link to="/dashboard" className="flex items-center gap-2.5 mb-2.5">
                <img src="../images/backarrow.svg" alt="back-arrow-icon" />
                <p>На главную</p>
            </Link>

            <div className="border border-[#EDEDED] flex flex-col p-8 rounded-[16px] shadow-md">
                <h3 className="text-[28px] text-[#191C30]/90 font-extrabold mb-8">
                    Предметы
                </h3>
                <div className="flex flex-wrap justify-between gap-[16px]">
                    {subjects.map((subject) => (
                        <SubjectCard key={subject.id} name={subject.name} />
                    ))}
                </div>
            </div>
        </div>
    );
}
