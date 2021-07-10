import Header from '../header/Header';
import Footer from '../footer/Footer';

function Container({ children, marginTop, paddingX, wrapper = false }) {
    return wrapper === true ? (
        <>
            <Header />
            <div className={`container mx-auto ${paddingX} ${marginTop}`}>
                {children}
            </div>
        </>
    ) : (
        <div className={`container mx-auto ${paddingX} ${marginTop}`}>
            {children}
        </div>
    )
}

export default Container
