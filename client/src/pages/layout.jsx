import Header from "@/components/shared/Header/Header";
import Footer from "@/components/shared/footer/Footer";
import { useSelector } from "react-redux";

export default function Layout({ children }) {
  const { cart } = useSelector(state => state.cart)

  return (
    /*
    Calling Cart data from redux here instead of the actual Header Components because, calling in header causing error. That's why Sending cart as a props
    */
    <>
      <Header cart={cart} />
      <main className="min-h-screen max_viewport">{children}</main>
      <Footer />

    </>
  );
}
