import Slider from "@/components/ui/Slider/Slider";
import Products from "@/components/products/Products";
import Brands from "@/components/brands/Brands";
import SocialFeed from "@/components/socialFeed/SocialFeed";
import Reviews from "@/components/Reviews/Reviews";
import HomePageProducts from "@/components/products/homePageProducts";

const Home = ({ products }) => {
  console.log(products)


  return <div className="max_viewport">
    <Slider />
    <HomePageProducts products={products} />
    <Brands />
    <SocialFeed />
    <Reviews />
  </div>;
};

export default Home;




export const getStaticProps = async () => {
  const res = await fetch(`https://pc-mania.vercel.app/api/v1/product/all-products`)
  const data = await res.json()
  return {
    props: {
      products: data?.data
    }
  }
}

