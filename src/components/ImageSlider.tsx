// src/components/ImageSlider.tsx
import { FunctionComponent } from "react";
// Import các thành phần cần thiết từ Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import các file CSS của Swiper và file CSS module của chúng ta
import "swiper/css";
import "swiper/css/autoplay";

import styles from "./ImageSlider.module.css";

// Danh sách các ảnh mẫu.
const slideImages = [
  "/container-1@2x.png",
  "/container-2@2x.png",
  "/container-1@2x.png",
  "/container-1@2x.png",
  "/container-1@2x.png",
  "/container-2@2x.png",
];

const ImageSlider: FunctionComponent = () => {
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