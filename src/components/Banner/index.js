import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './style.scss';

const Banner = () => {
    return (
        <Container fluid className='banner px-0'>
            <Col lg={12} className='background-image px-0'>
                <Container>
                    <div className='text-container px-0'>
                        <h3>Scholar's Elementary School</h3>
                        <div className='separator' />
                        <p>
                            Scholar's Elementary School Lorem ipsum dolor sit amet. Quo voluptatem officiis aut totam mollitia sit tempore autem quo architecto laborum qui sequi sint id accusamus tempore. Lorem ipsum dolor sit amet. Quo voluptatem officiis aut totam mollitia sit tempore autem quo architecto laborum qui sequi sint id accusamus tempore.
                        </p>
                    </div>
                </Container>
            </Col>
            <Container className='why-container py-5'>
                <h3>Why Choose Scholar's Elementary?</h3>
                <p>
                    Scholar's Elementary School Lorem ipsum dolor sit amet. Quo voluptatem officiis aut totam mollitia sit tempore autem quo architecto laborum qui sequi sint id accusamus tempore. Lorem ipsum dolor sit amet. Quo voluptatem officiis aut totam mollitia sit tempore autem quo architecto laborum qui sequi sint id accusamus tempore.
                </p>

                <p>
                    Scholar's Elementary School Lorem ipsum dolor sit amet. Quo voluptatem officiis aut totam mollitia sit tempore autem quo architecto laborum qui sequi sint id accusamus tempore. Lorem ipsum dolor sit amet. Quo voluptatem officiis aut totam mollitia sit tempore autem quo architecto laborum qui sequi sint id accusamus tempore.
                </p>
                <button className="cssbuttons-io">
                    <span> Apply Now </span>
                </button>
            </Container>

            <Container className='what-container py-5'>
                <h3>What We Have & How We Do It</h3>
                <ul>
                    <li>Stimulating Learning Environment</li>
                    <p>
                        Scholar's Elementary School Lorem ipsum dolor sit amet. Quo voluptatem officiis aut totam mollitia sit tempore autem quo architecto laborum qui sequi sint id accusamus tempore.
                    </p>
                    <li>Advisory & Guidance</li>
                    <p>
                        Scholar's Elementary School Lorem ipsum dolor sit amet. Quo voluptatem officiis aut totam mollitia sit tempore autem quo architecto laborum qui sequi sint id accusamus tempore.
                    </p>
                    <li>Sporting Facilities</li>
                    <p>
                        Scholar's Elementary School Lorem ipsum dolor sit amet. Quo voluptatem officiis aut totam mollitia sit tempore autem quo architecto laborum qui sequi sint id accusamus tempore. 
                    </p>
                    <li>Specialist Tutors</li>
                    <p>
                        Scholar's Elementary School Lorem ipsum dolor sit amet. Quo voluptatem officiis aut totam mollitia sit tempore autem quo architecto laborum qui sequi sint id accusamus tempore.
                    </p>
                    <li>Day & Boarding Options</li>
                    <p>
                        Scholar's Elementary School Lorem ipsum dolor sit amet. Quo voluptatem officiis aut totam mollitia sit tempore autem quo architecto laborum qui sequi sint id accusamus tempore.
                    </p>
                    <li>International Standard Teaching Practices</li>
                    <p>
                        Scholar's Elementary School Lorem ipsum dolor sit amet. Quo voluptatem officiis aut totam mollitia sit tempore autem quo architecto laborum qui sequi sint id accusamus tempore. 
                    </p>
                </ul>
            </Container>
        </Container>
    )
}

export default Banner;
