import React from 'react';
import { Carousel } from 'antd';
const contentStyle = {
  height: '160px',
  // background: "gray"
};
const App = () => (
  <Carousel autoplay>
    <div style={contentStyle}>
      <img style={{ width: "100%", height: "400px" }} src="images/slider/img1.jpeg" alt="Shiv"/>
    </div>
    <div style={contentStyle}>
      <img style={{ width: "100%", height: "400px" }} src="images/slider/img2.jpeg" alt="Krishna"/>
    </div>
    <div style={contentStyle}>
      <img style={{ width: "100%", height: "400px" }} src="images/slider/img3.jpeg" alt="Ram"/>
    </div>
  </Carousel>
);
export default App;