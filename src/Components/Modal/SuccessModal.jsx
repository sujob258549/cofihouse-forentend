import { Link } from "react-router-dom";
import successimg2 from '../../assets/images/icons/success2.png'

const SuccessModal = () => {
    return (
        <div>
            <div>
                {/* The button to open modal */}
                <label htmlFor="my_modal_7" className="btn">open modal</label>

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my_modal_7" className="modal-toggle" />
                <div className="modal" role="dialog">
                    <div className="modal-box text-center">
                        <img className='mx-auto' src={successimg2} alt="" />
                        <h3 className="text-lg py-5 font-bold">Are you sure?</h3>
                        <p className="py-4">Are you sure that you want to delete it?</p>
                        <div className='flex justify-end'>
                            <Link to={'/'} className='btn text-white  bg-green-600'>Ok</Link>
                        </div>
                    </div>
                    <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
                </div>
            </div>
        </div>
    );
};

export default SuccessModal;