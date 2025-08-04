import React from 'react';
import { Carousel } from 'antd';
const contentStyle = {
  height: '160px',
  // background: "gray"
};
const App = () => (
  <Carousel autoplay>
    <div style={contentStyle}>
      <img style={{ width: "100%", height: "400px" }} src="/public/images/slider/img1.jpeg" alt="Shiv" srcset="" />
    </div>
    <div style={contentStyle}>
      <img style={{ width: "100%", height: "400px" }} src="/public/images/slider/img2.jpeg" alt="Krishna" srcset="" />
    </div>
    <div style={contentStyle}>
      <img style={{ width: "100%", height: "400px" }} src="/public/images/slider/img3.jpeg" alt="Ram" srcset="" />
    </div>
  </Carousel>
);
export default App;