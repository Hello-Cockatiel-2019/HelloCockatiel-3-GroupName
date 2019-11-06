import React from 'react';
import styled, { css } from 'styled-components';
import Plx from 'react-plx';

const bc = css`
    width:100px;
    height:10px; 
`
const Box = styled.div`
    background-color: black;
    width: 50%;
    height:600px;
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
    height:34.5em;
    border-radius: 20px;
    border-top-width:-2;
    margin-top:0px;
    margin-right: 20px;
    margin-left:20px;
    padding-top:20px;
    padding-right:20px;
    padding-left:30px;
`
const Content2 = (props) => {
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
                            </div>
                            {props.title}<br />
                            {props.data}<br /><br />
                            {props.data1}<br /><br />
                            {props.data2}<br /><br />
                            {props.data3}<br /><br />
                            {props.data4}
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
export default Content2
