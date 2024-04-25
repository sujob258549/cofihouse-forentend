import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Errorpage from "../Errorpage/Errorpage";
import Suremodal from "../Modal/Suremodal";
import SuccessModal from "../Modal/SuccessModal";
import Addcafe from "../Addcofe/Addcafe";
import PopularProduct from "../Home/PopularProduct";
import Update from "../Update/Update";
import Detail from "../Detail/Detail";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Home></Home>,
            errorElement: <Errorpage></Errorpage>
        },
        {
            path: '/suremodal',
            element:<Suremodal></Suremodal>
        },
        {
            path: '/product',
            element:<PopularProduct></PopularProduct>,
            // loader:()=> fetch('http://localhost:5000/coffee')
        },
        {
            path: '/successmodal',
            element:<SuccessModal></SuccessModal>
        },
        {
            path: '/addcoffe',
            element:<Addcafe></Addcafe>
        },
        {
            path: '/detail/:id',
            element:<Detail></Detail>,
            loader: ({params})=> fetch(`http://localhost:5000/coffee/${params.id}`)
        },
        {
            path: '/update/:id',
            element:<Update></Update>,
            loader: ({params})=> fetch(`http://localhost:5000/coffee/${params.id}`)
        }
    ]
)

export default router;