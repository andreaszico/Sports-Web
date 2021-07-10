import { faCheckCircle, faEye } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Link from "next/link"

function VideoChild() {
    return (
        <div className="blog-child h-72 relative flex flex-col rounded-md bg-white">
            <div className="relative flex justify-end items-end">
                <img src="https://cms.qz.com/wp-content/uploads/2018/02/ap_16338643387469-e1519931314268.jpg?quality=75&strip=all&w=1600&h=900&crop=1" className="w-full h-full object-cover z-0" alt="" srcSet="" />
                <div className="absolute bg-subburts text-xs font-bold p-2 text-white z-10 animate-pulse">LIVE</div>
                <div className="absolute bg-gradient-to-b from-transparent to-black  w-full h-full opacity-50  rounded-md"></div>
            </div>
            <div className="w-full h-full flex flex-col z-20 rounded-md p-3 pl-0 text-primary">
                <Link href="/video">
                    <p className="text-sm font-bold hover:text-blue-500 cursor-pointer">This Week in Navy Sports Presented by Navy Federal Credit Union</p>
                </Link>
                <p className="text-xs mt-2 font-medium blog-text flex items-center">BEIN SPORTS &nbsp;   <FontAwesomeIcon icon={faCheckCircle} className="w-3 text-gray-500" /></p>
                <p className="text-xs mt-2 font-medium blog-text flex items-center"><FontAwesomeIcon icon={faEye} className="w-3 text-gray-500 mr-1" /> 1,902 Viewers</p>
            </div>
        </div>
    )
}

export default VideoChild
