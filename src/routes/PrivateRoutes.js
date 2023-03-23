import DetailPage from "../pages/DetailPage";
import practicePage from "../pages/practicePage";
import TestList from "../pages/TestList";
import TestResult from "../pages/TestResult";
import LoginPage from "../pages/LoginPage";

const privateRoutes = [
    { path: "/exam-detail/:examId", element: practicePage },
    { path: "/exam-detail/:examId/start", element: DetailPage },
    { path: "/exam-detail/:examId/start", element: DetailPage },
    { path: "/exam-detail/:examId/results/:examResultId", element: TestResult },
    { path: "/exams", element: TestList },
    { path: "/login", element: LoginPage },
];

export { privateRoutes };
