import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useState } from 'react'

function Header() {

    const [dropdown, setDropdown] = useState(false);

    const setNavDropdown = () => {
        setDropdown(!dropdown)
    }

    return (
        <header className="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2 w-full fixed z-30 top-0 shadow-md">
            <div className="flex-1 flex justify-between items-center">
                <a href="/">
                    <img src="https://1000logos.net/wp-content/uploads/2021/03/Olympics-logo.png" className="w-10" alt="" srcSet="" />
                </a>
            </div>

            <label htmlFor="menu-toggle" className="pointer-cursor lg:hidden block"><svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></label>
            <input className="hidden" type="checkbox" id="menu-toggle" />

            <div className="hidden lg:flex lg:items-center lg:w-auto lg:h-auto h-screen w-full font-roboto font-medium transition-all duration-500" id="menu">
                <nav className="">
                    <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
                        <li><a className="lg:p-4 lg:pt-5 lg:mr-4 py-2 px-0 block border-b-2 border-transparent hover:border-indigo-400 text-xs tracking-wide" href="/">Home</a></li>
                        <li><a className="lg:p-4 lg:pt-5 lg:mr-4 py-2 px-0 block border-b-2 border-transparent hover:border-indigo-400 text-xs tracking-wide" href="/news">News</a></li>
                        <li className="group">
                            <a 
                            onClick={() =>  setNavDropdown()} 
                            className="lg:p-4 lg:pt-5 lg:mr-4 py-2 px-0 border-b-2 border-transparent hover:border-indigo-400 text-xs tracking-wide flex justify-center items-center">Sports <FontAwesomeIcon icon={faCaretDown} className="w-2 ml-2 mb-0.5" 
                            /></a>

                            {dropdown === true && (
                                <div className="absolute w-full left-0 right-0 top-0 h-auto z-50 animate-fade shadow-md mt-14 py-10 bg-white">
                                    <div className="container mx-auto px-4">
                                        <div className="flex flex-wrap">
                                            <div className="lg:w-1/5 w-full flex flex-col py-5 md:px-4 px-1">
                                                <p className="font-bold text-xl" href="/">Info</p>
                                                <a className="font-light text-sm mt-3 hover:text-blue-500" href="/">Tentang Kami</a>
                                                <a className="font-light text-sm mt-3 hover:text-blue-500" href="/">Blog</a>
                                                <a className="font-light text-sm mt-3 hover:text-blue-500" href="/">Kontak</a>
                                            </div>
                                            <div className="lg:w-1/5 w-full flex flex-col py-5 md:px-4 px-1">
                                                <p className="font-bold text-xl">Link Terkait</p>
                                                <a className="font-light text-sm mt-3 hover:text-blue-500" href="/">Institut Teknologi Del</a>
                                                <a className="font-light text-sm mt-3 hover:text-blue-500" href="/">Blog</a>
                                            </div>
                                            <div className="lg:w-1/5 w-full flex flex-col py-5 md:px-4 px-1">
                                                <p className="font-bold text-xl">Link Terkait</p>
                                                <a className="font-light text-sm mt-3 hover:text-blue-500" href="/">Institut Teknologi Del</a>
                                                <a className="font-light text-sm mt-3 hover:text-blue-500" href="/">Blog</a>
                                            </div>
                                            <div className="lg:w-1/5 w-full flex flex-col py-5 md:px-4 px-1">
                                                <p className="font-bold text-xl" href="/">Info</p>
                                                <a className="font-light text-sm mt-3 hover:text-blue-500" href="/">Tentang Kami</a>
                                                <a className="font-light text-sm mt-3 hover:text-blue-500" href="/">Blog</a>
                                                <a className="font-light text-sm mt-3 hover:text-blue-500" href="/">Kontak</a>
                                            </div>
                                            <div className="lg:w-1/5 w-full flex flex-col py-5 md:px-4 px-1">
                                                <p className="font-bold text-xl">Kontak</p>
                                                <p className="font-light text-sm mt-3 hover:text-blue-500" href="/">Jl. P.I Del, Sitoluama Laguboti, Sumatra Utara, Indonesia</p>
                                                <a className="font-light text-sm mt-3 hover:text-blue-500" href="/">+62 822 - 7685 - 8074</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </li>
                        <li><a className="lg:p-4 lg:pt-5 lg:mr-4 py-2 px-0 block border-b-2 border-transparent hover:border-indigo-400 text-xs tracking-wide" href="/kegiatan">Store </a></li>
                        <li><a className="lg:p-4 lg:pt-5 lg:mr-6 py-2 px-0 block border-b-2 border-transparent  hover:border-indigo-400 lg:mb-0 mb-2 text-xs tracking-wide" href="/">Statistics</a></li>
                        <li><Link
                            href="/login"
                        >
                            <a
                                className="inline-flex justify-center lg:py-5 lg:px-6 p-3 px-8 border border-transparent shadow-sm text-sm font-semibold lg:mb-0 lg:mr-5 mb-2 uppercase text-white bg-primary hover:bg-indigo-700">
                                Login
                            </a>
                        </Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
