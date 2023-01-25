import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'


const CartWidget = () =>{
    return(
        <>
        <div className='favorite relative'>
            {/* <FontAwesomeIcon icon={faCartShopping} size="2x" color="white" /> */}
            <FontAwesomeIcon icon={faCartShopping} className="bg-black text-white p-[10px] h-5 rounded-md w-5 font-bold "/>
            <span className="w-[18px] h-[18px] rounded-full bg-yellow-400 absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px]"> 0 </span>
        </div>
        </>
    )
}

export default CartWidget