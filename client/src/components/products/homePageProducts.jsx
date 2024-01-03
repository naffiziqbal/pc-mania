import Link from "next/link";
import Ad from "../ui/ad/Ad";
import NewProducts from "./NewProducts";
import style from "@/styles/Product.module.css"
import Products from "./Products";
import { useSelector } from "react-redux";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";


const HomePageProducts = ({ products }) => {

    const data = useSelector(state => state.cart)
    console.log(data)
    return (

        <div className={style.global_product}>
            <section className="flex justify-between items-center">
                <h3 className="text-2xl font-semibold my-5">New Products</h3>
                <Link href={'/product/new_products'} className="font-semibold">See More</Link>
            </section>
            <div className="">
                <Carousel>
                    <CarouselContent>
                        {
                            products?.slice(0, 6)?.map(product => <NewProducts key={product?._id} product={product} />)
                        }
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
            <Ad />
            <section className="flex justify-between items-center">
                <h3 className="text-2xl font-semibold my-5">Accessories</h3>
                <Link href={'/product/accessories'}>See More</Link>
            </section>
            <div className="grid md:grid-cols-4 grid-cols-2 gap-2 px-4">
                {
                    products.filter(data => data.category === 'accessories')
                        ?.map(product => <Products key={product?._id} product={product} />)
                }
            </div>
            <section className="flex justify-between items-center">
                <h3 className="text-2xl font-semibold my-5">Laptop</h3>
                <Link href={'/product/laptop'}>See More</Link>
            </section>
            <div className="grid md:grid-cols-4 grid-cols-2 gap-2 px-4">
                {
                    products.filter(data => data.category === 'Laptop')
                        ?.map(product => <Products key={product?._id} product={product} />)
                }
            </div>
            <section className="flex justify-between items-center">
                <h3 className="text-2xl font-semibold my-5">Custom Pc</h3>
                <Link href={'/product/custom_pc'}>See More</Link>
            </section>

            <div className="flex flex-row gap-3 overflow-x-auto">
                {
                    products.filter(data => data.category === 'Custom Pc')
                        ?.map(product => <Products key={product?._id} product={product} />)
                }
            </div>

        </div>
    );
};

export default HomePageProducts;
