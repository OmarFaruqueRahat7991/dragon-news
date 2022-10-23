import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FaGoogle, FaGithub, FaFacebook, FaWhatsapp, FaTwitter, FaTwitch } from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import BrandCarousel from "../BrandCarousel/BrandCarousel";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";


const RightSideNav = () => {

  const {providerLogIn} = useContext(AuthContext);


  const googleProvider = new GoogleAuthProvider();

  const githubProvider = new GithubAuthProvider();


  const handleGoogleSignIn = () => {
    providerLogIn(googleProvider)
    .then((result)=>{
      const user = result.user;
      console.log(user);
      })
      .catch(error => console.error(error));
    
  }
  const handleGithubSignIn = () => {
    providerLogIn(githubProvider)
    .then((result)=>{
      const user = result.user;
      console.log(user);
      })
      .catch(error => console.error(error));
    
  }
  return (
    <div>
      <ButtonGroup vertical>
        <Button onClick={handleGoogleSignIn} style={{width: '300px', height: '50px'}} className="mb-3" variant="outline-primary">
          <FaGoogle></FaGoogle> Login With Google
        </Button>
        <Button onClick={handleGithubSignIn} style={{width: '300px', height: '50px'}} className="mb-3" variant="outline-dark">
          <FaGithub></FaGithub> Login With Github
        </Button>
      </ButtonGroup>
      <div>
        <h5>Find Us On</h5>
        <ListGroup>
          <ListGroup.Item style={{width: '300px', height: '50px'}} className="mb-3"><FaFacebook/>Facebook</ListGroup.Item>
          <ListGroup.Item style={{width: '300px', height: '50px'}} className="mb-3"><FaTwitter/>Twitter</ListGroup.Item>
          <ListGroup.Item style={{width: '300px', height: '50px'}} className="mb-3"><FaWhatsapp/>Whatsapp</ListGroup.Item>
          <ListGroup.Item style={{width: '300px', height: '50px'}} className="mb-3"><FaTwitch/>Twitch</ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <BrandCarousel></BrandCarousel>
      </div>
    </div>
  );
};

export default RightSideNav;
