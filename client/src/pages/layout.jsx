import Header from "@/components/shared/Header/Header";
import Footer from "@/components/shared/footer/Footer";
import { useSelector } from "react-redux";

export default function Layout({ children }) {
  const cart = useSelector(state => state.cart)
  const user = useSelector(state => state.user.user)
  console.log(user)
  // console.log(cart)

  return (
    /*
    Calling Cart data from redux here instead of the actual Header Components because, calling in header causing error. That's why Sending cart as a props
    */
    <>
      <Header cart={cart} user={user} />
      <main className="min-h-96 max_viewport overflow-hidden px-3 pt-40">{children}</main>
      <Footer />

    </>
  );
}
