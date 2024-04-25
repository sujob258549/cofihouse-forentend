import { Link } from 'react-router-dom';
import errimg from '../../assets/images/404/404.gif'
import { FaLeftLong } from 'react-icons/fa6';
import Footer from '../Home/Footer';
const Errorpage = () => {
    return (
       <div>
         <div className='w-[90%] mx-auto'>
        <Link to={'/'} className='btn btn-outline btn-accent mt-10 text-3xl font-rancho'><FaLeftLong className='mr-5'></FaLeftLong> Go To Home</Link>
        <div className='mx-auto flex justify-center'> 
            <img src={errimg} alt="" />
        </div>
        </div>
        <Footer></Footer>
       </div>
    );
};

export default Errorpage;