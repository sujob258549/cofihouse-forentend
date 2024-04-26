import { useState } from "react";
import { FaLeftLong } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UseColoction = () => {
    const users = useLoaderData();
    const [usersColection, setuserColection] = useState(users)
    console.log(users)

    const handeldelateUser = _id => {
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
                fetch(`http://localhost:5000/users/${_id}`, {
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
                const updatedUsers = usersColection.filter(user => user._id !== _id);
                setuserColection(updatedUsers);
            }
        });
    }
   
    return (
        <div className="image3">
            <div className="hero-overlay text-white">
                <div className="w-[90%] md:w-[80%] mx-auto">
                    <Link to={'/'} className='btn btn-outline  text-white mt-10 text-3xl font-rancho'><FaLeftLong className='mr-5'></FaLeftLong>Back to home</Link>


                    <div className="overflow-x-auto py-10">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className="text-white">
                                    <th></th>
                                    <th className="text-xl font-bold">Email</th>
                                    <th className="text-xl font-bold">Create user time</th>
                                    <th className="text-xl font-bold">Last Logine</th>
                                    <th className="text-xl font-bold">Delate User</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    usersColection.map((user, index) => (
                                        <tr key={user._id}>
                                            <th>{index + 1}</th>
                                            <td>{user.email}</td>
                                            <td>{user.creatAtime}</td>
                                            <td>{user.lastlogeat}</td>
                                            <td>
                                                <div className="tooltip" data-tip="Detete">
                                                    <button onClick={() => handeldelateUser(user._id)} className="btn hover:bg-slate-400  bg-[#ea4744]">
                                                        < MdDelete className="  text-white md:text-xl"></MdDelete>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div >
            </div>
        </div>
    );
};

export default UseColoction;