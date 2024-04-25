import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaTwitter } from 'react-icons/fa';
import footerlogo from '../../assets/images/more/logo1.png'
import { MdOutlineEmail } from 'react-icons/md';
import { CiLocationOn } from 'react-icons/ci';
const Footer = () => {
    return (
        <div>
            <footer className="footer py-5 md:p-10 bg-slate-300 text-neutral-content">
                <div className='  w-[90%] md:w-[80%] mx-auto'>
                    <div className='flex flex-col-reverse md:flex-row items-center'>
                        <div className='flex flex-col gap-8 w-full md:w-[50%]'>
                            <img className='w-20' src={footerlogo} alt="" />
                            <h3  className=' text-4xl text-[#331A15] font-rancho'>Espresso Emporium</h3>
                            <p className='text-black'>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                            <div className='flex gap-3'>
                                <FaFacebook className='text-black text-3xl'></FaFacebook>
                                <FaTwitter className='text-black text-3xl'></FaTwitter>
                                <FaInstagram className='text-black text-3xl'></FaInstagram>
                                <FaLinkedin className='text-black text-3xl'></FaLinkedin>
                            </div>
                            <h3  className=' text-4xl text-[#331A15] font-rancho'>Get in Touch</h3>
                            <div>
                                <p className='flex items-center text-xl text-black'><FaPhoneAlt className='mr-2'></FaPhoneAlt> 01790876529</p>
                                <p className='flex py-3 items-center text-xl text-black'><MdOutlineEmail className='mr-2'></MdOutlineEmail> sujon258549@gmail.</p>
                                <p className='flex items-center text-xl text-black'><CiLocationOn className='mr-2 text-2xl'></CiLocationOn> Mohobbot khan Rangpur</p>
                            </div>
                        </div>
                        <div className='md:ml-10 w-full md:w-[50%] mb-10 md:mb-0'>
                            <h3 className=' text-4xl text-[#331A15] font-rancho'>Contact from</h3>
                            <div>
                                <form className="">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" placeholder="name" className="input input-bordered" required />
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input type="email" placeholder="email" className="input input-bordered" required />
                                        </div>
                                        <textarea className="textarea mt-5 h-36 textarea-bordered" placeholder="Message"></textarea>
                                        
                                    </div>
                                    <button className="btn text-[#331A15] text-2xl font-rancho btn-outline w-40 mt-5 rounded-full">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;