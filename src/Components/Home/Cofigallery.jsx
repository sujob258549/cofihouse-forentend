import cofiimg1 from '../../assets/images/cups/Rectangle 9.png'
import cofiimg2 from '../../assets/images/cups/Rectangle 10.png'
import cofiimg3 from '../../assets/images/cups/Rectangle 11.png'
import cofiimg4 from '../../assets/images/cups/Rectangle 12.png'
import cofiimg5 from '../../assets/images/cups/Rectangle 13.png'
import cofiimg6 from '../../assets/images/cups/Rectangle 14.png'
import cofiimg7 from '../../assets/images/cups/Rectangle 15.png'
import cofiimg8 from '../../assets/images/cups/Rectangle 16.png'
const Cofigallery = () => {
    return (
        <div className='  w-[90%] md:w-[80%] mx-auto'>
            <p className="text-center">Follow Us Now</p>
            <h2 className="text-3xl md:text-5xl text-[#331A15] font-rancho text-center py-3">Follow on Instagram</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10'  data-aos="zoom-in">
                
                <img className='w-full' src={cofiimg1} alt="" />
                <img className='w-full' src={cofiimg2} alt="" />
                <img className='w-full' src={cofiimg3} alt="" />
                <img className='w-full' src={cofiimg4} alt="" />
                <img className='w-full' src={cofiimg5} alt="" />
                <img className='w-full' src={cofiimg6} alt="" />
                <img className='w-full' src={cofiimg7} alt="" />
                <img className='w-full' src={cofiimg8} alt="" />
            </div>
        </div>
    );
};

export default Cofigallery;