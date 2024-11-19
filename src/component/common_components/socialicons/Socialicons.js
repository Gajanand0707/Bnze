import React from 'react'
import './Socialicons.css'
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterLine } from "react-icons/ri";
import { TiSocialLinkedin } from "react-icons/ti";
function Socialicons() {
    return (
        <div className="author-social">
            <div className='icons'><FaFacebookF /></div>
            <div className='icons'><RiTwitterLine /></div>
            <div className='icons'><TiSocialLinkedin /></div>
        </div>
    )
}

export default Socialicons
