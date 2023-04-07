const QuestionModel = (id, a, b, c, d, correct, explain, questionContent) => {
    return {
        id: id,
        options: {
            a: a,
            b: b,
            c: c,
            d: d,
        },
        correctOption: correct,
        explain: explain,
        material: "",
        questionContent: questionContent,
    };
};

export default QuestionModel;
