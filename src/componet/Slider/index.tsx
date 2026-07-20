import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


export default function Slider({ slides }: { slides: string[] | React.JSX.Element[] }) {
    return (
        <>
            <Swiper
                slidesPerView={1}
                autoplay={{
                    delay: 2700,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Autoplay]}
                className="mySwiper">
                {
                    slides?.map((slide, index) => (
                        <SwiperSlide key={index} >{slide}</SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );
}
