const ExamModel = (id, part1List, part2List, part3List, part4List, part5List, part6List, part7List, audioUrl) => ({
    examId: id,
    part1: part1List,
    part2: part2List,
    part3: part3List,
    part4: part4List,
    part5: part5List,
    part6: part6List,
    part7: part7List,
    size:
        part1List.size +
        part2List.size +
        part3List.size +
        part4List.size +
        part5List.size +
        part6List.size +
        part7List.size,
    createTime: Date.now(),
    audioUrl,
});
export default ExamModel;
