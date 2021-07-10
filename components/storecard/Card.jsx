import { faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Card() {
    return (
        <div className="w-64 shadow-md rounded-md border border-indigo-200 overflow-hidden hover:shadow-2xl transition-all duration-5npm 00">
            <img className="transform -rotate-12 mt-10 w-56 h-40 object-cover" src="https://id.360buyimg.com/Indonesia/s880x0_/amZzL3QzNC8zMjEvMjM3NDA2MzcyMC82MzE5NTMvNGU3ZmNmZWYvNWRmNzVmZTROZDc1MjQyMzk.png.webp" alt="" srcSet="" />
            <div className="mt-5 p-3">
                <div className="flex justify-between">
                    <p className="text-sm font-semibold text-primary">Breathable Sneakers <br /> Non-Slip</p>
                    <p className="text-sm font-semibold text-primary">$ 45,50</p>
                </div>
                <div className="flex my-2 items-center">
                    <FontAwesomeIcon icon={faStar} className="w-3 mr-1 text-subburts" />
                    <FontAwesomeIcon icon={faStar} className="w-3 mr-1 text-subburts" />
                    <FontAwesomeIcon icon={faStar} className="w-3 mr-1 text-subburts" />
                    <FontAwesomeIcon icon={faStar} className="w-3 mr-1 text-subburts" />
                    <FontAwesomeIcon icon={faStar} className="w-3 mr-1 text-subburts" />
                    <p className="text-xs ml-1 font-medium">5.0</p>
                </div>
                <div>
                    <p className="text-xs text-gray-500 font-medium">11.6K Sales</p>
                    <div className="flex justify-between mt-5">
                        <button className="px-4 py-2 bg-primary text-white text-xs shadow-md rounded hover:bg-white hover:text-primary hover:border-primary border transition-all duration-500">See Details</button>
                        <button className="px-5 py-2 text-primary border-primary border text-xs shadow-md rounded flex items-center hover:bg-primary hover:text-white transition-all duration-500">
                            <FontAwesomeIcon icon={faShoppingCart} className="w-3 mr-1" />Order</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
