"use client";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./main.css";
const ImgSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="main-slider">
      <Slider className="carousel" {...settings}>
        <div className="wrap">
          <a href="#">
            <img
              src="/image/photo_2024-08-26 22.33.43.jpeg"
              alt="Slider Image 1"
              loading="lazy"
            />
          </a>
        </div>
        <div className="wrap">
          <a href="#">
            <img src="/image/pngtree-cleaning-horizontal-vector-illustration-with-employees-of-cleaning-company-in-uniform-image_1391519.jpg" alt="Slider Image 4" />
          </a>
        </div>
      </Slider>
      <div className="main-class">
<h2>شركة الوجيز للإستقدام وباقات التأجير </h2>
        <h4>
          في شركة الوجيز للإستقدام وباقات التأجير ، نفخر بكوننا أحد الروّاد في تقديم خدمات المنزلية
          الممتازة في المملكة العربية السعودية، مع أعلى تقييم في مساند.
        </h4>
        <div className="flex">
        <Link href="/our-services">
          <button>خدماتنا</button>
        </Link>
        <Link href="/contact">
          <button>تواصل معنا</button>
        </Link>
        </div>

      </div>
    </div>
  );
};

export default ImgSlider;
