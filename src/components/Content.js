import React from 'react';
import styled, { css } from 'styled-components';
import Plx from 'react-plx';

const bg = styled.div`
    background: url('/image2.svg') repeat fixed ; 
    background-size: cover;     
`
const Box = styled.div`
    background-color: black;
    width: 50%;
    height:200px;
    border-radius: 35px;
    padding-top:22px;
    margin-top:76px
    margin-right:auto;
    margin-left:auto;
    opacity: 0.75;
    // filter: alpha(opacity=50);
`
const Boxin = styled.div`
    background-color: white;
    width:37em;
    height:10em;
    border-radius: 20px;
    border-top-width:-2;
    margin-top:0px;
    margin-right: auto;
    margin-left:auto;
    padding-top:20px;
    padding-right:20px;
    padding-left:30px;
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
                            about
                    สถานะการอนุรักษ์ : ไม่น่ากังวล
                    ชนิด : สัตว์เลี้ยงลูกด้วยนม
                    แหล่งมักพบ : เม็กซิโก , อเมริกากลาง และอเมริกาใต้
                    เรื่องจริงหรอเนี้ยย!!!
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
                <h2>{props.data}</h2>
            </bg>
        </div >
    )
}
export default Content
