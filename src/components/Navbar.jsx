import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import "../styles/Nav.css"
const Navbar = ({size,setShow}) => {
  return (
    <nav>
        <div className='navBox'>
        <span onClick={()=>setShow(true)} style={{ cursor: "pointer"}}>
            TM Shop
        </span>

        <div className='cart'>
        <span>
        <i onClick={()=>setShow(false)}><FaCartShopping /></i>
        </span>
        <span>
          {size}
        </span>
        </div>
        </div>
    </nav>
  )
}

export default Navbar
