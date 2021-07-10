function Hero() {
    return (
        <div className="mt-14">
            <div className="h-500 relative flex flex-col justify-center font-roboto z-10 overflow-hidden">
                <div className="w-full text-3xl text-left z-20 px-20 pl-40">
                    <p className="w-full text-5xl text-left z-10 font-black text-white uppercase heading leading-tight">FIND YOUR <br />
                        Destiny Here</p>
                    <p className="w-1/2 mt-2 text-base text-left z-10 font-light text-white heading leading-tight">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus rem voluptatem, consectetur quo autem reiciendis cum aliquam? Deserunt magni autem facere perspiciatis dolores. Earum impedit enim alias dolorem aut in?</p>
                </div>
                <div className="opacity-50 w-full h-full absolute bg-gradient-to-r from-blue-700 to-yellow-700 z-10"></div>
                <img className="w-full h-hero absolute" src="https://www.vmcdn.ca/f/files/halifaxtoday/images/sports/060820-sports-adobestock_4437963.jpeg;w=960" alt="" />
            </div>
        </div>
    )
}

export default Hero
