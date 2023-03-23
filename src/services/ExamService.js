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
export async function getListExam(token) {
    const response = await request
        .get("/exam/top", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            return error;
        });
    return response;
}
