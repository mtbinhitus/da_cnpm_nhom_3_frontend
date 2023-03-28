import { React, useEffect, useState } from "react";
import TopExamList from "../HomepageComponent/TopExamList";
import SearchListContent from "./SearchListContent";
import TabContent from "./TabContent";

import { Pagination } from "@mui/material";
import { getListExam } from "../../services/ExamService";
function ListContent() {
    const [exams, setExams] = useState();
    const accessToken = localStorage.getItem("token");


    const [page, setPage] = useState(0);
    const handleChange = (event, value) => {
        console.log(value);
        setPage(value - 1);
    };

    useEffect(() => {
        getListExam(page).then((res) => {
            setExams(res.body);
        });
    }, [page]);

    if (exams === undefined) return <p>Loading...</p>;
    return (
        <>
            <div>
                <div style={{ backgroundColor: "#f8f9fa", paddingTop: "60px" }}>
                    <SearchListContent />
                    <TabContent />
                </div>
                <div className="pt-5">
                    <TopExamList exams={exams.data} />
                </div>
                <div className="mt-5 d-flex justify-content-center">
                    <Pagination count={exams.totalPage} page={page + 1} onChange={handleChange} />
                </div>
            </div>
        </>
    );
}

export default ListContent;
