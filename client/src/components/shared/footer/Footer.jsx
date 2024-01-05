import Image from "next/legacy/image";
import React from 'react';
import payments from './images/card.png'
import { FaFacebook, FaInstagram, FaInstagramSquare } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className='bg-black min-h-[32rem] flex flex-col flex-wrap justify-between text-white'>
            <header className='max_viewport text-white w-full'>
                {/*   //? Newsletter */}
                <section className=' flex md:flex-row flex-col justify-between p-12 *:my-2'>
                    <div className='md:w-1/2 w-full'>
                        <h3 className='text-3xl'>Sign Up To Our Newsletter.</h3>
                        <p className='text-sm my-2'>Be the first to hear about the latest offers.</p>
                    </div>
                    <div className='md:w-1/2 w-full'>
                        <form className=' flex justify-between gap-3'>
                            <input className='outline-none p-2 w-full rounded-md bg-inherit border-2 border-white' type="email" placeholder='Your Email' />
                            <button className='w-fit p-2 px-4 rounded-full bg-blue-600 text-white font-bold' type='submit'>Subscribe</button>
                        </form>
                    </div>
                </section>
            </header>
            <main className='max_viewport w-full'>
                <div className='flex justify-between flex-wrap'>
                    <section className="mx-2">
                        <h4 className='text-lg text-slate-400 '>Information</h4>
                        <ul className='*:text-xs tracking-wider my-2 *:my-1'>
                            <li>
                                <Link href={'/'}>About us</Link>
                            </li>
                            <li>
                                <Link href={'/'}> Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href={'/'}>Search</Link>
                            </li>
                            <li>
                                <Link href={'/'}>Terms</Link>
                            </li>
                            <li>
                                <Link href={'/'}>Contact Us</Link>
                            </li>
                        </ul>
                    </section>

                    <section className="mx-2">
                        <h4 className='text-lg text-slate-400 '>Information</h4>
                        <ul className='*:text-xs tracking-wider my-2 *:my-1'>
                            <li>
                                <Link href={'/'}>About us</Link>
                            </li>
                            <li>
                                <Link href={'/'}> Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href={'/'}>Search</Link>
                            </li>
                            <li>
                                <Link href={'/'}>Terms</Link>
                            </li>
                            <li>
                                <Link href={'/'}>Contact Us</Link>
                            </li>
                        </ul>
                    </section>
                    <section className="mx-2">
                        <h4 className='text-lg text-slate-400 '>Information</h4>
                        <ul className='*:text-xs tracking-wider my-2 *:my-1'>
                            <li>
                                <Link href={'/'}>About us</Link>
                            </li>
                            <li>
                                <Link href={'/'}> Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href={'/'}>Search</Link>
                            </li>
                            <li>
                                <Link href={'/'}>Terms</Link>
                            </li>
                            <li>
                                <Link href={'/'}>Contact Us</Link>
                            </li>
                        </ul>
                    </section>
                    <section className="mx-2">
                        <h4 className='text-lg text-slate-400 '>Information</h4>
                        <ul className='*:text-xs tracking-wider my-2 *:my-1'>
                            <li>
                                <Link href={'/'}>About us</Link>
                            </li>
                            <li>
                                <Link href={'/'}> Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href={'/'}>Search</Link>
                            </li>
                            <li>
                                <Link href={'/'}>Terms</Link>
                            </li>
                            <li>
                                <Link href={'/'}>Contact Us</Link>
                            </li>
                        </ul>
                    </section>
                    <section className="mx-2">
                        <h4 className='text-lg text-slate-400 '>Information</h4>
                        <ul className='*:text-xs tracking-wider my-2 *:my-1'>
                            <li>
                                <Link href={'/'}>About us</Link>
                            </li>
                            <li>
                                <Link href={'/'}> Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href={'/'}>Search</Link>
                            </li>
                            <li>
                                <Link href={'/'}>Terms</Link>
                            </li>
                            <li>
                                <Link href={'/'}>Contact Us</Link>
                            </li>
                        </ul>
                    </section>
                    <section className="mx-2">
                        <h4 className='text-lg text-slate-400 '>Information</h4>
                        <ul className='*:text-xs tracking-wider my-2 *:my-1'>
                            <li>
                                <Link href={'/'}>About us</Link>
                            </li>
                            <li>
                                <Link href={'/'}> Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href={'/'}>Search</Link>
                            </li>
                            <li>
                                <Link href={'/'}>Terms</Link>
                            </li>
                            <li>
                                <Link href={'/'}>Contact Us</Link>
                            </li>
                        </ul>
                    </section>
                </div>
            </main>
            {/* //? Footer */}
            <footer className='max_viewport w-full'>
                <div className='flex flex-wrap justify-between text-white'>
                    <section className='flex *:mx-3'>
                        <FaFacebook />
                        <FaInstagramSquare />
                    </section>
                    <section>
                        <Image src={payments} alt='' width={200} height={50} layout="fixed" />
                    </section>
                    <section className='mx-2'>
                        <p>Copyright &copy;<a className='text-blue-500 underline' href='https://www.fiverr.com/naffiziqbal' target='_blank'>Nafiz Iqbal</a></p>
                    </section>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
