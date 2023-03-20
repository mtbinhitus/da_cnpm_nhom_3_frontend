import Checkbox from "@mui/material/Checkbox";
import "../../../src/style/practicePage.css";
const ChoicePractice = (props) => {
    console.log("hưhwhw");
    console.log(props.list);

    return (
        <>
            <Checkbox defaultChecked color="default" style={{ margin: 0 }} />
            <span style={{ fontSize: "18px" }}>{props?.name}</span>
            <div className="list-tag">
                {props?.list?.map((data) => (
                    <span className="tag name">#{data.name}</span>
                ))}
            </div>
        </>
    );
};
export default ChoicePractice;
