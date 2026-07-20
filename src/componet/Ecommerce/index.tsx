import Slider from "../Slider";
import EcommerceBanner from '@/assets/ecommerce-sale-banner.svg'
import EcommerceBanner2 from '@/assets/ecommerce-sale-banner-slide2.svg'
import { FeaturedCollection } from "./FeaturedCollection";

export function Ecommerce(){
    return(
        <section>
            <Slider slides={[<img className="w-full" src={EcommerceBanner} alt="Sale Banner" />, <img className="w-full" src={EcommerceBanner2} alt="Sale Banner" />]} />
            <FeaturedCollection />
        </section>
    )
}

