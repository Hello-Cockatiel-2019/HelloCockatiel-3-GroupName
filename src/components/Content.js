import React from 'react';
import styled, { css } from 'styled-components';
import Plx from 'react-plx';
import Carousel from './Carousel';

const bc = css`
    width:100px;
    height:10px; 
`
const Box = styled.div`
    background-color: black;
    width: 50%;
    height:100%;
    border-radius: 35px;
    padding-top:22px;
    padding-bottom:22px;
    margin-top:76px
    margin-right:auto;
    margin-left:auto;
    opacity: 0.85;
    filter: alpha(opacity=50);
`
const Boxin = styled.div`
    background-color: white;
    width:auto;
    height:auto;
    border-radius: 20px;
    border-top-width:-2;
    margin-top:0px;
    margin-right: 20px;
    margin-left:20px;
    margin-bottom:auto;
    padding-top:20px;
    padding-right:20px;
    padding-left:30px;
    padding-bottom:22px;
`
const Content = (props) => {
    return (
        <div className="col-xl-12 " id={props.idd}>
            <bg>
                <Plx
                    className='MyAwesomeParallax'
                    parallaxData={props.parallaxData}
                >
                    <Box>
                        <Boxin>
                            <div className={bc}>
                                <Carousel />
                            </div>
                            About<br />
                            สถานะการอนุรักษ์ : ไม่น่ากังวล<br />
                            ชนิด : สัตว์เลี้ยงลูกด้วยนม<br />
                            แหล่งมักพบ : เม็กซิโก , อเมริกากลาง และอเมริกาใต้<br />
                            เรื่องจริงหรอเนี้ยย!!!<br />
                            สลอธใช้เวลาในการเผาผลาญอาหารนานถึงหนึ่งเดือนสำหรับในการย่อยอาหารมื้อเดียว
                        </Boxin>
                    </Box>
                </Plx>
                <h2>&nbsp;</h2>
                <h2>&nbsp;</h2>
                <h2>&nbsp;</h2>
                <h2>&nbsp;</h2>
                <h2>&nbsp;</h2>
                <h2>&nbsp;</h2>
            </bg>
        </div >
    )
}
export default Content
