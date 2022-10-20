import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FaGoogle, FaGithub, FaFacebook, FaWhatsapp, FaTwitter, FaTwitch } from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import BrandCarousel from "../BrandCarousel/BrandCarousel";


const RightSideNav = () => {
  return (
    <div>
      <ButtonGroup vertical>
        <Button className="mb-3" variant="outline-primary">
          <FaGoogle></FaGoogle> Login With Google
        </Button>
        <Button className="mb-3" variant="outline-dark">
          <FaGithub></FaGithub> Login With Github
        </Button>
      </ButtonGroup>
      <div>
        <h5>Find Us On</h5>
        <ListGroup>
          <ListGroup.Item className="mb-3"><FaFacebook/>Facebook</ListGroup.Item>
          <ListGroup.Item className="mb-3"><FaTwitter/>Twitter</ListGroup.Item>
          <ListGroup.Item className="mb-3"><FaWhatsapp/>Whatsapp</ListGroup.Item>
          <ListGroup.Item className="mb-3"><FaTwitch/>Twitch</ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <BrandCarousel></BrandCarousel>
      </div>
    </div>
  );
};

export default RightSideNav;
