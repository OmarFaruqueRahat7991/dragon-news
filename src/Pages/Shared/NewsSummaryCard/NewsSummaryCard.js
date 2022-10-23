import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image'
import { FaShareAlt , FaRegBookmark, FaStar, FaEye } from "react-icons/fa";

const NewsSummaryCard = ({ news }) => {
  const { _id, title, author, total_view, details, image_url , rating} = news;
  console.log(news);
  return (
    <Card className="mb-5">
      <Card.Header className='d-flex justify-content-between align-items-center'>
        <div className='d-flex'>
            <Image
            className="me-2"
            roundedCircle
            src={author?.img}
            style={{width: '65px' , height: '65px'}}></Image>
            <div className="align-items-center">
                <p className='mb-0'>{author?.name}</p>
                <p>{author?.published_date}</p>
            </div>
        </div>
        <div>
            <FaRegBookmark className='me-1'></FaRegBookmark>
            <FaShareAlt></FaShareAlt>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length > 250 ? 
            <>
              {details.slice(0, 250) + "..."}
              <Link to={`/news/${_id}`}>Read More</Link>
            </>
           : (
            <>{details}</>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between">
        <div className="d-flex align-items-center">
            <FaStar className='me-1' style={{color: "#DAA520"}}></FaStar>
            <span>{rating?.number}</span>
        </div>
        <div className="d-flex align-items-center">
            <FaEye className='me-2' title="Total Views"></FaEye>
            <span>{total_view}</span>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsSummaryCard;
