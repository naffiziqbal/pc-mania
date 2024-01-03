import Header from "@/components/shared/Header/Header";
import Footer from "@/components/shared/footer/Footer";
import { useSelector } from "react-redux";

export default function Layout({ children }) {
  const { cart } = useSelector(state => state.cart)

  return (
    <>
      <Header cart={cart} />
      <main className="min-h-screen max_viewport">{children}</main>
      <Footer />

    </>
  );
}
