import React, { lazy, Suspense } from 'react';
import { Container, Spinner } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Nav = lazy(() => import('./components/Nav'));

function App() {
  return (
    <div>
      <Suspense fallback={
        <div classNames="containe-fulids" >
          <center>
            <Spinner color="primary" />
          </center>
        </div>}>
        <section>
          <Nav />
          <Container>
            <h1>Hello world</h1>
          </Container>
        </section>
      </Suspense>
    </div >
  );
}

export default App;
