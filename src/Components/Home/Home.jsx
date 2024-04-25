import logoimage from '../../assets/images/more/logo1.png'
import bannerimage from '../../assets/images/more/bannerimage.png'
import Qualityproduct from './Qualityproduct';
import PopularProduct from './PopularProduct';
import Cofigallery from './Cofigallery';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            {/* header */}
            <div className='bg-[#372727] py-2'>
                <div className='  w-[90%] md:w-[80%] mx-auto'>
                    <div className='flex gap-2 items-center justify-center'>
                        <img className='w-10 md:w-16 shadow-md' src={logoimage} alt="" />
                        <h2 className='text-3xl text-white md:text-6xl font-rancho'>Espresso Emporium</h2>
                    </div>
                </div>
            </div>
            {/* banner */}
            <div className='bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${bannerimage})` }}>
                <div className='  w-[90%] md:w-[80%] mx-auto'>
                    <div className='md:grid grid-cols-1 md:grid-cols-2 py-16 md:py-36'>
                        <div></div>
                        <div>
                            <h3 className='text-white font-rancho text-3xl md:text-5xl'>Would you like a Cup of Delicious Coffee?</h3>
                            <p className='text-white py-5 text-[16px]'>It s coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                            <button className="btn bg-[#E3B577] font-rancho text-black text-2xl btn-secondary">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <Qualityproduct></Qualityproduct>
                </div>
            </div>
            <div>
                <PopularProduct></PopularProduct>
            </div>
            <div>
                <Cofigallery></Cofigallery>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;