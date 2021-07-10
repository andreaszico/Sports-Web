import VideoChild from './VideoChild';

function LiveVideo() {
    const data = [1, 2, 3, 4];

    return (
        <div className="mt-20 font-roboto">
            <div className="flex items-center">
                <div className="circle w-10 h-10 rounded-full bg-white border-8 border-subburts relative flex justify-center items-center p-4">
                    <div className="absolute w-6 h-6 bg-subburts rounded-full ml-1 mr-1"></div>
                </div>
                <p className="text-2xl font-black ml-4">LIVE</p>
            </div>

            <div className="">
                <div className="grid lg:grid-cols-4 grid-cols-1 auto-cols-max gap-3 py-10 justify-center">
                    { data.map((el, id) => (
                        <VideoChild key={id}/>
                    )) }
                </div>
            </div>
        </div>
    )
}

export default LiveVideo
