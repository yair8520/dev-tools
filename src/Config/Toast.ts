import { ToastContainerProps, Zoom } from "react-toastify";


export const toastConfig: ToastContainerProps = {
    autoClose: 2000,
    pauseOnHover: true,
    position: 'bottom-center',
    newestOnTop: true,
    transition: Zoom

};