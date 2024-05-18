import { Link, useNavigate, useParams } from 'react-router-dom';
import { getStatusText } from '../services/getStatusText.js';
import { formatDate } from '../services/dateFormatter.js';
import { useEffect, useState } from 'react';
import TaskInfoWidget from '../widgets/TaskInfoWidget.jsx';
import StudentAnswer from '../widgets/StudentAnswer.jsx';
import AvailibleTaskWidget from '../widgets/AvailibleTaskWidget.jsx';

export default function TaskPage() {
    const [taskInfo, setTaskInfo] = useState();
    const [tasks, setTasks] = useState([]);
    const params = useParams();
    const [answer, setAnswer] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `http://185.84.162.160:8080/api/v1/answers/143?taskId=${params.id}`
                );
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const result = await response.json();
                setAnswer(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [params?.id]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `http://185.84.162.160:8080/api/v1/tasks/${params.id}`
                );
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const result = await response.json();
                setTaskInfo(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [params.id]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `http://185.84.162.160:8080/api/v1/tasks/users/143`
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
        <div className="pt-[42px] px-8">
            <Link to="/tasks" className="flex items-center gap-2.5">
                <img src="../images/backarrow.svg" alt="back-arrow-icon" />
                <p>К заданиям</p>
            </Link>
            <TaskInfoWidget
                id={taskInfo?.id}
                status={taskInfo?.status?.toLowerCase()}
                isDeadline={taskInfo?.isDeadline}
                subject={taskInfo?.subject}
                teacher={taskInfo?.teacher}
                title={taskInfo?.title}
                description={taskInfo?.description}
                expiredAt={taskInfo?.expiredAt}
                files={taskInfo?.files}
                answer={answer}
            />
            <StudentAnswer answer={answer} />
            <div className="bg-[#FFFFFF] rounded-[16px] mt-9 p-8">
                <h3 className="text-[#191C30]/90 text-4xl font-extrabold">
                    Другие задания
                </h3>
                <div className="flex flex-col gap-4 mt-7">
                    {tasks?.map((task) => (
                        <AvailibleTaskWidget
                            id={task.id}
                            status={task.status.toLowerCase()}
                            isDeadline={task.isDeadline}
                            subject={task.subject}
                            teacher={task.teacher}
                            title={task.title}
                            description={task.description}
                            expiredAt={task.expiredAt}
                            key={task.id}
                        />
                    ))}
                    {tasks.length === 0 && (
                        <div className="flex justify-center">
                            <h3 className="text-[24px] text-[#1B1F3B]/65">
                                Заданий нет, можешь отдыхать :)
                            </h3>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
