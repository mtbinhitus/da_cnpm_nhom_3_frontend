import DetailPage from "../pages/DetailPage";
import ExamCreationPage from "../pages/examCreationPage";
import practicePage from "../pages/practicePage";
import TestList from "../pages/TestList";
import TestResult from "../pages/TestResult";
import ManageExam from "../components/examManagement/ManageExam";
import DummyLogin from "../pages/DummyLogin";
const privateRoutes = [
    { path: "/exam-detail/:examId", element: practicePage },
    { path: "/exam-detail/:examId/start", element: DetailPage },
    { path: "/exam-detail/:examId/start", element: DetailPage },
    { path: "/exam-detail/:examId/results/:examResultId", element: TestResult },
    { path: "/exams", element: TestList },
    { path: "/admin/exams", element: ManageExam },
    { path: "/admin/exams/:examId", element: ExamCreationPage },
    { path: "/dummy-login", element: DummyLogin },
];

export { privateRoutes };
