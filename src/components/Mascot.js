import React from 'react';
import styled, { keyframes } from 'styled-components';
import { css } from 'styled-components';

// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(27deg);
  }
`;
// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
    display: inline-block;
    animation: ${rotate} 2s;
    animation-duration: 2.5s;
    animation-iteration-count: infinite;
    animation-direction: alternate-reverse;
    padding-top:1em;
    padding-right: auto;
    padding-left:auto;
    font-size: 1.2rem;
`;
export default class Mascot extends React.Component {
    render() {
        var box = {
            margin: '1em auto 3em auto',
            width: '24%',
        }
        return (
            <div style={box}>
                <Rotate>
                    <img src="/Slothnight.png" width="450px" />
                </Rotate>
            </div>
        )
    }
}