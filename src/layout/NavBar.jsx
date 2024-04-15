import navLogo from '../assets/nav-logo.svg';
import navGirlImg from '../assets/nav-girl.svg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='nav-wrapper border-bottom'>
      <Navbar expand='lg' className='container  '>
        <Container fluid>
          <h2>
            <Link to='/' className='text-decoration-none nav-header'>
              <img src={navLogo} alt='na-logo' /> TaskDuty{' '}
            </Link>
          </h2>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='me-auto my-2 my-lg-0'
              style={{ maxHeight: '100px' }}
              navbarScroll
            ></Nav>

            <div className='d-lg-flex align-items-center gap-5'>
              <Link to='/newtasks' className='text-decoration-none text-dark'>
                <h4> New Task </h4>
              </Link>
              <Link to='/alltasks' className='text-decoration-none text-dark'>
                <h4> All Task </h4>
              </Link>
              <Link to='/' className='text-decoration-none'>
                <img src={navGirlImg} alt='na-logo' />{' '}
              </Link>
            </div>

            <Link className='text-decoration-none text-dark d-none d-lg-block'></Link>

            <>
              <section className='d-flex gap-5 align-items-center'>
                <Link className='text-decoration-none text-dark d-none d-lg-block'></Link>
              </section>
            </>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
