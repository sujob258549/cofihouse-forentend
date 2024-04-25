import logo1 from '../../assets/images/icons/1.png'
import logo2 from '../../assets/images/icons/2.png'
import logo3 from '../../assets/images/icons/3.png'
import logo4 from '../../assets/images/icons/4.png'

const Qualityproduct = () => {
    return (
        <div className='bg-[#ECEAE3]'>
            <div className='  w-[90%] text-center md:text-left md:w-[80%] mx-auto grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10'>
                <div>
                    <img className='mx-auto md:mx-0' src={logo1} alt="" />
                    <h3 className='font-rancho text-4xl text-[#331A15]  py-3'>Awesome Aroma</h3>
                    <p>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div>
                    <img className='mx-auto md:mx-0' src={logo2} alt="" />
                    <h3 className='font-rancho text-4xl text-[#331A15]  py-3'>High Quality</h3>
                    <p>We served the coffee to you maintaining the best quality</p>
                </div>
                <div>
                    <img className='mx-auto md:mx-0' src={logo3} alt="" />
                    <h3 className='font-rancho text-4xl text-[#331A15] py-3'>Pure Grades</h3>
                    <p>The coffee is made of the green coffee beans which you will love</p>
                </div>
                <div>
                    <img className='mx-auto md:mx-0' src={logo4} alt="" />
                    <h3 className='font-rancho text-4xl text-[#331A15] py-3'>Proper Roasting</h3>
                    <p>Your coffee is brewed by first roasting the green coffee beans</p>
                </div>

            </div>
        </div>
    );
};

export default Qualityproduct;