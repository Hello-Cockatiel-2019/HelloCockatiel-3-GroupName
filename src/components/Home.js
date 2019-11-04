import React from 'react';
import styled from 'styled-components';
const Image = styled.div`
    position: absolute;
    width: 600px;
    height: 100px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    background: url(/Slothh.png);
`

export default class Home extends React.Component {
    render() {
        var stlyeimg = {
            width: 674,
            height: 539.49
        }
        return (
            <div className="container-fluid my-5" >

                <div className="col">
                    <center>
                        {/* <Image></Image> */}
                        <img src="/Slothday1.svg" style={stlyeimg} />
                    </center>
                </div>
                <h1 id="test">Test</h1>
            </div>
        )
    }
}