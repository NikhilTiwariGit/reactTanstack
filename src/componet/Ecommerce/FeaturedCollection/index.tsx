import { FeactureCollectionSlider } from "./FeactureCollectionSlider";
import { useGetProductByCategory } from "@/api/AmazomeProduct/useGetProductByCategory"

export function FeaturedCollection(){

    const { data }: any = useGetProductByCategory()
    console.log({data}, data?.products)
    return(
        <section>
            <h4>Featured Collection</h4>
            <FeactureCollectionSlider list={data?.products} />
        </section>
    )
}

