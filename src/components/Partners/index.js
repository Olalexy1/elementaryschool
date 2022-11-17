import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Marquee from 'react-fast-marquee'

import cambridge from '../../images/cambridge.png';

import './style.scss';

const Partners = () => {
    return (
        <Container fluid className='banner px-0'>
            <Marquee pauseOnHover speed={50} className='marquee'>
                <div><img src={cambridge} alt="/" className='hover:scale-110 ease-in duration-200' /></div>
            </Marquee>
        </Container>
    );
}
 
export default Partners;