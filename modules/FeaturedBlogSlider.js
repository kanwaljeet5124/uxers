import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import FeaturedBlog from "./FeaturedBlog";
import { useRef } from "react";
export default function FeaturedBlogSlider() {
    const slider = useRef()
    return (
        <div className="container col-10">
            <Swiper
                ref={slider}
                spaceBetween={30}
                slidesPerView={1}
            >
                <SwiperSlide><FeaturedBlog/></SwiperSlide>
                <SwiperSlide><FeaturedBlog/></SwiperSlide>
                <SwiperSlide><FeaturedBlog/></SwiperSlide>
                <SwiperSlide><FeaturedBlog/></SwiperSlide>
                <SwiperSlide><FeaturedBlog/></SwiperSlide>
                <SwiperSlide><FeaturedBlog/></SwiperSlide>
            </Swiper>
        </div>
    )
}
