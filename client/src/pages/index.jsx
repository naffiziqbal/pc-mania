import Slider from "@/components/ui/Slider/Slider";
import Products from "@/components/products/Products";
import CategoryWiseProduct from "@/components/products/CategoryWiseProduct";


const Home = ({ products }) => {
  console.log(products)


  return <div className="max_viewport">
    <Slider />
    <Products products={products} />
    
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

