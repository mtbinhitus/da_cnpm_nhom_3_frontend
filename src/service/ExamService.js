import axios from "axios"
import request from '../utils/request'

export async function getExamById(id) {
    const response = await request
      .get("/exam/detail/" + id , {})
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        return error;
      });
    return response;
}
export async function getListExam() {
    const response = await request
      .get("/exam/top" , {})
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        return error;
      });
    return response;
}