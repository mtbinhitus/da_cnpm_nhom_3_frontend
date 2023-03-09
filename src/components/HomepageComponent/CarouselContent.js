import React from "react";
import { Carousel } from "react-bootstrap";

function CarouselContent() {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block"
                        src="https://easyeducation.vn/wp-content/uploads/2021/03/easy-edu-bi-quyet-luyen-thi-toeic-cho-nguoi-moi-bat-dau.png"
                        alt="First slide"
                        style={{ width: "1200px", height: "500px" }}
                    />
                    <Carousel.Caption className="text-black">
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block"
                        src="https://e4life.vn/wp-content/uploads/2021/08/khoa-hoc-luyen-thi-toeic-online-4Life-English-Center.jpg"
                        alt="Second slide"
                        style={{ width: "1000px", height: "500px" }}
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default CarouselContent;
