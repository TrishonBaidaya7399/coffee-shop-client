// import PropTypes from 'prop-types';
import logo from "../../assets/images/more/logo1.png"
import { BsFacebook,BsTwitter, BsInstagram, BsLinkedin, BsFillTelephoneFill } from 'react-icons/bs';
import {MdEmail, MdLocationOn } from 'react-icons/md';
import backgroundImageUrl from "../../assets/images/more/28.jpg"
import backgroundImageCover from "../../assets/images/more/13.jpg"
const Footer = () => {
    const divStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImageUrl})`, 
        backgroundSize: 'cover', 
    };
    const divCover = {
        backgroundImage: `url(${backgroundImageCover})`, 
        backgroundSize: 'cover', 
    };
    return (
        <>
        <div className= "px-[150px] flex gap-[50px] py-[50px]" style={divCover}>
            
        <div className="details w-1/2 ">
                <img className="w-[75px]" src={logo} alt="" />
                <h1 className="text-[#331A15] text-[45px] font-bold">Espresso Emporium</h1>
                <p>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                <div className="social-icons flex gap-4 text-[#331A15] text-[40px] pt-8">
                <BsFacebook/>
                <BsTwitter/>
                <BsInstagram/>
                <BsLinkedin/>
                </div>
                <h1 className="text-[#331A15] text-[35px] font-semibold py-8">Get in Touch</h1>
                <div className="social-icons flex flex-col gap-4 ">
                    <div className="flex gap-2 items-center text-[#331A15] text-[20px]">
                        <BsFillTelephoneFill/><p className="text-gray-500 text-[18px]">+88 01533 333 333</p>
                    </div>
                    <div className="flex gap-2 items-center text-[#331A15] text-[20px]">
                        <MdEmail/><p className="text-gray-500 text-[18px]">info@gmail.com</p>
                    </div>
                    <div className="flex gap-2 items-center text-[#331A15] text-[20px]">
                        <MdLocationOn/><p className="text-gray-500 text-[18px]">72, Wall street, King Road, Dhaka</p>
                    </div>
                </div>
            </div>
            <div className="contact w-1/2 pt-[90px]">
            <h1 className="text-[#331A15] text-[45px] font-semibold">Connect with Us</h1>
            <form>
                <input type="text" name="name" id="name" placeholder="Name" className="p-4 mb-4 text-gray-400 bg-white w-full rounded-md" />
                <input type="email" name="email" id="email" placeholder="Email" className="p-4 mb-4 text-gray-400 bg-white w-full rounded-md" />
                <input type="text" name="message" id="message" placeholder="Message" rows="3" className="p-4 mb-4 text-gray-400 bg-white w-full rounded-md" />
                <input type="submit" value="Send Message" className="btn py-2 px-4 text-[#331A15] border-[3px] border-[#331A15] rounded-full text-[20px] font-bold" />
            </form>
            </div>
        </div>
            <div className="copyright text-white text-xl py-3 text-center " style={divStyle}>Copyright Espresso Emporium ! All Rights Reserved</div> 
        </>
       
    );
};

Footer.propTypes = {
    
};

export default Footer;