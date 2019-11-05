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
  margin: ;200px
`
const Image = styled.div`
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background: url('/${props => props.source}') repeat ; 
    background-size: contain;                     
`
class App extends React.Component {
  render() {
    return (
      <div>
        <Suspense fallback={
          <Container>
            <div className={myspinner}>
              <center>
                <Spinner color="primary" />
              </center>
            </div>
          </Container>
        }>
          <section>
            <Image source="image2.svg ">
              <Container fluid>
                <Nav />
                <Row>
                  <Col lg="10">
                    <Mascot />
                  </Col>
                  <Col>
                    <Home />
                  </Col>
                  <Content idd="about" parallaxData={[
                    {
                      start: 0,
                      end: 500,
                      properties: [
                        {
                          startValue: 1,
                          endValue: 1.5,
                          property: 'scale',
                        },
                      ],
                    },
                  ]} />
                  <Content idd="evolution" parallaxData={[
                    {
                      start: 700,
                      end: 1000,
                      properties: [
                        {
                          startValue: 1,
                          endValue: 1.5,
                          property: 'scale',
                        },
                      ],
                    },
                  ]} />
                  <Content idd="anatomy" parallaxData={[
                    {
                      start: 1000,
                      end: 1300,
                      properties: [
                        {
                          startValue: 1,
                          endValue: 1.5,
                          property: 'scale',
                        },
                      ],
                    },
                  ]} />
                  {/* <Content idd="test1" /> */}
                </Row>
              </Container>
            </Image >
          </section>
        </Suspense>
      </div >
    );
  }
}

export default App;
