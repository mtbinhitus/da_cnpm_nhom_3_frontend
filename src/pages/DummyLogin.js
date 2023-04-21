import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function DummyLogin() {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/exams");
    }, []);
    return (
        <>
            <div></div>
        </>
    );
}
