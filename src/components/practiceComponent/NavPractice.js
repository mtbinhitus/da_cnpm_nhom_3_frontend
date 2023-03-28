import * as React from "react";
import { Button } from "@mui/material";
import "../../../src/style/practicePage.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ChoicePractice from "./ChoicePractice";
import { Link } from "react-router-dom";
const NavPractice = () => {
    const [age, setAge] = React.useState("");
    const examId = 1;
    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const listData = [
        {
            part: {
                name: "Part 1 (6-10 câu hỏi)",
                list: [
                    { name: "[Part 1] Tranh tả người" },
                    { name: "[Part 1] Tranh tả vật" },
                    { name: "[Part 1] Tranh tả cả người cả vật" },
                ],
            },
        },
        {
            part: {
                name: "Part 2 (25 câu hỏi)",
                list: [
                    { name: "[Part 2] Câu hỏi 5W1H - what/ which" },
                    { name: "[Part 2] Câu hỏi 5W1H - who" },
                    { name: "[Part 2] Câu hỏi 5W1H - where" },
                    { name: "[Part 2] Câu hỏi 5W1H - how" },
                    { name: "[Part 2] Câu hỏi 5W1H - how" },
                    { name: "[Part 2] Câu hỏi Yes/ No" },
                    { name: "[Part 2] Câu hỏi lựa chọn" },
                    { name: "[Part 2] Câu hỏi đuôi" },
                ],
            },
        },
        {
            part: {
                name: "Part 3 (39 câu hỏi)",
                list: [
                    { name: "Part 3 (39 câu hỏi)" },
                    { name: "[Part 3] Câu hỏi về thông tin, danh tính người nói" },
                    { name: "[Part 3] Câu hỏi về chi tiết cuộc đối thoại" },
                    { name: "[Part 3] Câu hỏi về chi tiết cuộc đối thoại" },
                    { name: "[Part 3] Câu hỏi kết hợp biểu đồ, bản đồ" },
                    { name: "[Part 3] Câu hỏi về ngụ ý câu nói" },
                    { name: "[Part 3] Nội dung: Company - General Office Work" },
                    { name: "[Part 3] Nội dung: Company - Greetings" },
                    { name: "[Part 3] Nội dung: Company - Business Marketing" },
                    { name: "[Part 3] Nội dung: Company - Events" },
                ],
            },
        },
        {
            part: {
                name: "Part 4 (30 câu hỏi)",
                list: [
                    { name: "[Part 3] Câu hỏi về chi tiết cuộc đối thoạ" },
                    { name: "[Part 3] Câu hỏi về chi tiết cuộc đối thoạ" },
                    { name: "[Part 3] Câu hỏi về chi tiết cuộc đối thoạ" },
                    { name: "[Part 3] Câu hỏi về chi tiết cuộc đối thoạ" },
                    { name: "[Part 3] Câu hỏi kết hợp biểu đồ, bản đồ" },
                    { name: "[Part 3] Câu hỏi về ngụ ý câu nói" },
                    { name: "[Part 3] Nội dung: Company - General Office Work" },
                    { name: "[Part 3] Nội dung: Company - Greetings" },
                    { name: "[Part 3] Nội dung: Company - Business Marketing" },
                    { name: "[Part 3] Nội dung: Company - Events" },
                ],
            },
        },
        {
            part: {
                name: "Part 5 (30 câu hỏi)",
                list: [
                    { name: "Part 5 (30 câu hỏi)" },
                    { name: "[Part 5] Câu hỏi ngữ pháp" },
                    { name: "Part 5] Câu hỏi từ vựng" },
                ],
            },
        },
        {
            part: {
                name: "Part 6 (16 câu hỏi)",
                list: [
                    { name: "[Part 5] Câu hỏi từ vựng" },
                    { name: "[Part 5] Câu hỏi từ vựng" },
                    { name: "[Part 6] Câu hỏi ngữ pháp" },
                    { name: "[Part 6] Câu hỏi từ vựng" },
                    { name: "[Part 6] Hình thức: Thông báo/ văn bản hướng dẫn (Notice/ Announcement Information)" },
                    { name: "[Part 6] Câu hỏi điền câu" },
                    { name: "[Part 6] Hình thức: Thông báo nội bộ (Memo)" },
                ],
            },
        },
        {
            part: {
                name: "Part 7 (54 câu hỏi)",
                list: [
                    { name: "[Part 7] Câu hỏi tìm thông tin: câu hỏi 5W1H" },
                    { name: "[Part 7] Câu hỏi tìm thông tin: câu hỏi 5W1H" },
                    { name: "[Part 7] Hình thức: Chuỗi tin nhắn (Text message)" },
                    { name: "[Part 7] Câu hỏi suy luận: câu hỏi về ngụ ý câu nói" },
                    { name: "[Part 7] Câu hỏi suy luận: câu hỏi 5W1H" },
                    { name: "[Part 7] Câu hỏi suy luận: câu hỏi về ngụ ý câu nói" },
                    { name: "[Part 7] Câu hỏi suy luận: câu hỏi về ngụ ý câu nói" },
                ],
            },
        },
    ];
    return (
        <>
            <div className="alert-success">
                <div className="tab-content" style={{ fontSize: "18px" }}>
                    <span>
                        {" "}
                        Pro tips: Hình thức luyện tập từng phần và chọn mức thời gian phù hợp sẽ giúp bạn tập trung vào
                        giải đúng các câu hỏi thay vì phải chịu áp lực hoàn thành bài thi.
                    </span>
                </div>
            </div>
            <div className="practice-test">
                <span>Chọn phần thi bạn muốn làm</span>
            </div>
            {listData.map((data) => (
                <ChoicePractice name={data.part.name} list={data.part.list} />
            ))}
            <div className="practice-test" style={{ marginTop: "15px" }}>
                <span>Giới hạn thời gian (Để trống để làm bài không giới hạn)</span>
            </div>
            <Box sx={{ minWidth: 120, marginTop: "15px", marginBottom: "10px" }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">-Chọn thời gian-</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="-Chọn thời gian-"
                        onChange={handleChange}
                    >
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={15}>15</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                        <MenuItem value={25}>25</MenuItem>
                        <MenuItem value={35}>35</MenuItem>
                        <MenuItem value={45}>45</MenuItem>
                        <MenuItem value={90}>90</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Link to={`/exam-detail/${examId}/start`} style={{ textDecoration: "none" }}>
                <Button
                    size="small"
                    variant="contained"
                    style={{
                        marginRight: "5px",
                        backgroundColor: "#35509 !important",
                        borderColor: " #35509a",
                        fontSize: "18px",
                        marginTop: "15px",
                    }}
                >
                    LUYỆN TẬP
                </Button>
            </Link>
        </>
    );
};
export default NavPractice;
