import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
const Header = () => {
  return (
    <div className="bg-red-400 text-white">
      <div className="text-[.9rem] bg-black flex justify-around items-center min-h-12">
        {/* Top Header */}
        <section>Date</section>
        <section>
          <p>
            Visit our showroom in 1234 Street Adress City Address, 1234 Contact
            Us
          </p>
        </section>
        <section className="flex justify-between *:mx-2 items-center *:cursor-pointer">
          <span>+880 1234567898</span>
          <span>
            <a target="_blank" href="https://facebook.com">
              <FaFacebook />
            </a>
          </span>
          <span>
            <a target="_blank" href="https://instagram.com">
              <FaInstagram />
            </a>
          </span>
        </section>
      </div>
      <div>Main Header</div>
    </div>
  );
};

export default Header;
