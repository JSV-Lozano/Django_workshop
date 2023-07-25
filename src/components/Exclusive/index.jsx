import React, { useState, useEffect, useRef } from "react";
import { useGetCardsData } from "../../hooks/useGetCardsData";
import axios from "axios";
import Star from "../../assets/star1.png";
import Map from "../../assets/Vector2.png";
import Prev from "../../assets/flecha1.png";
import Next from "../../assets/flecha2.png";
import { Carousel, Row, Col, Card, Button } from "react-bootstrap";
import "./Exclusive.css";

function Exclusive() {
  const ref = useRef();
  const { fetchData, data } = useGetCardsData();

  useEffect(() => {
    fetchData();
  }, []);
  const onPrevClick = () => {
    ref.current.prev();
  };
  const onNextClick = () => {
    ref.current.next();
  };

  const generateCarousel = () => {
    const carousels = [];
    for (let i = 0; i < data.length; i += 3) {
      const items = data.slice(i, i + 3);
      const carousel = (
        <Carousel.Item key={i}>
          <Row>
            {items.map((item) => (
              <Col
                md={carousels.length > 1 ? 1 : 4}
                key={item.id}
              >
                <Card className="border-0">
                  <Card.Img
                    className="rounded-3"
                    variant="top"
                    src={item.image}
                    alt="Card image"
                  />
                  <Card.Body>
                    <div className="d-flex align-items-center justify-content-between">
                      <Card.Title className="fs-3">{item.city}</Card.Title>
                      <div className="d-flex align-items-center container_image">
                        <img
                          src={Star}
                          alt="estrella"
                        />
                        <Card.Text className="ml-1">
                          {item.qualification}
                        </Card.Text>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between container_price">
                      <div className="d-flex align-items-center">
                        <img
                          src={Map}
                          alt="icon map"
                        />
                        <Card.Text className="ml-1">{item.country}</Card.Text>
                      </div>
                      <Card.Text className="price_desc">
                        ${item.price}
                      </Card.Text>
                      <Card.Text className="price_org">
                        ${item.discount}
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      );
      carousels.push(carousel);
    }
    return carousels;
  };
  return (
    <section
      id="Destination"
      className="container-fluid d-flex flex-column align-items-center text-center"
    >
      <div className="container-fluid d-flex flex-column align-items-center exclusive-Container">
        <h2>
          Exclusive <span>deals &amp; discounts</span>
        </h2>
        <p className="text-center">
          Discover our fantastic early booking discounts &amp; start planning
          your journey.
        </p>
      </div>
      <Carousel
        ref={ref || null}
        interval={null}
        wrap={false}
        indicators={false}
      >
        {generateCarousel()}
      </Carousel>
      <div className="d-flex justify-content-center w-25">
        <button
          className="border-0"
          onClick={onPrevClick}
        >
          <img
            src={Prev}
            alt="Previous"
          />
        </button>
        <button
          className="border-0"
          onClick={onNextClick}
        >
          <img
            src={Next}
            alt="Next"
          />
        </button>
      </div>
    </section>
  );
}

export default Exclusive;
