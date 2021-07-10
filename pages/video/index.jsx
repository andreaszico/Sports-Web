import Container from '@/components/container/Container'
import VideoMenu from '@/components/video/menu/Menu'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import VideoChild from '@/components/livevideo/VideoChild'

function index() {
    const data = [1, 2, 3, 4];
    return (
        <div className="font-roboto">
            <Header />
            <Container marginTop="mt-16" paddingX="px-6" >
                <div className="mt-28">
                    <input className="w-1/2 p-3 px-10  pl-4 font-roboto font-light text-sm focus:border-transparent focus:outline-none mt-5 shadow-md rounded-md  mr-5 border border-gray-400" placeholder="Search Video" />
                    <VideoMenu />
                    <div className="mt-5">
                        <div className="grid lg:grid-cols-4 grid-cols-1 auto-cols-max gap-3 py-10 justify-center">
                            {data.map((el, id) => (
                                <VideoChild key={id} />
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default index
