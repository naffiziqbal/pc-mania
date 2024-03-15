import Header from "@/components/shared/Header/Header";
import Footer from "@/components/shared/footer/Footer";
import { setIsLoading, setUser } from "@/redux/user/UserSlice";
import { singleUser } from "@/utils/APIs";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Layout({ children }) {
  const dispatch = useDispatch()
  const { cart } = useSelector(state => state.cart)
  const user = useSelector(state => state.user.user)
  const search = useSelector(state => state.search.isSearchOpen)

  useEffect(() => {
    const getUserData = async () => {
      try {
        dispatch(setIsLoading(true))
        const id = Cookies.get('uid')
        // console.log(id)
        const { data } = await singleUser(id)
        dispatch(setUser(data))
        // console.log(data)
        dispatch(setIsLoading(false))
      } catch (err) {
        dispatch(setUser(null))
        dispatch(setIsLoading(false))
      }
    }
    getUserData()
  }, [dispatch])
  return (
    /*
    Calling Cart and User data from redux here instead of the actual Header Component because, calling in header causing error. That's why Sending cart as a props
    */
    <div>
      <Header cart={cart} user={user} search={search} />
      <main className="min-h-screen overflow-hidden px-3 pt-24">{children}</main>
      <Footer />
    </div>
  );
}
