import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import './styles.css';
import { Pagination } from 'swiper';
import "./FeatureSlider.css";
import { Link } from "react-router-dom";
import {
  displayMoney,
  generateDiscountedPrice,
} from "../DisplayMoney/DisplayMoney";
const FeaturedSlider = ({ products }) => {

  return (

    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {products.map((product) => {
          const { _id, images, name, price } = product;
          let newPrice = generateDiscountedPrice(price);
          newPrice = displayMoney(newPrice);
          const oldPrice = displayMoney(price);
          return (
            <SwiperSlide key={_id} className="featured_slides">
              <Link
                to={`/product/${_id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="featured_title">{name}</div>
                <figure className="featured_img">
                  <img src={images[0].url} alt={name} />
                </figure>
                <h2 className="products_price">
                  <span className="final_price">{newPrice}</span> &nbsp;
                  <small>
                    <del className="old_price">{oldPrice}</del>
                  </small>
                </h2>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
    // <Swiper
    //   modules={[EffectCoverflow, Pagination, A11y, Autoplay]}
    //   loop={true}
    //   speed={500}
    //   spaceBetween={150}
    //   slidesPerView={"auto"}
    //   pagination={{ clickable: true }}
    //   effect={"coverflow"}
    //   centeredSlides={true}
    //   coverflowEffect={{
    //     rotate: 0,
    //     stretch: 10,
    //     depth: 50,
    //     modifier: 3,
    //     slideShadows: false,
    //   }}
    //   autoplay={{
    //     delay: 3500,
    //     disableOnInteraction: false,
    //   }}
    //   breakpoints={{
    //     768: {
    //       slidesPerView: 2,
    //       spaceBetween: 200,
    //     },
    //     992: {
    //       slidesPerView: 3,
    //       spaceBetween: 250,
    //     },
    //   }}
    //   className="featured_swiper"
    // >
    //   {products.map((product) => {
    //     const { _id, images, name ,price  } = product;
    //     let newPrice = generateDiscountedPrice(price);
    //     newPrice = displayMoney(newPrice);
    //     const oldPrice = displayMoney(price);

    //     return (
    //       <SwiperSlide key={_id} className="featured_slides">
    //         <Link
    //           to={`/product/${_id}`}
    //           style={{ textDecoration: "none", color: "inherit" }}
    //         >
    //           <div className="featured_title">{name}</div>
    //           <figure className="featured_img">
    //             <img src={images[0].url} alt={name} />
    //           </figure>
    //           <h2 className="products_price">
    //             <span className="final_price">{newPrice}</span> &nbsp;
    //             <small>
    //               <del className="old_price">{oldPrice}</del>
    //             </small>
    //           </h2>
    //         </Link>
    //       </SwiperSlide>
    //     );
    //   })}
    // </Swiper>
  );
};

export default FeaturedSlider;
