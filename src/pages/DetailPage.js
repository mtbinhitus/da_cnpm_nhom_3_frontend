import React, { useState, useEffect } from "react";
import { Grid, Card } from "@mui/material";
import DetailContent from "../components/DetailComponent-v2/DetailContent";
import { Container } from "@mui/system";
import { useParams, useNavigate } from "react-router-dom";
import {
    getExamById,
} from "../services/ExamService";
  
export default function DetailPage() {
    const id = useParams();
    const [detailexam, setDetailexam] = useState();

    // useEffect(() => {
    //     getExamById(id?.examId).then((res) => {
    //         setDetailexam(res.body);
    //         console.log("DetailPage")
    //         console.log(res.body)
    //     });
    // }, []);

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
                }
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
                {
                    questionNumber: 33,
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
                {
                    questionNumber: 34,
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
        { partNumber: 4,
            listQuestion: [
                {
                    questionNumber: 71,
                    imgUrl: "",
                    questionText: "What kind of business is the speaker most likely calling?",
                    listOption: [
                        {
                            optionNumber: 1,
                            textOption: "A. A hair salon"
                        },
                        {
                            optionNumber: 2,
                            textOption: "B. An insurance company"
                        },
                        {
                            optionNumber: 3,
                            textOption: "C. A car dealership"
                        },
                        {
                            optionNumber: 4,
                            textOption: "D. An eye doctor's office"
                        }
                    ]
                },
            ]},
        { partNumber: 5,
            listQuestion: [
                {
                    questionNumber: 101,
                    imgUrl: "",
                    questionText: "Mougey Fine Gifts is known for its large range of _____ goods.",
                    listOption: [
                        {
                            optionNumber: 1,
                            textOption: "A. regional"
                        },
                        {
                            optionNumber: 2,
                            textOption: "B. regionally"
                        },
                        {
                            optionNumber: 3,
                            textOption: "C. region"
                        },
                        {
                            optionNumber: 4,
                            textOption: "D. regions"
                        }
                    ]
                },
            ]},
        { partNumber: 6,
            listQuestion: [
                {
                    questionNumber: 131,
                    imgUrl: "",
                    questionText: "",
                    listOption: [
                        {
                            optionNumber: 1,
                            textOption: "A. serve"
                        },
                        {
                            optionNumber: 2,
                            textOption: "B. served"
                        },
                        {
                            optionNumber: 3,
                            textOption: "C. server"
                        },
                        {
                            optionNumber: 4,
                            textOption: "D. service"
                        }
                    ]
                },
                {
                    questionNumber: 132,
                    imgUrl: "",
                    questionText: "",
                    listOption: [
                        {
                            optionNumber: 1,
                            textOption: "A. serve"
                        },
                        {
                            optionNumber: 2,
                            textOption: "B. served"
                        },
                        {
                            optionNumber: 3,
                            textOption: "C. server"
                        },
                        {
                            optionNumber: 4,
                            textOption: "D. service"
                        }
                    ]
                },
                {
                    questionNumber: 133,
                    imgUrl: "",
                    questionText: "",
                    listOption: [
                        {
                            optionNumber: 1,
                            textOption: "A. serve"
                        },
                        {
                            optionNumber: 2,
                            textOption: "B. served"
                        },
                        {
                            optionNumber: 3,
                            textOption: "C. server"
                        },
                        {
                            optionNumber: 4,
                            textOption: "D. service"
                        }
                    ]
                },
                {
                    questionNumber: 134,
                    imgUrl: "",
                    questionText: "",
                    listOption: [
                        {
                            optionNumber: 1,
                            textOption: "A. serve"
                        },
                        {
                            optionNumber: 2,
                            textOption: "B. served"
                        },
                        {
                            optionNumber: 3,
                            textOption: "C. server"
                        },
                        {
                            optionNumber: 4,
                            textOption: "D. service"
                        }
                    ]
                },
            ]},
        { partNumber: 7,
            listQuestionF: [
                {
                    questionNumber: 147,
                    imgUrl: "",
                    questionText: "Mougey Fine Gifts is known for its large range of _____ goods.",
                    listOption: [
                        {
                            optionNumber: 1,
                            textOption: "A. regional"
                        },
                        {
                            optionNumber: 2,
                            textOption: "B. regionally"
                        },
                        {
                            optionNumber: 3,
                            textOption: "C. region"
                        },
                        {
                            optionNumber: 4,
                            textOption: "D. regions"
                        }
                    ]
                },
                {
                    questionNumber: 148,
                    imgUrl: "",
                    questionText: "Mougey Fine Gifts is known for its large range of _____ goods.",
                    listOption: [
                        {
                            optionNumber: 1,
                            textOption: "A. regional"
                        },
                        {
                            optionNumber: 2,
                            textOption: "B. regionally"
                        },
                        {
                            optionNumber: 3,
                            textOption: "C. region"
                        },
                        {
                            optionNumber: 4,
                            textOption: "D. regions"
                        }
                    ]
                },
                {
                    questionNumber: 149,
                    imgUrl: "",
                    questionText: "Mougey Fine Gifts is known for its large range of _____ goods.",
                    listOption: [
                        {
                            optionNumber: 1,
                            textOption: "A. regional"
                        },
                        {
                            optionNumber: 2,
                            textOption: "B. regionally"
                        },
                        {
                            optionNumber: 3,
                            textOption: "C. region"
                        },
                        {
                            optionNumber: 4,
                            textOption: "D. regions"
                        }
                    ]
                },
            ]}
    ]
};
