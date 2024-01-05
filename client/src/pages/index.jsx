import Slider from "@/components/ui/Slider/Slider";
import Products from "@/components/products/Products";
import Brands from "@/components/brands/Brands";
import SocialFeed from "@/components/socialFeed/SocialFeed";
import Reviews from "@/components/Reviews/Reviews";
import HomePageProducts from "@/components/products/homePageProducts";
import Head from "next/head";

const Home = ({ products }) => {
  // console.log(products)


  return <>
    <Head>
      <title>Pc Mania || A Shop Where You can Buy Your Dream Build</title>
      <meta charset="UTF-8" />
      <meta property="og:title" content="Pc Mania" key="title" />
      <meta name="og:keywords" content="laptop, desktop, mouse, keyboard" />
      <meta name="og:author" content="Nafiz Iqbal" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <div className="max_viewport">

      <Slider />
      <HomePageProducts products={products} />
      <Brands />
      <SocialFeed />
      <Reviews />
    </div>;
  </>
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

