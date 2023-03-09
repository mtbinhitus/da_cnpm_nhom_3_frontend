import { Grid } from "@mui/material";
import { Button, Card } from "@mui/material";
import "../../../src/style/practicePage.css"
const HeaderContaint = () => {
    
    return (
        <>
           <Button style={{ backgroundColor: '#eee', color: 'black', borderRadius: '20px' }} size="small" variant="contained">
                #TOEIC
            </Button>
            <h2 style={{ fontSize: "1.6rem" }}>ETS TOEIC 2022 Test 2</h2>
            <ul className="mt-3" style={{ paddingLeft: '0' }}>
                <Button style={{ backgroundColor: '#e8f2ff', color: '#35509a', borderRadius: '20px', marginRight: ".4rem", fontWeight: 'bold' }} size="small" variant="contained">
                    Thông tin đề thi
                </Button>
                <Button style={{ backgroundColor: '#f8f9fa', color: 'black', borderRadius: '20px', marginLeft: "0.5rem", fontWeight: 'bold', boderColor: 'white'}} size="small" variant="outlined">
                    Đáp án/transcript
                </Button>
            </ul>
            <div className="practice-test" style={{fontWeight:"bold"}}>
                <span>Bộ đề thi: ETS TOEIC 2022</span>
            </div>
            <div className="practice-test">
                <span>Thời gian làm bài: 120 phút | 7 phần thi | 200 câu hỏi | 352 bình luận</span>
            </div>
            <div className="practice-test">
                <span>375186 người đã luyện tập đề thi này</span>
            </div>
        </>
    );
};
export default HeaderContaint;