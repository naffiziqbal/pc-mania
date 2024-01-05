import { getLocalStorageCart } from "@/utils/handleLocalStorage";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  CiShoppingCart,
  CiSearch,
  CiFacebook,
  CiInstagram,
} from "react-icons/ci";
import { IoPersonCircleOutline } from "react-icons/io5";

import { useRouter } from "next/router";
const Header = ({ cart }) => {
  // console.log(cart)
  const router = useRouter();
  const [cartItems, setCartItems] = useState(null)

  useEffect(() => {
    const cart = getLocalStorageCart()
    const arrayOfObject = Object.keys(cart)
    setCartItems(arrayOfObject.length)
  }, [cartItems])

  return (
    <div className="border-b-2 fixed top-0 w-full z-50 bg-white">
      {/* Top Header */}
      {/* <div className="text-[.9rem] bg-black  min-h-fit p-2 text-white">
        <div className="max_viewport flex flex-col justify-start md:flex-row md:justify-between md:items-center">
          <section>Date</section>
          <section>
            <p className="text-wrap">
              Visit our showroom in 1234 Street Adress City Address, 1234
              Contact Us
            </p>
          </section>
          <section className="flex md:justify-between [&>*:nth-child(n+2)]:mx-2 items-center *:cursor-pointer">
            <span> <a href='tel:+8801234567898'>(+880) 1234567898</a></span>
            <span>
              <a
                className="*:w-6 *:h-6"
                target="_blank"
                href="https://facebook.com"
              >
                <CiFacebook />
              </a>
            </span>
            <span>
              <a
                className="*:w-6 *:h-6"
                target="_blank"
                href="https://instagram.com"
              >
                <CiInstagram />
              </a>
            </span>
          </section>
        </div>
      </div> */}
      {/* Main Header */}

      <div className="max_viewport flex justify-between items-center py-5 font-bold">
        <div className="w-5/6 flex justify-between items-center">
          <section className="min-w-fit w-1/6 ">
            {/* //?  Logo */}
            {/* <Image src={"/"} width={100} height={100} alt="logo" /> */}
            <Link className="text-2xl text-blue-600 font-bold " href={"/"}>
              Pc Mania
            </Link>
          </section>
          <section className="w-full  ">
            <ul className="hidden md:flex flex-row justify-between ">
              <li>
                <Link className={`${router.pathname == "/product/custom_pc" && "text-blue-400"}`} href={"/product/custom_pc"}>Desktop</Link>
              </li>
              <li>
                <Link className={`${router.pathname == "/product/laptop" && "text-blue-400"}`} href={"/product/laptop"}>Laptop</Link>
              </li>
              <li>
                <Link className={`${router.pathname == "/product/accessories" && "text-blue-400"}`} href={"/product/accessories"}>Accessories</Link>
              </li>
              <li>
                <Link className={`${router.pathname == "/product/featured" && "text-blue-400"}`} href={"/product/featured"}>Featured</Link>
              </li>
              <li>
                <Link
                  className={`${router.pathname === '/our_deals' ? 'bg-blue-400 text-white' : "py-2  px-6 rounded-full border-2 border-blue-600"}`}
                  href={"/our_deals"}
                >
                  Our Deals
                </Link>
              </li>
            </ul>
          </section>
        </div>
        <section className="flex flex-row w-fit *:mx-2 *:h-9 *:w-6 *:cursor-pointer ">
          {/* Header End */}
          <CiSearch />
          <div className="w-fit relative">
            <Link className={`${router.pathname === "/cart" && "text-blue-600"}`} href={'/cart'}>
              <CiShoppingCart className="  h-9 w-6 cursor-pointer " />
            </Link>
            <span className={` ${!cart.length && !cartItems ? "hidden" : "absolute top-0 left-5 text-white text-xs bg-red-600 rounded-full w-4 h-4 text-center"} `}>{cart.length ? cart.length + cartItems : cartItems}</span>
          </div>
          <IoPersonCircleOutline />
        </section>
      </div >
    </div >
  );
};

export default Header;
