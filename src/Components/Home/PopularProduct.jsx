import { FaCoffee, FaEye, FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const PopularProduct = () => {
    const [coffees, setcoffees] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/coffee')
            .then(res => res.json())
            .then(data => {
                setcoffees(data)
            })

    }, [])



    const handeldelate = _id => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data.deteteCount > 0)
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });



                    })
                const updatedUsers = coffees.filter(coffee => coffee._id !== _id);
                setcoffees(updatedUsers);
            }
        });
    }



    // const coffees = useLoaderData();
    console.log(coffees)
    return (
        <div className='  w-[90%] md:w-[80%] mx-auto py-10 md:py-20'>
            <p className="text-center">--- Sip & Savor --- </p>
            <h2 className="text-3xl md:text-5xl text-[#331A15] font-rancho text-center py-5">Our Popular Products</h2>
            <Link to={'/addcoffe'} className="bg-yellow-600 flex gap-2 py-2 px-3 text-white text-2xl rounded-[4px] border border-black text-center font-rancho w-36 mx-auto">Add Coffee <span className="text-black items-end flex"><FaCoffee /></span></Link>
            <div className="grid grid-cols-1 md:grid-cols-2 py-10 gap-6">

                {
                    coffees.map(coffee => (
                        <div key={coffee._id}>
                            <div className="bg-[#F5F4F1] flex gap-5 items-center py-12 px-10 rounded-md">
                                <div className="w-[40%] end-0"><img className="w-full" src={coffee.photourl} alt="" /></div>
                                <div className="w-[50%]">
                                    <p><span className="text-[16px] font-semibold">Name :</span> {coffee.name}</p>
                                    <p className="py-3"><span className="text-[16px] font-semibold">Chef:</span>  {coffee.chef}</p>
                                    <p><span className="text-[16px] font-semibold">Price :</span>  {coffee.prise}$</p>
                                </div>
                                <div className="w-[10%] flex md:flex-col flex-row ">
                                    <div className=" ">
                                        <Link to={`/detail/${coffee._id}`}><button className=" hover:bg-slate-400 btn bg-[#D2B48C]">
                                            < FaEye className=" text-white  md:text-xl"></FaEye>
                                        </button>
                                        </Link>
                                        <Link to={`/update/${coffee._id}`} className=" hover:bg-slate-400 btn bg-[#000] my-3">
                                            < FaPen className=" text-white  md:text-xl"></FaPen>
                                        </Link>
                                        <button onClick={() => handeldelate(coffee._id)} className="btn hover:bg-slate-400  bg-[#ea4744]">
                                            < MdDelete className="  text-white md:text-xl"></MdDelete>
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default PopularProduct;