import React from 'react';
import styled, { css } from 'styled-components';
import Plx from 'react-plx';

const parallaxData = [
    {
        start: 0,
        end: 500,
        properties: [
            {
                startValue: 1,
                endValue: 2,
                property: 'scale',
            },
        ],
    },
];
const bg = styled.div`
    background: url('/image2.svg') repeat fixed ; 
    background-size: cover;     
`
const Box = styled.div`
    background-color: black;
    width: 50%;
    height:210px;
    border-radius: 35px;
    padding: 50px;
    margin: 20px auto 20px auto;
    opacity: 0.5;
    filter: alpha(opacity=50);
`
const Boxin = styled.div`
    background-color: black;
    width: 50%;
    height:210px;
    border-radius: 35px;
    padding: 50px;
    margin: 20px auto 20px auto;
`
const Content = (props) => {
    return (
        <div className="col-xl-12 " id="test">
            <bg>
                <Plx
                    className='MyAwesomeParallax'
                    parallaxData={parallaxData}
                >
                    <Box>
                        <Boxin>
                            <p className="text-white">about
                    สถานะการอนุรักษ์ : ไม่น่ากังวล
                    ชนิด : สัตว์เลี้ยงลูกด้วยนม
                    แหล่งมักพบ : เม็กซิโก , อเมริกากลาง และอเมริกาใต้
                    เรื่องจริงหรอเนี้ยย!!!
                สลอธใช้เวลาในการเผาผลาญอาหารนานถึงหนึ่งเดือนสำหรับในการย่อยอาหารมื้อเดียว</p>
                        </Boxin>
                    </Box>
                </Plx>
                <h1 >testt</h1>
                <h2>test</h2>
                <h2>test</h2>
                <h2>test</h2>
                <h2>test</h2>
                <h2>test</h2>
                <h2 id={props.idd}>{props.data}</h2>
            </bg>
        </div >
    )
}
export default Content
