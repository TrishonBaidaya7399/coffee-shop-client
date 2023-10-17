// import PropTypes from 'prop-types';
import img01 from '../../assets/images/cups/Rectangle 9.png'
import img02 from '../../assets/images/cups/Rectangle 10.png'
import img03 from '../../assets/images/cups/Rectangle 11.png'
import img04 from '../../assets/images/cups/Rectangle 12.png'
import img05 from '../../assets/images/cups/Rectangle 13.png'
import img06 from '../../assets/images/cups/Rectangle 14.png'
import img07 from '../../assets/images/cups/Rectangle 15.png'
import img08 from '../../assets/images/cups/Rectangle 16.png'

const Gallery = () => {
    return (
    <div className="pb-[70px]">
        <h1 className='text-[20px] text-[#1B1A1A] text-center'>--- Follow Us Now ---</h1>
        <h1 className='text-[55px] text-[#331A15] text-center font-bold py-1'>Follow on Instagram</h1>
        <div className="gallery grid grid-cols-4 gap-4 mx-[150px] pt-12">
            <div>
                <img src={img01} alt="" />
            </div>
            <div>
                <img src={img02} alt="" />
            </div>
            <div>
                <img src={img03} alt="" />
            </div>
            <div>
                <img src={img04} alt="" />
            </div>
            <div>
                <img src={img05} alt="" />
            </div>
            <div>
                <img src={img06} alt="" />
            </div>
            <div>
                <img src={img07} alt="" />
            </div>
            <div>
                <img src={img08} alt="" />
            </div>
          
        </div>    
    </div>
    );
};

Gallery.propTypes = {
    
};

export default Gallery;