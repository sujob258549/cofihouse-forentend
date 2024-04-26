import { FaLeftLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Home/Footer";
import Swal from "sweetalert2";


const Addcafe = () => {
    const navigate = useNavigate();


    const handelSubmitCofi = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const chef = e.target.chef.value;
        const supplier = e.target.supplier.value;
        const taste = e.target.taste.value;
        const category = e.target.category.value;
        const prise = e.target.prise.value;
        const photourl = e.target.photourl.value;
        const newCoffee = { name, chef, supplier, taste, category, prise, photourl }
        console.log(newCoffee)

        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Success...",
                        text: "user coffee create success",
                        footer: '<a href="/">You add  success</a>'
                    });
                    navigate('/');

                }
            })
    }
    return (
        <>
            <div className="w-[90%] mx-auto">
                <Link to={'/'} className='btn btn-outline  text-[#374151] mt-10 text-3xl font-rancho'><FaLeftLong className='mr-5'></FaLeftLong>Back to home</Link>
                <div className="bg-[#F4F3F0] rounded-md mb-10 p-5 md:p-10 mt-10">
                    <div className=" w-full md:w-[70%] mx-auto text-center pb-10 ">
                        <h1 className="text-5xl text-center text-[#374151] font-rancho">Add New Coffee</h1>
                        <p className="pt-5">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                    </div>
                    <div >
                        <form onSubmit={handelSubmitCofi} className="">
                            <div className="form-control">
                                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-5">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" name="name" placeholder="Enter coffee name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Chef</span>
                                        </label>
                                        <input type="text" name="chef" placeholder="Enter coffee chef" className="input input-bordered" required />
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-5">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Supplier</span>
                                        </label>
                                        <input type="text" name="supplier" placeholder="Enter coffee supplier" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Taste</span>
                                        </label>
                                        <input type="text" name="taste" placeholder="Enter coffee taste" className="input input-bordered" />
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-5">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Category</span>
                                        </label>
                                        <input type="text" name="category" placeholder="Enter coffee category" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Prise</span>
                                        </label>
                                        <input type="number" name="prise" placeholder="Inter your prise" className="input input-bordered" required />
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name="photourl" placeholder="Cofi photo url" className="input input-bordered" required />
                                </div>

                            </div>
                            <button className="btn text-[#331A15] text-2xl font-rancho btn-outline  mt-5 w-full text-center bg-[#D2B48C]">Add Coffee</button>
                        </form>
                    </div>
                </div>
            </div>

            <Footer></Footer>

        </>
    );
};

export default Addcafe;