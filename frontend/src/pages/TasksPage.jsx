import { Link, useNavigate } from 'react-router-dom';
import DashboardTasksLayout from '../layouts/DashboardTasksLayout.jsx';

export default function TasksPage() {
    return (
        <div className="pt-[42px]">
            <Link
                to="/dashboard"
                className="flex items-center gap-2.5 px-11 mb-2.5"
            >
                <img src="../images/backarrow.svg" alt="back-arrow-icon" />
                <p>На главную</p>
            </Link>

            <DashboardTasksLayout />
        </div>
    );
}
