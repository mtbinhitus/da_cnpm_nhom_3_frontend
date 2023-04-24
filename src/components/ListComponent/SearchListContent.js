import { Button } from '@mui/material';
import React from 'react';

function SearchListContent() {
    return (
        <div className="pb-0" style={{ paddingTop: '1rem' }}>
            <div className="container pb-0">
                <div className="row">
                    <h1>Thư viện đề thi</h1>
                    <br />
                    <div className="row my-4">
                        <div className="col-8">
                            <input
                                type="text"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="Nhập từ khoá bạn muốn tìm kiếm: tên đề, câu hỏi,..."
                            />
                        </div>
                        <div className="col-4">
                            <select className="form-select form-select-md" aria-label=".form-select-sm example">
                                <option selected>Chọn bộ đề thi</option>
                                <option value="1">ETS TOEIC 2022</option>
                                <option value="2">ETS TOEIC 2021</option>
                                <option value="3">ETS TOEIC 2020</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-3">
                        <Button style={{ width: '100px' }} variant="contained">
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
