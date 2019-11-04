import React from 'react';
import styled, { keyframes } from 'styled-components';
import { css } from 'styled-components';


// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
    display: inline-block;
    animation: ${rotate} 20s linear infinite;
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
            </div>
        )
    }
}