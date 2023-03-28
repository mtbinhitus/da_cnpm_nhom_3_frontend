import axios from "axios";
import request from "../utils/request";

export async function getExamById(id) {
    const response = await request
        .get("/exam/detail/" + id, {})
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            return error;
        });
    return response;
}
export async function getListExam(page) {
    const response = await request
        .get(`/exam/all?page=` + page + "&limit=4", {
            // headers: {
            //     Authorization: `Bearer ${token}`,
            // },
        })
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            return error;
        });
    return response;
}
export async function getTopListExam() {
    const response = await request
        .get(`/exam/top`)
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            return error;
        });
    return response;
}
export async function getTopListExamId(id) {
    const response = await request
        .get(`/exam/detail/` + id)
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            return error;
        });
    return response;
}
