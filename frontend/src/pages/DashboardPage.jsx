import ReactDatePicker from 'react-datepicker';
import DashboardTasksLayout from '../layouts/DashboardTasksLayout.jsx';
import DeadlineLayout from '../layouts/DeadlineLayout.jsx';

export default function DashboardPage() {
    return (
        <div className="max-w-screen overflow-y-auto max-h-screen overflow-x-hidden no-scrollbar pt-8">
            <DeadlineLayout />
            <DashboardTasksLayout />
            {/* <ReactDatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                customInput={<ExampleCustomInput />}
            /> */}
        </div>
    );
}
