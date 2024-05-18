import {
    BrowserRouter,
    Navigate,
    Route,
    Routes,
    useParams,
} from 'react-router-dom';
import AuthPage from './pages/AuthPage.jsx';
import Overlay from './layouts/Overlay.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import TasksPage from './pages/TasksPage.jsx';
import SubjectsPage from './pages/SubjectsPage.jsx';
import MarksPage from './pages/MarksPage.jsx';
import SupportPage from './pages/SupportPage.jsx';
import TaskPage from './pages/TaskPage.jsx';
import DashboardPageTeacher from './pages/teacher/DashboardPageTeacher.jsx';
import CreateTaskPageTeacher from './pages/teacher/CreateTaskPageTeacher.jsx';
import OverlayTeacher from './layouts/teacher/OverlayTeacher.jsx';
import TasksPageTeacher from './pages/teacher/TasksPageTeacher.jsx';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Navigate replace to="auth" />} />
                <Route exact path="auth" element={<AuthPage />} />
                <Route
                    path="dashboard"
                    element={
                        <Overlay>
                            <DashboardPage />
                        </Overlay>
                    }
                />
                <Route
                    path="tasks"
                    element={
                        <Overlay>
                            <TasksPage />
                        </Overlay>
                    }
                />
                <Route
                    path="tasks/:id"
                    element={
                        <Overlay>
                            <TaskPage />
                        </Overlay>
                    }
                />
                <Route
                    path="subjects/*"
                    element={
                        <Overlay>
                            <SubjectsPage />
                        </Overlay>
                    }
                />
                <Route
                    path="marks/*"
                    element={
                        <Overlay>
                            <MarksPage />
                        </Overlay>
                    }
                />
                <Route
                    path="support/*"
                    element={
                        <Overlay>
                            <SupportPage />
                        </Overlay>
                    }
                />
                <Route
                    path="dashboard/teacher"
                    element={
                        <OverlayTeacher>
                            <DashboardPageTeacher />
                        </OverlayTeacher>
                    }
                />
                <Route
                    path="create-task/teacher"
                    element={
                        <OverlayTeacher>
                            <CreateTaskPageTeacher />
                        </OverlayTeacher>
                    }
                />
                <Route
                    path="tasks/teacher"
                    element={
                        <OverlayTeacher>
                            <TasksPageTeacher />
                        </OverlayTeacher>
                    }
                />
                {/* <Route exact path="/dashboard" component={DashboardPage} /> */}
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}
