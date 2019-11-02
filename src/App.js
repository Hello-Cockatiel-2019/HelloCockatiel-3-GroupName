import React, { lazy, Suspense } from 'react';
import { Container, Row, Col, Spinner } from 'reactstrap';
import Darkmode from 'darkmode-js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from './components/Content';
const Nav = lazy(() => import('./components/Nav'));
const Carousel = lazy(() => import('./components/Carousel'));

var options = {
  bottom: '32px', // default: '32px'
  right: 'unset', // default: '32px'
  left: '32px', // default: 'unset'
  time: '0.5s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#fff',  // default: '#fff'
  buttonColorDark: '#100f2c',  // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: true, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: true // default: true
}
const darkmode = new Darkmode(options);
darkmode.showWidget();

function App() {

  return (
    <div>

      <Suspense fallback={
        <div classNames="containe-fulid" >
          <center>
            <Spinner color="primary" />
          </center>
        </div>}>
        <section>
          <Nav />
          <Container>
            <Row>
              <Col sm="12" md="5" xs="12">
                <h1 className="text-info"><Content name="Pang Pang" /></h1>
              </Col>
              <Col md="7" xs="12">
                <br />
                <Carousel />
              </Col>
            </Row>
            <h2>lasdjfksdfj</h2>
          </Container>
        </section>
      </Suspense>
    </div >
  );
}

export default App;
