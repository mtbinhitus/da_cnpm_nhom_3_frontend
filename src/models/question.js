const QuestionModel = (id, a, b, c, d, correct, explain, questionContent) => {
    return {
        id,
        options: {
            a,
            b,
            c,
            d,
        },
        correctOption: correct,
        explain,
        questionContent,
    };
};

export default QuestionModel;
