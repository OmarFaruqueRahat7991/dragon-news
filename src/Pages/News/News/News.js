import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Image } from "react-bootstrap";
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";

const News = () => {
  const news = useLoaderData();
  const { title, author, details, image_url, rating, category_id , total_view } = news;
  return (
    <Card>
      <Card.Img variant="top" src={image_url} />
      <div className="d-flex justify-content-between align-items-center mt-2 ms-2">
        <div className="d-flex">
          <Image
            className="me-2"
            roundedCircle
            src={author?.img}
            style={{ width: "50px", height: "50px" }}
          ></Image>
          <div className="align-items-center">
            <p className="mb-0">{author?.name}</p>
            <p>{author?.published_date}</p>
          </div>
        </div>

        <div className="d-flex me-2 align-items-center">
        <div className="d-flex align-items-center me-2">
            <FaStar className='me-1' style={{color: "#DAA520"}}></FaStar>
            <span>{rating?.number}</span>
        </div>
        <div className="d-flex align-items-center me-1">
            <FaEye className='me-1' title="Total Views"></FaEye>
            <span>{total_view}</span>
        </div>
          <FaRegBookmark className="me-1"></FaRegBookmark>
          <FaShareAlt></FaShareAlt>
        </div>
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{details}</Card.Text>
        <Link to={`/category/${category_id}`}>
          <Button variant="primary">All Other News In This Category</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default News;
