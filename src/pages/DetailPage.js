import React from "react";
import { Grid, Card } from "@mui/material";
import DetailContent from "../components/DetailComponent/DetailContent";
import { Container } from "@mui/system";

export default function DetailPage() {
    const numberOfParts = 7;
    return (
        <>
            <Grid style={{ justifyContent: "center" }} container>
                <Grid item m={2} xs={12}>
                    <div style={{ width: "100" }}>
                        <DetailContent numberOfParts = {numberOfParts} exam={data} />
                    </div>
                </Grid>
            </Grid>
        </>
    );
}

// Data ảo
const data = {
    examName: "ETS TOEIC 2022 Test 1",
    examCol: "TS TOEIC 2022",
    listPart: [
        {
            partNumber: 1,
            listQuestion: [
                {
                    questionNumber: 1,
                    questionText: "",
                    imgUrl: "https://study4.com/media/tez_media1/img/ets_toeic_2022_test_1_1.png",
                    listOption: [
                        {
                            optionNumber: 1,
                            textOption: "A."
                        },
                        {
                            optionNumber: 2,
                            textOption: "B."
                        },
                        {
                            optionNumber: 3,
                            textOption: "C."
                        },
                        {
                            optionNumber: 4,
                            textOption: "D."
                        }
                    ]
                },
                {
                    questionNumber: 2,
                    questionText: "",
                    imgUrl: "https://study4.com/media/tez_media1/img/ets_toeic_2022_test_1_2.png",
                    listOption: [
                        {
                            optionNumber: 1,
                            textOption: "A."
                        },
                        {
                            optionNumber: 2,
                            textOption: "B."
                        },
                        {
                            optionNumber: 3,
                            textOption: "C."
                        },
                        {
                            optionNumber: 4,
                            textOption: "D."
                        }
                    ]
                },
                {
                    questionNumber: 3,
                    questionText: "",
                    imgUrl: "https://study4.com/media/tez_media1/img/ets_toeic_2022_test_1_3.png",
                    listOption: [
                        {
                            optionNumber: 1,
                            textOption: "A."
                        },
                        {
                            optionNumber: 2,
                            textOption: "B."
                        },
                        {
                            optionNumber: 3,
                            textOption: "C."
                        },
                        {
                            optionNumber: 4,
                            textOption: "D."
                        }
                    ]
                },
                {
                    questionNumber: 4,
                    questionText: "",
                    imgUrl: "https://study4.com/media/tez_media1/img/ets_toeic_2022_test_1_4.png",
                    listOption: [
                        {
                            optionNumber: 1,
                            textOption: "A."
                        },
                        {
                            optionNumber: 2,
                            textOption: "B."
                        },
                        {
                            optionNumber: 3,
                            textOption: "C."
                        },
                        {
                            optionNumber: 4,
                            textOption: "D."
                        }
                    ]
                },
                {
                    questionNumber: 5,
                    questionText: "",
                    imgUrl: "https://study4.com/media/tez_media1/img/ets_toeic_2022_test_1_5.png",
                    listOption: [
                        {
                            optionNumber: 1,
                            textOption: "A."
                        },
                        {
                            optionNumber: 2,
                            textOption: "B."
                        },
                        {
                            optionNumber: 3,
                            textOption: "C."
                        },
                        {
                            optionNumber: 4,
                            textOption: "D."
                        }
                    ]
                },
                {
                    questionNumber: 6,
                    questionText: "",
                    imgUrl: "https://study4.com/media/tez_media1/img/ets_toeic_2022_test_1_6.png",
                    listOption: [
                        {
                            optionNumber: 1,
                            textOption: "A."
                        },
                        {
                            optionNumber: 2,
                            textOption: "B."
                        },
                        {
                            optionNumber: 3,
                            textOption: "C."
                        },
                        {
                            optionNumber: 4,
                            textOption: "D."
                        }
                    ]
                }
            ],
        },
        {
            partNumber: 2,
            listQuestion: [
                {
                    questionNumber: 7,
                    imgUrl: "",
                    questionText: "",
                    listOption: [
                        {
                            optionNumber: 1,
                            textOption: "A."
                        },
                        {
                            optionNumber: 2,
                            textOption: "B."
                        },
                        {
                            optionNumber: 3,
                            textOption: "C."
                        },
                        {
                            optionNumber: 4,
                            textOption: "D."
                        }
                    ]
                },
                {
                    questionNumber: 8,
                    imgUrl: "",
                    questionText: "",
                    listOption: [
                        {
                            optionNumber: 1,
                            textOption: "A."
                        },
                        {
                            optionNumber: 2,
                            textOption: "B."
                        },
                        {
                            optionNumber: 3,
                            textOption: "C."
                        },
                        {
                            optionNumber: 4,
                            textOption: "D."
                        }
                    ]
                },
                {
                    questionNumber: 9,
                    imgUrl: "",
                    questionText: "",
                    listOption: [
                        {
                            optionNumber: 1,
                            textOption: "A."
                        },
                        {
                            optionNumber: 2,
                            textOption: "B."
                        },
                        {
                            optionNumber: 3,
                            textOption: "C."
                        },
                        {
                            optionNumber: 4,
                            textOption: "D."
                        }
                    ]
                },
                {
                    questionNumber: 10,
                    imgUrl: "",
                    questionText: "",
                    listOption: [
                        {
                            optionNumber: 1,
                            textOption: "A."
                        },
                        {
                            optionNumber: 2,
                            textOption: "B."
                        },
                        {
                            optionNumber: 3,
                            textOption: "C."
                        },
                        {
                            optionNumber: 4,
                            textOption: "D."
                        }
                    ]
                },
                {
                    questionNumber: 11,
                    imgUrl: "",
                    questionText: "",
                    listOption: [
                        {
                            optionNumber: 1,
                            textOption: "A."
                        },
                        {
                            optionNumber: 2,
                            textOption: "B."
                        },
                        {
                            optionNumber: 3,
                            textOption: "C."
                        },
                        {
                            optionNumber: 4,
                            textOption: "D."
                        }
                    ]
                },
                {
                    questionNumber: 12,
                    imgUrl: "",
                    questionText: "",
                    listOption: [
                        {
                            optionNumber: 1,
                            textOption: "A."
                        },
                        {
                            optionNumber: 2,
                            textOption: "B."
                        },
                        {
                            optionNumber: 3,
                            textOption: "C."
                        },
                        {
                            optionNumber: 4,
                            textOption: "D."
                        }
                    ]
                },
                {
                    questionNumber: 13,
                    imgUrl: "",
                    questionText: "",
                    listOption: [
                        {
                            optionNumber: 1,
                            textOption: "A."
                        },
                        {
                            optionNumber: 2,
                            textOption: "B."
                        },
                        {
                            optionNumber: 3,
                            textOption: "C."
                        },
                        {
                            optionNumber: 4,
                            textOption: "D."
                        }
                    ]
                },
                {
                    questionNumber: 14,
                    imgUrl: "",
                    questionText: "",
                    listOption: [
                        {
                            optionNumber: 1,
                            textOption: "A."
                        },
                        {
                            optionNumber: 2,
                            textOption: "B."
                        },
                        {
                            optionNumber: 3,
                            textOption: "C."
                        },
                        {
                            optionNumber: 4,
                            textOption: "D."
                        }
                    ]
                },
                {
                    questionNumber: 15,
                    imgUrl: "",
                    questionText: "",
                    listOption: [
                        {
                            optionNumber: 1,
                            textOption: "A."
                        },
                        {
                            optionNumber: 2,
                            textOption: "B."
                        },
                        {
                            optionNumber: 3,
                            textOption: "C."
                        },
                        {
                            optionNumber: 4,
                            textOption: "D."
                        }
                    ]
                },
                {
                    questionNumber: 16,
                    imgUrl: "",
                    questionText: "",
                    listOption: [
                        {
                            optionNumber: 1,
                            textOption: "A."
                        },
                        {
                            optionNumber: 2,
                            textOption: "B."
                        },
                        {
                            optionNumber: 3,
                            textOption: "C."
                        },
                        {
                            optionNumber: 4,
                            textOption: "D."
                        }
                    ]
                },
                {
                    questionNumber: 17,
                    imgUrl: "",
                    questionText: "",
                    listOption: [
                        {
                            optionNumber: 1,
                            textOption: "A."
                        },
                        {
                            optionNumber: 2,
                            textOption: "B."
                        },
                        {
                            optionNumber: 3,
                            textOption: "C."
                        },
                        {
                            optionNumber: 4,
                            textOption: "D."
                        }
                    ]
                },
                {
                    questionNumber: 18,
                    imgUrl: "",
                    questionText: "",
                    listOption: [
                        {
                            optionNumber: 1,
                            textOption: "A."
                        },
                        {
                            optionNumber: 2,
                            textOption: "B."
                        },
                        {
                            optionNumber: 3,
                            textOption: "C."
                        },
                        {
                            optionNumber: 4,
                            textOption: "D."
                        }
                    ]
                },
                {
                    questionNumber: 19,
                    imgUrl: "",
                    questionText: "",
                    listOption: [
                        {
                            optionNumber: 1,
                            textOption: "A."
                        },
                        {
                            optionNumber: 2,
                            textOption: "B."
                        },
                        {
                            optionNumber: 3,
                            textOption: "C."
                        },
                        {
                            optionNumber: 4,
                            textOption: "D."
                        }
                    ]
                },
                {
                    questionNumber: 20,
                    imgUrl: "",
                    questionText: "",
                    listOption: [
                        {
                            optionNumber: 1,
                            textOption: "A."
                        },
                        {
                            optionNumber: 2,
                            textOption: "B."
                        },
                        {
                            optionNumber: 3,
                            textOption: "C."
                        },
                        {
                            optionNumber: 4,
                            textOption: "D."
                        }
                    ]
                },
                {
                    questionNumber: 21,
                    imgUrl: "",
                    questionText: "",
                    listOption: [
                        {
                            optionNumber: 1,
                            textOption: "A."
                        },
                        {
                            optionNumber: 2,
                            textOption: "B."
                        },
                        {
                            optionNumber: 3,
                            textOption: "C."
                        },
                        {
                            optionNumber: 4,
                            textOption: "D."
                        }
                    ]
                },
                {
                    questionNumber: 22,
                    imgUrl: "",
                    questionText: "",
                    listOption: [
                        {
                            optionNumber: 1,
                            textOption: "A."
                        },
                        {
                            optionNumber: 2,
                            textOption: "B."
                        },
                        {
                            optionNumber: 3,
                            textOption: "C."
                        },
                        {
                            optionNumber: 4,
                            textOption: "D."
                        }
                    ]
                },
                {
                    questionNumber: 23,
                    imgUrl: "",
                    questionText: "",
                    listOption: [
                        {
                            optionNumber: 1,
                            textOption: "A."
                        },
                        {
                            optionNumber: 2,
                            textOption: "B."
                        },
                        {
                            optionNumber: 3,
                            textOption: "C."
                        },
                        {
                            optionNumber: 4,
                            textOption: "D."
                        }
                    ]
                },
                {
                    questionNumber: 24,
                    imgUrl: "",
                    questionText: "",
                    listOption: [
                        {
                            optionNumber: 1,
                            textOption: "A."
                        },
                        {
                            optionNumber: 2,
                            textOption: "B."
                        },
                        {
                            optionNumber: 3,
                            textOption: "C."
                        },
                        {
                            optionNumber: 4,
                            textOption: "D."
                        }
                    ]
                },
                {
                    questionNumber: 25,
                    imgUrl: "",
                    questionText: "",
                    listOption: [
                        {
                            optionNumber: 1,
                            textOption: "A."
                        },
                        {
                            optionNumber: 2,
                            textOption: "B."
                        },
                        {
                            optionNumber: 3,
                            textOption: "C."
                        },
                        {
                            optionNumber: 4,
                            textOption: "D."
                        }
                    ]
                },
                {
                    questionNumber: 26,
                    imgUrl: "",
                    questionText: "",
                    listOption: [
                        {
                            optionNumber: 1,
                            textOption: "A."
                        },
                        {
                            optionNumber: 2,
                            textOption: "B."
                        },
                        {
                            optionNumber: 3,
                            textOption: "C."
                        },
                        {
                            optionNumber: 4,
                            textOption: "D."
                        }
                    ]
                },
                {
                    questionNumber: 27,
                    imgUrl: "",
                    questionText: "",
                    listOption: [
                        {
                            optionNumber: 1,
                            textOption: "A."
                        },
                        {
                            optionNumber: 2,
                            textOption: "B."
                        },
                        {
                            optionNumber: 3,
                            textOption: "C."
                        },
                        {
                            optionNumber: 4,
                            textOption: "D."
                        }
                    ]
                },
                {
                    questionNumber: 28,
                    imgUrl: "",
                    questionText: "",
                    listOption: [
                        {
                            optionNumber: 1,
                            textOption: "A."
                        },
                        {
                            optionNumber: 2,
                            textOption: "B."
                        },
                        {
                            optionNumber: 3,
                            textOption: "C."
                        },
                        {
                            optionNumber: 4,
                            textOption: "D."
                        }
                    ]
                },
                {
                    questionNumber: 29,
                    imgUrl: "",
                    questionText: "",
                    listOption: [
                        {
                            optionNumber: 1,
                            textOption: "A."
                        },
                        {
                            optionNumber: 2,
                            textOption: "B."
                        },
                        {
                            optionNumber: 3,
                            textOption: "C."
                        },
                        {
                            optionNumber: 4,
                            textOption: "D."
                        }
                    ]
                },
                {
                    questionNumber: 30,
                    imgUrl: "",
                    questionText: "",
                    listOption: [
                        {
                            optionNumber: 1,
                            textOption: "A."
                        },
                        {
                            optionNumber: 2,
                            textOption: "B."
                        },
                        {
                            optionNumber: 3,
                            textOption: "C."
                        },
                        {
                            optionNumber: 4,
                            textOption: "D."
                        }
                    ]
                },
                {
                    questionNumber: 31,
                    imgUrl: "",
                    questionText: "",
                    listOption: [
                        {
                            optionNumber: 1,
                            textOption: "A."
                        },
                        {
                            optionNumber: 2,
                            textOption: "B."
                        },
                        {
                            optionNumber: 3,
                            textOption: "C."
                        },
                        {
                            optionNumber: 4,
                            textOption: "D."
                        }
                    ]
                },
            ]
        },
        {  partNumber: 3,
            listQuestion: [
                {
                    questionNumber: 32,
                    imgUrl: "",
                    questionText: "What is the woman preparing for?",
                    listOption: [
                        {
                            optionNumber: 1,
                            textOption: "A. A move to a new a city"
                        },
                        {
                            optionNumber: 2,
                            textOption: "B. A business trip"
                        },
                        {
                            optionNumber: 3,
                            textOption: "C. A building tour"
                        },
                        {
                            optionNumber: 4,
                            textOption: "D. A meeting with visiting colleagues"
                        }
                    ]
                },
            ]
        },
        // { partNumber: 4,
        //     listQuestion: []},
        // { partNumber: 5,
        //     listQuestion: []},
        // { partNumber: 6,
        //     listQuestion: []},
        // { partNumber: 7,
        //     listQuestionF: []}
    ]
};
