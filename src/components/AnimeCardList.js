import React, { useState, useEffect } from "react";
import axios from "axios";
import Trio from "../assets/img/trio.jpg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";

const AnimeCardList = () => {
  const baseUrl = "https://api.jikan.moe/v3";
  const [animelist, setAnimelist] = useState("");
  const [topanime, setTopanime] = useState([]);

  var config = {
    method: "get",
    url: baseUrl + "/top/anime/1/bypopularity",
    headers: {
      Accept: "application/json",
    },
  };

  useEffect(() => {
    axios(config)
      .then((res) => {
        console.log(res.data.top);
        setTopanime(res.data.top);
      })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
      });
  }, []);

  return (
    <div className="card-list">
      <Row xs={1} md={3}>
        {topanime.map((data) => {
          if (data.rank < 100) {
            return (
              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={data.image_url} />
                  <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          }
        })}
      </Row>
    </div>
  );
};

export default AnimeCardList;
