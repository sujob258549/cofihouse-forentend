
import { Link } from 'react-router-dom';
import successimg from '../../assets/images/icons/success.png'
const Suremodal = () => {
    return (
        <div>
            {/* The button to open modal */}
            <label htmlFor="my_modal_7" className="btn">open modal</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box text-center">
                    <img className='mx-auto' src={successimg} alt="" />
                    <h3 className="text-lg py-5 font-bold">Are you sure?</h3>
                    <p className="py-4">Are you sure that you want to delete it?</p>
                <div className='flex justify-end'>
                <Link to={'/'} className='btn text-white  bg-red-600'>Ok</Link>
                </div>
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
            </div>
        </div>
    );
};

export default Suremodal;