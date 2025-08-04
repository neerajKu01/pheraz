/* eslint-disable no-useless-escape */
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import HeroCarousel from '../components/HeroCarousel.jsx';
import { Col, Row } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../css/productsCarousel.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import CategoryGrid from '../components/CategoryGrid.jsx';


const Home = () => {
  const homeCardData = [
    {
      id: 1,
      heading: 'High Quality Fabrics',
      description: 'Our outfits are cut from premium fabrics with a fit so good, that it feels custom made, just for you.'
    },
    {
      id: 2,
      heading: 'Free Shipping ',
      description: 'Our outfits are cut from premium fabrics with a fit so good, that it feels custom made, just for you..'
    },
    {
      id: 3,
      heading: 'In-House Production',
      description: 'We have full control over the quality of products since we are one of the few brands that designs & produces its own garment..'
    },

  ]

  const products = [
    {
      title: 'Sunspell - off white flowy dress with mustard corset',
      imagePath: "images/products/kri.jpg",
      description: 'Price 599.',
    },
    {
      title: 'Sunspell - off white flowy dress with mustard corset',
      imagePath: 'images/products/kri.jpg',
      description: 'Price 599.',
    },
    {
      title: 'Sunspell - off white flowy dress with mustard corset',
      imagePath: 'images/products/kri.jpg',
      description: 'Price 599.',
    },
    {
      title: 'Sunspell - off white flowy dress with mustard corset',
      imagePath: 'images/products/kri.jpg',
      description: 'Price 599.',
    },
    {
      title: 'Sunspell - off white flowy dress with mustard corset',
      imagePath: 'images/products/kri.jpg',
      description: 'Price 599.',
    },
    {
      title: 'Sunspell - off white flowy dress with mustard corset',
      imagePath: 'images/products/kri.jpg',
      description: 'Price 599.',
    },
    {
      title: 'Sunspell - off white flowy dress with mustard corset',
      imagePath: 'images/products/kri.jpg',
      description: 'Price 599.',
    },
    // Add more items...
  ];
  return (
    <>
      <HeroCarousel />
      <h1>Welcome to Pehraz</h1>
      <Row style={{ marginBottom: '50px' }}>
        {homeCardData.map((item) => (
          <Col key={item.id} style={{ paddingRight: '5px' }} xs={24} sm={12} md={8} lg={8}>
            <Card style={{ height: '120px', textAlign: 'center', justifyContent: 'center' }}>
              <CardContent>
                <h2 style={{ padding: '0', margin: '0' }}>{item.heading} </h2>
                <p>{item.description}</p>
              </CardContent>
            </Card>
          </Col>
        ))}
      </Row>
      <hr />
      <Row >
        <div style={{ height: '120px', textAlign: 'center', justifyContent: 'center' }}>
          <h4>Collection</h4>

          <h2 style={{ padding: '0', margin: '0' }}>Sunkissed Stories</h2>
          <p>Sunkissed Stories is a love letter to golden hours, carefree getaways, and sun-drenched memories. This collection is designed to make you feel like a true summer goddess — effortless, radiant, and unforgettable. This collection is your summer moodboard come to life: think juicy pops of tangerine, breezy pastels, buttery yellows, and ocean-kissed blues.</p>
        </div>
      </Row>

      <Swiper style={{ marginTop: '30px' , paddingBottom:'10px'}}
        modules={[Navigation]}
        navigation={{
          prevEl: '.custom-swiper-button-prev',
          nextEl: '.custom-swiper-button-next',
        }}
        spaceBetween={20}
        slidesPerView={4}
        breakpoints={{
          1024: { slidesPerView: 4 },
          768: { slidesPerView: 2 },
          480: { slidesPerView: 1 },
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index} >
            <Card>
              <CardMedia
                component="img"
                height="300"
                image={product.imagePath}
                alt={product.title}
              />
              <CardContent>
                <Typography style={{fontSize:"12px"}}>{product.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
        <div className="custom-swiper-button-prev">
          <ArrowBackIosNewIcon />
        </div>
        <div className="custom-swiper-button-next">
          <ArrowForwardIosIcon />
        </div>
      </Swiper>

      <CategoryGrid style={{ marginTop: '30px' }}></CategoryGrid>
    </>
  );
};

export default Home;
