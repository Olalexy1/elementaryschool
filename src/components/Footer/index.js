import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import logo from '../../images/ScholarLogo3.png'

import { FaFacebook, FaTwitter, FaInstagram, FaLocationArrow, FaGoogle, FaPhone, FaPaperPlane } from 'react-icons/fa';

import './style.scss'

const Footer = () => {
    return ( 
        <Container fluid className='footer-container'>
            <Container>
                <Row className='footer py-5'>
                    <Col lg={4} md={6} className='left-footer inner-footer mb-4'>
                        <div className='left-footer-inner'>
                            <h6>About Us</h6>
                        </div>

                        <div>
                            <p>
                            Lorem ipsum dolor sit amet. Quo voluptatem officiis aut totam mollitia sit tempore autem quo architecto laborum qui sequi sint id accusamus tempore.
                            </p>
                            <p>
                            Lorem ipsum dolor sit amet. Quo voluptatem officiis aut totam mollitia sit tempore autem quo architecto laborum qui sequi sint id accusamus tempore.
                            </p>
                        </div> 

                    </Col>
                    <Col lg md={6} className='centre-left-footer inner-footer mb-4'>
                        <h6>Quick Links</h6>
                        <ul>
                            <li><a href="/"> Admission </a></li>
                            <li><a href="/"> Application Form </a></li>
                            <li><a href="/"> Curriculum </a></li>
                            <li><a href="/"> Tuition and Payment </a></li>
                            <li><a href="/"> Blog </a></li>
                            <li><a href="/"> Gallery </a></li>
                            <li><a href="/"> See More... </a></li>
                        </ul>
                    </Col>
                    <Col lg md={6} className='right-footer inner-footer mb-4'>
                        <h6>Contact Us</h6>
                        <ul>
                            <li><FaLocationArrow className='icon'/> 8, Cole street, Lawanson, Surulere, Lagos</li>
                            <li><FaPhone className='icon'/> 07053755127 </li>
                            <li><FaPaperPlane className='icon'/> info@scholarselementaryschool.com</li>
                            
                        </ul>
                        <h6>Social Media</h6>

                        <div className='social-media-container mt-3'>
                            <a href=""> <FaFacebook className='sm-icon'/> </a>
                            <a href=""> <FaInstagram className='sm-icon'/> </a>
                            <a href=""> <FaTwitter className='sm-icon'/> </a> 
                            <a href=""> <FaGoogle className='sm-icon'/> </a>  
                        </div> 
                    </Col>
                </Row>
            </Container>

        </Container>
     );
}
 
export default Footer;