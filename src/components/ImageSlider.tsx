// src/components/ImageSlider.tsx
import { FunctionComponent, useCallback } from "react";
// Import các thành phần cần thiết từ Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";

// Import các file CSS của Swiper và file CSS module của chúng ta
import "swiper/css";
import "swiper/css/autoplay";

import styles from "./ImageSlider.module.css";

// Danh sách các ảnh mẫu.
const slideImages = [
  "/Copy of IG1.jpg",
  "/Copy of IG2.jpg",
  "/Copy of IG3.jpg",
  "/Copy of IG4.jpg",
  "/Copy of IG5.jpg",
  "/Copy of IG6.jpg",
];

const ImageSlider: FunctionComponent = () => {
  const handleSlideChange = useCallback((swiper: SwiperType) => {
    // Opacity by default for all image
    swiper.slides.forEach((slide) => { 
      slide.style.opacity = '0.8';
    });
    // Change slide opacity to 1 for active slide
    if (swiper.slides[swiper.activeIndex]) {
      swiper.slides[swiper.activeIndex].style.opacity = '1';
    }
  }, []);

  const handleSwiperInit = useCallback((swiper: SwiperType) => {
    //init opacity
    handleSlideChange(swiper);
  }, [handleSlideChange]);


  return (
    <section className={styles.sliderSection}>
      <Swiper
        // Thêm các module cần thiết
        modules={[Autoplay]}
        // Các cấu hình chính
        loop={true}
        speed={1200} // Tăng tốc độ trượt cho mượt hơn
        slidesPerView={"auto"}
        centeredSlides={true}
        slideToClickedSlide={true}
        spaceBetween={0} // <<< SỬA LỖI: Bỏ khoảng cách giữa các slide
        // Cấu hình tự động chạy
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        // Class cho container của Swiper
        onSwiper={handleSwiperInit}
        onSlideChange={handleSlideChange}
        className={styles.swiperContainer}
      >
        {slideImages.map((src, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <img src={src} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ImageSlider;