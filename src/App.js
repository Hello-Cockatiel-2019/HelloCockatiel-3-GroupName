import React, { lazy, Suspense } from 'react';
import styled, { css } from 'styled-components'
import { Container, Row, Col, Spinner } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Mascot = lazy(() => import('./components/Mascot'));
const Content = lazy(() => import('./components/Content'));
const Content2 = lazy(() => import('./components/Content2'))
const Nav = lazy(() => import('./components/Nav'));
const BtntoTop = lazy(() => import('./components/BtntoTop'));
const Anatomyimg = lazy(() => import('./components/Anatomyimg'))

const myspinner = css`
  margin-top: 200px;
`
const Image = styled.div`
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background: url('/${props => props.source}') no-repeat fixed; 
    background-size: cover;  
`

class App extends React.Component {
  render() {
    return (
      <Image source="image2.svg">
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
            <div>
              <Container fluid>
                <Nav idd="home" />
                <Row>
                  <Col lg="10">
                    <Mascot />
                  </Col>
                  <Col>
                    {/* <Home /> */}
                    <BtntoTop/>
                  </Col>
                  <Content idd="about" parallaxData={[
                    {
                      start: 0,
                      end: 300,
                      properties: [
                        {
                          startValue: 0,
                          endValue: 360,
                          property: 'rotateY',
                        },
                      ],
                    },
                  ]} />
                  <Content2 idd="evolution" parallaxData={[
                    {
                      start: 700,
                      end: 900,
                      properties: [
                        {
                          startValue: 180,
                          endValue: 0,
                          property: 'rotateZ'
                        },
                      ],
                    },
                  ]} data="
                  วิวัฒนาการ : สลอธเป็นผู้รอดชีวิตที่ผ่านการสูญพันธุ์ครั้งใหญ่ๆ มาแล้ว 2 ครั้งในช่วงเวลา 64 ล้านปี วิวัฒนาการได้ปรับปรุงชีวิตของมันให้ใช้พลังงานเพียง 10% หากเทียบกับสัตว์เลี้ยงลูกด้วยนมที่มีขนาดไล่เลี่ยกัน  และสามารถดำรงชีวิตโดยมีพลังงานเพียง 160 กิโลแคลอรี่ต่อวัน หรือเทียบเท่ากับนมจืดเพียง 1 กล่อง
                  " title="EVOLUTION"
                  />
                  <Content2 idd="anatomy" parallaxData={[
                    {
                      start: 1300,
                      end: 1500,
                      properties: [
                        {
                          startValue: 0,
                          endValue: 1,
                          property: 'scale'
                        },
                      ],
                    },
                  ]} data="กรงเล็บ
                  สลอธเป็นสัตว์เลี้ยงลูกด้วยนมขนาดกลางในวงศ์สลอธสองนิ้วเท้า (Megalonychidae) และสลอธสามนิ้วเท้า (Bradypodidae) มันสามารถห้อยหัวท้าทายแรงโน้มถ่วงโดยอาศัยกระดูกนิ้วเท้าที่ไม่สามารถเคลื่อนไหวได้ แต่เชื่อมติดกันเหมือนขอเกี่ยว (hook) ทำให้ห้อยหัวโดยไม่ต้องออกแรงให้สูญเสียพลังงาน
                  "
                  data1="กล้ามเนื้อ
                  สลอธมีวิวัฒนาการกล้ามเนื้อที่เหมาะสมกับการดำรงชีวิต เรียกว่า ‘กล้ามเนื้อรีแทรกเตอร์’ (retractor muscle) คล้ายกล้ามเนื้อไบเซ็ปส์ด้านหน้าต้นแขนของคน กล้ามเนื้อนี้จะเคลื่อนไหวช้า ลดการสูญเสียพลังงาน แต่มีประสิทธิภาพในการยกและไต่ขึ้นที่สูง
                  "
                  data2="กระเพาะของสลอธจึงแบ่งเป็น 4 ช่องคล้ายสัตว์เคี้ยวเอื้องอย่างวัว พึ่งพาแบคทีเรียในกระเพาะให้ช่วยย่อยสลาย แต่ก็ทำอย่างเชื่องช้า ใบไม้เพียงใบเดียวอาจใช้เวลาย่อยเป็นเดือน "
                  data3="คอ
                  สลอธมีข้อกระดูกคอถึง 10 ข้อ มากกว่าสัตว์เลี้ยงลูกด้วยนมทั่วไป (ยีราฟที่คอยาวมากๆ มีเพียง 7 ข้อเท่านั้น)" 
                  data4="ซี่โครง ระหว่างซี่โครงของสลอธจะมีเนื้อเยื่อบางๆ ที่ตรึงกระเพาะอาหารไว้เพื่อรับน้ำหนัก กระเพาะอันเป็นเอกลักษณ์นี้มีขนาดใหญ่และมีน้ำหนักมากถึง 3 ใน 4 ของร่างกายเพื่อจุใบไม้ที่ยังไม่ย่อยสลายไว้"
                  image="" title="ANATOMY"/>
                  <Anatomyimg/>
                </Row>
              </Container>
            </div>
          </section>
        </Suspense>
      </Image>
    );
  }
}

export default App;
