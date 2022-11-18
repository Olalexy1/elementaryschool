import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import NavBar from './components/NavBar';
import Footer from './components/Footer';

import Homepage from './pages/HomePage';
import SubjectPage from './pages/SubjectPage';
import Login from './components/Login';
import Register from './components/Register';
import database from './components/database';

function App() {
  return (
    <Router>
      <Container fluid className='px-0 mx-0'>
        <NavBar/>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
          </Routes>
        <Footer/>
      </Container>
    </Router>
  );
}

export default App;
