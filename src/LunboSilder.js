import React, { Component } from 'react'
import { Carousel } from 'antd';
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
export default class LunboSilder extends Component {
  onChange = (a,b,c) =>{
    console.log(a, b, c);
  } 
  render() {
    return (
      <div>
        <Carousel afterChange={this.onChange}>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      </div>
    )
  }
}
