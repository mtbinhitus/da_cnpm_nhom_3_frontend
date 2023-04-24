import styled from "@emotion/styled";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const AnalysisTable = ({ data }) => {
    const MyColName = styled(TableCell)({
        fontSize: "16px",
        fontWeight: "bold",
    });
    const MyTableCell = styled(TableCell)({
        fontSize: "16px",
    });
    const tempDate = [
        {
            id: 1,
            part: "part 1",
            name: "Tranh tả người",
            correct: 4,
            inCorrrect: 3,
            skipped: 5,
        },
        {
            id: 2,
            part: "part 1",
            name: "Tranh tả vật",
            correct: 4,
            inCorrrect: 3,
            skipped: 5,
        },
    ];

    return (
        <>
            <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table" striped>
                    <TableHead>
                        <TableRow>
                            <MyColName>Phân loại câu hỏi</MyColName>
                            <MyColName align="center">Số câu đúng</MyColName>
                            <MyColName align="center">Số câu sai</MyColName>
                            <MyColName align="center">Số câu bỏ qua</MyColName>
                            <MyColName align="center">Danh sách câu hỏi</MyColName>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tempDate.map((row) => (
                            <TableRow key={row.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                <MyTableCell component="th" scope="row">
                                    [{row.part}] {row.name}
                                </MyTableCell>
                                <MyTableCell align="center">{row.correct}</MyTableCell>
                                <MyTableCell align="center">{row.inCorrrect}</MyTableCell>
                                <MyTableCell align="center">{row.skipped}</MyTableCell>
                                <MyTableCell align="center"></MyTableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};
export default AnalysisTable;
