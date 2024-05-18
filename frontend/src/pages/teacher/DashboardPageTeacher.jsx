import DashboardTasksLayoutTeacher from '../../layouts/teacher/DashboardTasksLayoutTeacher.jsx';

export default function DashboardPageTeacher() {
    return (
        <div className="max-w-screen overflow-y-auto max-h-screen overflow-x-hidden no-scrollbar pt-8">
            {/* <DeadlineLayout /> */}
            <DashboardTasksLayoutTeacher />
            {/* <ReactDatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                customInput={<ExampleCustomInput />}
            /> */}
        </div>
    );
}
