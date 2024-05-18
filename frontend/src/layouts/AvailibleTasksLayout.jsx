import AvailibleTaskWidget from '../widgets/AvailibleTaskWidget.jsx';

export default function AvailibleTasksLayout({ tasks }) {
    return (
        <div className="flex flex-col gap-4 mt-7">
            {tasks.map((task) => (
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
    );
}
