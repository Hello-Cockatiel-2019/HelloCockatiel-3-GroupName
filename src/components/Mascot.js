import React from 'react';
import styled, { keyframes } from 'styled-components';
import Plx from 'react-plx';
import { css } from 'styled-components';

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

// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(30deg);
  }
`;
// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
    display: inline-block;
    animation: ${rotate} 3s;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-direction: alternate-reverse;
    padding-top:1em;
    padding-right: 0em;
    font-size: 1.2rem;
`;
export default class Mascot extends React.Component {
    render() {
        var box = {
            margin: '2em auto 3em auto',
            width: '35%',
        }
        return (
            <div style={box}>
                <Rotate>
                    <img src="/Slothh.png" width="450px" />
                </Rotate>
                <Plx
                    className='MyAwesomeParallax'
                    parallaxData={parallaxData}
                >
                    <h1 className="text-white">Slothh</h1>
                </Plx>
            </div>
        )
    }
}