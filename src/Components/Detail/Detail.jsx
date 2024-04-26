// import { CiStar } from "react-icons/ci";
// import { FaHome } from "react-icons/fa";
import { FaLeftLong } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";
import Footer from "../Home/Footer";

const Detail = () => {

    const detailcofi = useLoaderData();
    console.log(detailcofi)

    return (
        <div>
            <div className='  w-[90%] md:w-[80%] mx-auto py-10 md:py-20'>
                <Link to={'/'} className='btn btn-outline btn-accent mt-10 text-3xl font-rancho'><FaLeftLong className='mr-5'></FaLeftLong> Go To Home</Link>


                {
                    <div className=" grid grid-cols-1 items-center md:grid-cols-2 py-10 gap-10">
                        <div className="">
                            <div className="bg-slate-200 p-5 rounded-lg">
                                <figure><img className="w-full" src={detailcofi.photourl} alt="Shoes" /></figure>
                            </div>
                        </div>

                        <div className=" gap-0">
                            <h2 className="font-rancho text-4xl playfair py-2 font-semibold"><span>Name :</span> {detailcofi.name}</h2>
                            <hr />

                            <div className=" flex gap-4 py-3 items-center">

                                <div className="">
                                    <h2 className=" text-[16px] lg:text-2xl font-medium rounded-full py-2 md:py-3"> <span className=" lg:pr-16 pr-10 font-semibold">Chef </span > -: {detailcofi.chef}</h2>
                                    <h2 className="text-[16px] lg:text-2xl Color font-medium   rounded-full py-2 md:py-3"> <span className="font-semibold pr-3 lg:pr-5">Supplier </span> -: {detailcofi.supplier}</h2>
                                    <h2 className=" text-[16px] lg:text-2xl tColor  font-medium   rounded-full py-2 md:py-3"> <span className="font-semibold lg:pr-3 pr-[6px]">Category </span>-: {detailcofi.category}</h2>

                                    <h2 className=" text-[16px] lg:text-2xl tColor  font-medium  rounded-full py-2 md:py-3"> <span className="font-semibold lg:pr-16 pr-10">Prise  </span>-: {detailcofi.prise}</h2>
                                    <h2 className=" text-[16px] lg:text-2xl tColor  font-medium  rounded-full py-2 md:py-3"> <span className="font-semibold lg:pr-16 pr-9">Taste  </span>-: {detailcofi.taste}</h2>

                                </div>
                            </div>
                        </div>
                    </div>
        }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Detail;