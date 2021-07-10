import { useState } from "react";

const menu = ['All', 'Basketball', 'Badminton', 'Hockey', 'Volley Ball', 'Football'];

function VideoMenu() {
    const [active, setActive] = useState('All');

    const handleClickMenu = (el) => {
        setActive(el)
    }
    
    return (
        <div className="flex gap-5 mt-10">
            {menu.map((el, i) => (
                <div key={i} className={`${active === el ? `bg-subburts text-white` : ``} p-3 py-2 text-sm rounded-md shadow border border-gray-100 text-black text-center cursor-pointer hover:text-white hover:bg-subburts transition-all duration-500`} onClick={() => handleClickMenu(el)}>{el}</div>
            ))}
        </div>
    )
}

export default VideoMenu
