// import PropTypes from 'prop-types';
import icon1 from "../../assets/images/icons/1.png"
import icon2 from "../../assets/images/icons/2.png"
import icon3 from "../../assets/images/icons/3.png"
import icon4 from "../../assets/images/icons/4.png"
const Header = () => {
    return (
<>
   <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/vjS6KWL/3.png)'}}>
      {/* <div className="hero-overlay bg-opacity-60"></div> */}
        <div className="hero-content flex  text-neutral-content">
          <div className="w-2/3 ml-auto lg:mr-[-100px] text-left flex gap-4 flex-col">
            <h1 className="mb-5 text-[35px] text-left font-bold">Would you like a Cup of Delicious Coffee?</h1>
            <p className="mb-5 text-left text-[16px]">{`It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.`}</p>
            <button className="btn btn-primary hover:text-white border-2 hover:border-white hover:bg-[transparent] w-fit bg-[#E3B577] rounded-md border-[#E3B577] text-[20px] text-[#242222]">Learn More</button>
          </div>
        </div>
    </div>
    <div className="grid grid-cols-4 px-[150px] py-10 gap-10 bg-gray-200">
        <div className="flex flex-col gap-3">
            <img className="w-[50px]" src={icon1} alt="" />
            <h1 className="text-[25px] text-[#331A15] font-semibold">Awesome Aroma</h1>
            <p className="text-[16px] text-gray-600">You will definitely be a fan of the design & aroma of your coffee</p>
        </div>
        <div className="flex flex-col gap-3">
            <img className="w-[50px]" src={icon2} alt="" />
            <h1 className="text-[25px] text-[#331A15] font-semibold">High Quality</h1>
            <p className="text-[16px] text-gray-600">We served the coffee to you maintaining the best quality</p>
        </div>
        <div className="flex flex-col gap-3">
            <img className="w-[50px]" src={icon3} alt="" />
            <h1 className="text-[25px] text-[#331A15] font-semibold">Pure Grades</h1>
            <p className="text-[16px] text-gray-600">The coffee is made of the green coffee beans which you will love</p>
        </div>
        <div className="flex flex-col gap-3">
            <img className="w-[50px]" src={icon4} alt="" />
            <h1 className="text-[25px] text-[#331A15] font-semibold">Proper Roasting</h1>
            <p className="text-[16px] text-gray-600">Your coffee is brewed by first roasting the green coffee beans</p>
        </div>
        
    </div>
</>
    );
};

Header.propTypes = {
    
};

export default Header;