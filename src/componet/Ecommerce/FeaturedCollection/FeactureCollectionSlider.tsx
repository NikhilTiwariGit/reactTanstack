import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export function FeactureCollectionSlider({ list }: any) {
    return(
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
            list?.map((item: any, index: number)=>(
                <SwiperSlide key={index} >
                    <img className="w-full" src={item?.product_photo} alt={item?.name} />
                </SwiperSlide>
            ))
        }
      </Swiper>
    )
}
