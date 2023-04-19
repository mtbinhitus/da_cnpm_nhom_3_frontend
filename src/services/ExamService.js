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

export async function getCollections() {
    const response = await request
        .get("/collection" , {})
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            return error;
        });
    return response;
}
export async function createCollection(name) {
    return await request.post(
        "/collection",
        {
            name: name,
        },
        {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        }
    );
}
export async function createExam(id,name) {
    return await request.post(
        "/exam",
        {
            collectionId:id,
            name: name,
            questionList: []
        },
        {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        }
    );
}


