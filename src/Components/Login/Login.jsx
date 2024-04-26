// import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa6";
import { Link, useNavigate, } from "react-router-dom";
// import { CreatAuth } from "../firebase/Authproviders";
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { Helmet } from "react-helmet-async";
import { useContext, useState } from "react";
import { FaLeftLong } from 'react-icons/fa6';
import Footer from "../Home/Footer";
import { AuthContext } from "../Firebase/Firebase";
import Swal from "sweetalert2";

const Login = () => {


    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate()
    // const [success, setSuccess] = useState('');
    // const [signupError, setsignupError] = useState('');
    // const { loginInUser, signInGoogle, signIngithub } = useContext(CreatAuth)
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


    const handelSubmitLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                console.log(result.user)
                const user = {
                    email,
                    lastlogeat: result.user?.metadata?.lastSignInTime
                }
                // update user
                fetch('http://localhost:5000/users', {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => console.log(data))
                if (result.user) {
                    Swal.fire({
                        title: "Logine!",
                        text: "Your acount logine success",
                        icon: "success"
                    });
                    navigate('/')
                }
            })
            .catch((error) => {
                console.log(error.message)
            });

        // setsignupError('')
        // loginInUser(email, password)
        //     .then(result => {
        //         console.log(result);
        //         toast.success('Success! You are logged in.');
        //     })
        //     .catch(error => {
        //         console.error(error);
        //         toast.error('invalid password Plese Forget password')

        //     });
    };


    return (
        <div className="">

            <div className="image2">
                <div className="py-10 mx-auto md:w-[80%] w-[90%]">
                    <Link to={'/'} className='btn btn-outline btn-accent mt-10 text-3xl font-rancho'><FaLeftLong className='mr-5'></FaLeftLong> Go To Home</Link>
                    <div className="-top-10">
                        <div data-aos="flip-left" className="relative card shadow shrink-0 w-full md:w-[60%] lg:w-[50%]  bg-base-100 mx-auto my-10">
                            <div >
                                <img className="w-40  mx-auto" src="https://i.ibb.co/4T00VND/kisspng-computer-icons-login-management-user-5ae155f3386149-6695613615247170432309-removebg-preview.png" alt="" />
                            </div>
                            <h1 className="text-[35px] font-bold text-center pt-4">Login your account</h1>
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
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>

                                {<p className="text-xl font-medium text-green-500 text-center "></p>}
                                <div className="form-control">
                                    <button className="btn  bg-[#CA8A04] text-white">Login</button>
                                </div>
                            </form>
                            <div className="mx-auto mb-10">
                                <button className="btn btn-outline  text-sm mr-3 ">
                                    <FaGoogle className="text-green-500 text-xl font-bold"></FaGoogle>
                                    Log with Google
                                </button>
                                <button className="btn btn-outline  mt-2">
                                    <FaGithub className="text-xl font-bold"></FaGithub>
                                    Log with Gothub
                                </button>
                            </div>
                            {<p className="font-semibold px-5 text-center mb-5 text-red-600"></p>}
                            <p className="font-semibold text-[16px] pb-10 text-center">Dont’t Have An Account ? <Link to={'/signup'} className="text-[#F75B5F]">Register</Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>

    )
};
export default Login;