import Image from "next/image";
import Link from "next/link";
import {
  CiShoppingCart,
  CiSearch,
  CiFacebook,
  CiInstagram,
} from "react-icons/ci";
import { IoPersonCircleOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className="border-b-2">
      {/* Top Header */}
      <div className="text-[.9rem] bg-black  min-h-fit p-2 text-white">
        <div className="max_viewport flex justify-between items-center">
          <section>Date</section>
          <section>
            <p>
              Visit our showroom in 1234 Street Adress City Address, 1234
              Contact Us
            </p>
          </section>
          <section className="flex justify-between *:mx-2 items-center *:cursor-pointer">
            <span>+880 1234567898</span>
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
      </div>
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
          <section className="w-full">
            <ul className="flex flex-row justify-between">
              <li>
                <Link href={"/"}>Desktop</Link>
              </li>
              <li>
                <Link href={"/"}>Laptop</Link>
              </li>
              <li>
                <Link href={"/"}>Tablet</Link>
              </li>
              <li>
                <Link href={"/"}>Accessories</Link>
              </li>
              <li>
                <Link href={"/"}>Repaires</Link>
              </li>
              <li>
                <Link
                  className="py-2  px-6 rounded-full border-2 border-blue-600"
                  href={"/"}
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
          <CiShoppingCart />
          <IoPersonCircleOutline />
        </section>
      </div>
    </div>
  );
};

export default Header;
