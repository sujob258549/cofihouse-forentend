// import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link, } from "react-router-dom";
// import { CreatAuth } from "../firebase/Authproviders";
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { Helmet } from "react-helmet-async";
import { useContext, useState } from "react";
import { FaLeftLong } from 'react-icons/fa6';
import Footer from "../Home/Footer";
import './signup.css'
import { AuthContext } from "../Firebase/Firebase";
import Swal from "sweetalert2";



const SignUp = () => {
    // const [success, setSuccess] = useState('');
    // const [signupError, setsignupError] = useState('');
    // const { SignUpInUser, signInGoogle, signIngithub } = useContext(CreatAuth)
    const [shoandHideIcone, setShoandHideIcone] = useState(false);
    // const location = useLocation();
    // const navigate = useNavigate();
    // const from = location?.state || '/';

    // const sosallogin = (provider) => {
    //     provider()
    //         .then((result) => {
    //             navigate(from);
    //             console.log(result.user)
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //             setsignupError('An error occurred during login. Please try again.');
    //         });
    // };

    const {createUser} = useContext(AuthContext);

    const handelSubmitLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUser(email, password)
        .then(result => {    
            console.log(result.user)
            const creatAtime = result.user.metadata.creationTime;
            const addUser = {email, creatAtime, password}
            console.log(addUser) 
              
              fetch('http://localhost:5000/users',{
                method:'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body:JSON.stringify(addUser)

              })
              .then(res => res.json())
              .then(data =>{
                console.log(data)
                if(data. insertedId){
                    Swal.fire({
                        icon: "success",
                        title: "Success...",
                        text: "User add to success",
                        footer: '<a href="#">User add to success</a>'
                      });
                }
              })
            })
            .catch((error) => {
               console.log(error.message)
            });


    };


    return (
        <div className="">

            <div className="image">
                <div className="py-10 mx-auto md:w-[80%] w-[90%]">
                    <Link to={'/'} className='btn btn-outline bg-[#CA8A04] btn-accent mt-10 text-3xl font-rancho'><FaLeftLong className='mr-5'></FaLeftLong> Go To Home</Link>
                    <div className="-top-10">
                        <div data-aos="flip-left" className="relative card shadow shrink-0 w-full md:w-[60%] lg:w-[50%]  bg-base-100 mx-auto my-10">
                            <h1 className="text-[35px] font-bold text-center pt-4 font-rancho">Sign Up  account</h1>
                            <form className="card-body" onSubmit={handelSubmitLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl font-semibold">Email address</span>
                                    </label>
                                    <input type="email" placeholder="Enter your email address" name="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control relative">
                                    <label className="label">
                                        <span className="label-text text-xl font-semibold">Password</span>
                                    </label>
                                    <input type={shoandHideIcone ? 'text' : 'password'} name="password" placeholder="Enter your password" className="input input-bordered" required />
                                    <div className="absolute right-5 bottom-4" onClick={() => setShoandHideIcone(!shoandHideIcone)}>
                                        {
                                            shoandHideIcone ? <FaEyeSlash className="text-xl"></FaEyeSlash> : <FaEye className="text-xl"></FaEye>
                                        }
                                    </div>
                                </div>


                                {<p className="text-xl font-medium text-green-500 text-center "></p>}
                                <div className="form-control">
                                    <button className="btn  bg-[#CA8A04] text-white">Sign Up</button>
                                </div>
                            </form>
                            {<p className="font-semibold px-5 text-center mb-5 text-red-600"></p>}
                            <p className="font-semibold text-[16px] pb-10 text-center">Alrady create a Account ? <Link to={'/login'} className="text-[#F75B5F]">Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>

    )
};
export default SignUp;