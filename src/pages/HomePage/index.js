import Container from 'react-bootstrap/Container';
import Banner from '../../components/Banner';
import Slickcarousel from '../../components/Slick-carousel';
import Partners from '../../components/Partners';


const Homepage = () => {
    return ( 
        <Container fluid className='px-0 mx-0'>
            <Banner/>
            <Slickcarousel/>
            <Partners/>
        </Container>
     );
}
 
export default Homepage;