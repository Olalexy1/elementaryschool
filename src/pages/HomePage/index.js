import React, { useState, useEffect } from "react";

import userService from "../../services/user.service";

import Container from 'react-bootstrap/Container';
import Banner from '../../components/Banner';
import Slickcarousel from '../../components/Slick-carousel';
import Partners from '../../components/Partners';


const Homepage = () => {
    const [content, setContent] = useState("");

  useEffect(() => {
    userService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

    return ( 
        <Container fluid className='px-0 mx-0'>
            <Banner/>
            <Slickcarousel/>
            <Partners/>
        </Container>
     );
}
 
export default Homepage;