import React, { lazy, Suspense } from 'react';
import styled, { css } from 'styled-components'
import { Container, Row, Col, Spinner } from 'reactstrap';
import Darkmode from 'darkmode-js';
import 'bootstrap/dist/css/bootstrap.min.css';

const Mascot = lazy(() => import('./components/Mascot'));
const Content = lazy(() => import('./components/Content'));
const Nav = lazy(() => import('./components/Nav'));
const Home = lazy(() => import('./components/Home'));
const Carousel = lazy(() => import('./components/Carousel'));
const spincenter = css`
  height: 200px;
  position: relative;
`
const myspinner = css`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`
const Image = styled.div`
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background: url('/${props => props.source}') no-repeat fixed ; 
    background-size: cover;                     
`

// var options = {
//   bottom: '32px', // default: '32px'
//   right: 'unset', // default: '32px'
//   left: '32px', // default: 'unset'
//   time: '0.5s', // default: '0.3s'
//   mixColor: '#fff', // default: '#fff'
//   backgroundColor: '#fff',  // default: '#fff'
//   buttonColorDark: '#100f2c',  // default: '#100f2c'
//   buttonColorLight: '#fff', // default: '#fff'
//   saveInCookies: true, // default: true,
//   label: '🌓', // default: ''
//   autoMatchOsTheme: true // default: true
// }
// const darkmode = new Darkmode(options);
// darkmode.showWidget();
// darkmode.toggle();
// darkmode.toggle();
// console.log(darkmode.isActivated());
class App extends React.Component {
  render() {
    return (
      <div>
        <Image source="image2.svg">
          <Suspense fallback={
            <Container>
              <div className={spincenter}>
                <div className={myspinner}>
                  <Spinner color="success" />
                </div>
              </div>
            </Container>
          }>
            <section>
              <Nav />
              <Container fluid>
                <Row>
                  <Mascot />
                  <Home />
                  <Content />
                </Row>
              </Container>
            </section>
          </Suspense>
        </Image >
      </div>
    );
  }
}

export default App;
