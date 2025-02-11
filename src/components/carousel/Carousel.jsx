import React, { useRef } from 'react';
import styles from './carousel.module.css';

const Carousel = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -carouselRef.current.clientWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: carouselRef.current.clientWidth, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className={styles.carouselContainer}>
        <button className={styles.navButton} onClick={scrollLeft}>&lt;</button>
        <div className={styles.carousel} ref={carouselRef}>
          <img 
            src="https://th.bing.com/th?id=OIP.cfmFEz-c6rusvX274U_FLgHaDt&w=350&h=175&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" 
            alt="BOMMARILLU" 
            className={styles.sideImage} 
          />
          <img 
            src="https://1.bp.blogspot.com/-nUnrGjtxQqU/UOf8YszYzvI/AAAAAAAAz1g/KJE3mA2SGRE/s640/SVSC+Latest+Wallpapers+Cineford+5.jpg" 
            alt="SVSC" 
            className={styles.carouselImage} 
          />
          <img 
            src="https://th.bing.com/th/id/OIP.OVnVgV20ZhjBRlwlnU0nnQHaDt?rs=1&pid=ImgDetMain" 
            alt="SEETHA RAMAM" 
            className={styles.sideImage} 
          />
        </div>
        <button className={styles.navButton} onClick={scrollRight}>&gt;</button>
      </div>
    </>
  );
};

export default Carousel;