import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"



function News() {
    return (
        <div className="mt-16">
            <p className="text-3xl text-center font-bold">NEWS UPDATE <i className="h-full fa fa-search pr-4 z-20 bg-white"></i></p>
            <div className="grid lg:grid-cols-3 grid-cols-1 auto-cols-max gap-2 py-10">
                <Link href="/blog">
                    <a className="blog-child lg:col-span-2 h-96 relative flex rounded-md bg-white shadow-md overflow-hidden group hover:opacity-100 ">
                        <img src="https://static01.nyt.com/images/2020/09/25/sports/25soccer-nationalWEB1/merlin_177451008_91c7b66d-3c8a-4963-896e-54280f374b6d-superJumbo.jpg" className="w-full h-full object-cover z-0 rounded-md" alt="" srcSet="" />
                        <div className="absolute bg-gradient-to-b from-transparent to-black  w-full h-full opacity-100 z-10 rounded-md"></div>
                        <div className="absolute w-full h-full flex justify-end flex-col z-20 rounded-md p-5 pb-4 ">
                            <p className="text-2xl text-white font-bold blog-text">Soccer Battle Looming Over National Team Games </p>
                            <p className="text-sm text-white font-light mt-2 transition-all duration-500 blog-text">Soccer has so far shown a largely united front in confronting the challenges of the coronavirus. Things may be about to get ugly.</p>
                            <p className="text-xs text-white mt-2 font-medium blog-text flex items-center"><FontAwesomeIcon icon={faCalendarAlt} className="w-3 text-gray-200" />&nbsp;   17 August 2021</p>
                        </div>
                    </a>
                </Link>
                <Link href="/blog">
                    <a className="blog-child h-96 relative flex rounded-md bg-white shadow-md">
                        <img src="https://static01.nyt.com/images/2020/09/25/sports/25soccer-nationalWEB1/merlin_177451008_91c7b66d-3c8a-4963-896e-54280f374b6d-superJumbo.jpg" className="w-full h-full object-cover z-0 rounded-md" alt="" srcSet="" />
                        <div className="absolute bg-gradient-to-b from-transparent to-black  w-full h-full opacity-100 z-10 rounded-md"></div>
                        <div className="absolute w-full h-full flex justify-end flex-col z-20 rounded-md p-5 pb-4">
                            <p className="text-base text-white blog-text font-medium">Start Woman in Tech With Tokopedia</p>
                            <p className="text-sm text-white font-light mt-2 blog-text">Saat ini, industri teknologi terus berkembang menjadi lebih inklusif. Tokoh-tokoh penting dalam teknologi kini tidak hanya didominasi oleh laki-lak...</p>
                            <p className="text-xs text-white mt-2 font-medium blog-text flex items-center"><FontAwesomeIcon icon={faCalendarAlt} className="w-3 text-gray-200" />&nbsp;   17 Agustus 2021</p>
                        </div>
                    </a>
                </Link>
                <Link href="/blog">
                    <a className="blog-child h-96 relative flex rounded-md bg-white shadow-md">
                        <img src="https://static01.nyt.com/images/2020/09/25/sports/25soccer-nationalWEB1/merlin_177451008_91c7b66d-3c8a-4963-896e-54280f374b6d-superJumbo.jpg" className="w-full h-full object-cover z-0 rounded-md" alt="" srcSet="" />
                        <div className="absolute bg-gradient-to-b from-transparent to-black  w-full h-full opacity-100 z-10 rounded-md"></div>
                        <div className="absolute w-full h-full flex justify-end flex-col z-20 rounded-md p-5 pb-4">
                            <p className="text-base text-white blog-text font-medium">Start Woman in Tech With Tokopedia</p>
                            <p className="text-sm text-white font-light mt-2 blog-text">Saat ini, industri teknologi terus berkembang menjadi lebih inklusif. Tokoh-tokoh penting dalam teknologi kini tidak hanya didominasi oleh laki-lak...</p>
                            <p className="text-xs text-white mt-2 font-medium blog-text flex items-center"><FontAwesomeIcon icon={faCalendarAlt} className="w-3 text-gray-200" />&nbsp;   17 Agustus 2021</p>
                        </div>
                    </a>
                </Link>
                <Link href="/blog">
                    <a className="blog-child h-96 relative flex rounded-md bg-white shadow-md">
                        <img src="https://static01.nyt.com/images/2020/09/25/sports/25soccer-nationalWEB1/merlin_177451008_91c7b66d-3c8a-4963-896e-54280f374b6d-superJumbo.jpg" className="w-full h-full object-cover z-0 rounded-md" alt="" srcSet="" />
                        <div className="absolute bg-gradient-to-b from-transparent to-black  w-full h-full opacity-100 z-10 rounded-md"></div>
                        <div className="absolute w-full h-full flex justify-end flex-col z-20 rounded-md p-5 pb-4">
                            <p className="text-base text-white blog-text font-medium">Start Woman in Tech With Tokopedia</p>
                            <p className="text-sm text-white font-light mt-2 blog-text">Saat ini, industri teknologi terus berkembang menjadi lebih inklusif. Tokoh-tokoh penting dalam teknologi kini tidak hanya didominasi oleh laki-lak...</p>
                            <p className="text-xs text-white mt-2 font-medium blog-text flex items-center"><FontAwesomeIcon icon={faCalendarAlt} className="w-3 text-gray-200" />&nbsp;   17 Agustus 2021</p>
                        </div>
                    </a>
                </Link>
                <Link href="/blog">
                    <a className="blog-child h-96 relative flex rounded-md bg-white shadow-md">
                        <img src="https://static01.nyt.com/images/2020/09/25/sports/25soccer-nationalWEB1/merlin_177451008_91c7b66d-3c8a-4963-896e-54280f374b6d-superJumbo.jpg" className="w-full h-full object-cover z-0 rounded-md" alt="" srcSet="" />
                        <div className="absolute bg-gradient-to-b from-transparent to-black  w-full h-full opacity-100 z-10 rounded-md"></div>
                        <div className="absolute w-full h-full flex justify-end flex-col z-20 rounded-md p-5 pb-4">
                            <p className="text-base text-white blog-text font-medium">Start Woman in Tech With Tokopedia</p>
                            <p className="text-sm text-white font-light mt-2 blog-text">Saat ini, industri teknologi terus berkembang menjadi lebih inklusif. Tokoh-tokoh penting dalam teknologi kini tidak hanya didominasi oleh laki-lak...</p>
                            <p className="text-xs text-white mt-2 font-medium blog-text flex items-center"><FontAwesomeIcon icon={faCalendarAlt} className="w-3 text-gray-200" />&nbsp;   17 Agustus 2021</p>
                        </div>
                    </a>
                </Link>
            </div>
            <div className="w-full flex justify-center mb-20 ">
                <button className="px-6 py-2.5 text-sm bg-primary rounded-md hover:bg-indigo-900 font-medium text-white">More Article</button>
            </div>
        </div>
    )
}

export default News
