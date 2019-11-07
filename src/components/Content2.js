import React from 'react';
import styled from 'styled-components';
import Plx from 'react-plx';

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
    opacity: 1;
    // filter: alpha(opacity=50);
`
const Boxin = styled.div`
    background-color: #0D343A;
    width:auto;
    height:auto;
    border-radius: 20px;
    border-top-width:-2;
    margin-top:0px;
    margin-right: 0px;
    margin-left:20px;
    padding-top:20px;
    padding-right:20px;
    padding-left:30px;
    padding-bottom:22px;
    opacity: 0.90;
`
const Content2 = (props) => {
    return (
        <div className="col-xl-12 text-white" id={props.idd}>
            <br />
            <Plx
                className='MyAwesomeParallax'
                parallaxData={props.parallaxData}
            >
                <Boxin>
                    {props.title}<br />
                    {props.data}<br /><br />
                    {props.data1}<br /><br />
                    {props.data2}<br /><br />
                    {props.data3}<br /><br />
                    {props.data4}
                    {props.iamge}
                </Boxin>
            </Plx>
            <h2>&nbsp;</h2>
            <h2>&nbsp;</h2>
            <h2>&nbsp;</h2>
            <h2>&nbsp;</h2>
            <h2>&nbsp;</h2>
            <h2>&nbsp;</h2>
        </div >
    )
}
export default Content2
