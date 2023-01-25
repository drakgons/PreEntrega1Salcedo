import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

import CartWidget from "./CartWidget"


const NavBar = ()=> {
// const logo = "https://d2jcoqvpcepbfn.cloudfront.net/wp-content/uploads/2020/08/logow.jpg";
    return(
        <>
        <div className="flex max-w-[1240px] mx-auto items-center p-4 justify-between">
            <div className="cursor-pointer">
                <h1 className='font-bold text-3xl sm:text-4xl lg:text-4xl'>El Tablón!</h1>
            </div>
            <ul className="hidden md:flex items-center cursor-pointer">
                <li className="p-4 rounded-lg px-3 py-2 text-black font-medium hover:bg-slate-900 hover:text-slate-100">Inicio</li>
                <li className="p-4 rounded-lg px-3 py-2 text-black font-medium hover:bg-slate-900 hover:text-slate-100">Productos</li>
                <li className="p-4 rounded-lg px-3 py-2 text-black font-medium hover:bg-slate-900 hover:text-slate-100">Blog</li>
                <li className="p-4 rounded-lg px-3 py-2 text-black font-medium hover:bg-slate-900 hover:text-slate-100">Contacto</li>
            </ul>
        <div className='flex'>
        <div className="flex justify-center h-10 rounded-md sm:pl-2 sm:w-[400px] lg:w-[400px] items-center">
            
            {/* <FontAwesomeIcon icon={faMagnifyingGlass} className="bg-black text-white p-[10px] h-5 rounded-md w-5 font-bold "/> */}
            
        </div>
                <div className="payout">
                    <CartWidget />
                </div>
        </div>
        </div>
        </>
       
    )
}

export default NavBar

