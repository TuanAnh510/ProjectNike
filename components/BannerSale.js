import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from '/styles/carousel.module.css';

const CarouselPage = () => {
  return (
    <div className={styles.carouselContainer}>
      <Carousel autoPlay infiniteLoop interval={3000} showStatus={false} showIndicators={false}>
        <div className={styles.carouselItem}>
          <div className={styles.textContainer}>
            <div>Hello Nike App</div>
            <div className={styles.subText}>
              Download the app to access everything Nike. <u>Get Your Great</u>
            </div>
          </div>
        </div>
        <div className={styles.carouselItem}>
          <div className={styles.textContainer}>
            <div>New Styles on Sale: Up to 40% Off</div>
            <div className={styles.subText}>Shop All Our New Markdowns</div>
          </div>
        </div>
        <div className={styles.carouselItem}>
          <div className={styles.textContainer}>
            <div>Free Delivery</div>
            <div className={styles.subText}>
              Applies to orders of 5.000.000₫ or more. View details
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselPage;
