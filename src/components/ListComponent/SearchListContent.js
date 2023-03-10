import { Box, Button, InputAdornment, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { FormControl } from "react-bootstrap";

function SearchListContent() {
    const [age, setAge] = React.useState("");

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <div className="pb-0" style={{ paddingTop: "1rem" }}>
            <div className="container pb-0">
                <div className="row">
                    <h1>Thư viện đề thi</h1>
                    <br />
                    <div className="row my-4">
                        <div className="col-8">
                            <input
                                type="text"
                                class="form-control"
                                id="exampleFormControlInput1"
                                placeholder="Nhập từ khoá bạn muốn tìm kiếm: tên đề, câu hỏi,..."
                            />
                        </div>
                        <div className="col-4">
                            <select class="form-select form-select-md" aria-label=".form-select-sm example">
                                <option selected>Chọn bộ đề thi</option>
                                <option value="1">ETS TOEIC 2022</option>
                                <option value="2">ETS TOEIC 2021</option>
                                <option value="3">ETS TOEIC 2020</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-3">
                        <Button style={{ width: "100px" }} variant="contained">
                            Tìm kiếm
                        </Button>
                    </div>
                </div>
                <ul></ul>
            </div>
        </div>
    );
}

export default SearchListContent;
