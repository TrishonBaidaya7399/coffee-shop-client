import PropTypes from 'prop-types';
import { AiFillEye } from 'react-icons/ai';
import { MdEdit, MdDelete } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2'

// import img from '../../assets/images/coffee cups/5.png'

const CoffeeCard = ({coffee, setCoffees, coffees}) => {
    const {_id, name, chef, photo, price }= coffee;
    console.log(coffee);
    const handleDelete= _id =>{
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "Are you sure that you want to delete it?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#E64942',
            cancelButtonColor: '#63C7F6',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                  fetch(`https://coffee-shop-server-nine.vercel.app/coffee/${_id}`, {
                    method: "DELETE"
                  })
                  .then(res=>res.json())
                  .then(data => {
                    if(data.deletedCount>0){
                        console.log(data);
                        Swal.fire({
                            title: 'Good Luck !!!',
                            text: 'Deleted coffee detailse',
                            icon: 'success',
                            confirmButtonColor:'#63C7F6',
                            confirmButtonText: 'OK'
                          })
                        const remaining = coffees.filter(cof=> cof._id !== _id);
                        setCoffees(remaining)
                        }

                  })
            }
          })
    }
    return (
        <div className='flex gap-8 bg-gray-100 items-center justify-between rounded-md p-8'>
            <div className="image">
                <img className='' src={photo} alt="" />
            </div>
            <div className="details w-full">
                <p className='text-xl text-gray-500 pb-2'><span className='text-black font-semibold'>Name: </span>{name}</p>
                <p className='text-xl text-gray-500 pb-2'><span className='text-black font-semibold'>Chef: </span>{chef}</p>
                <p className='text-xl text-gray-500 '><span className='text-black font-semibold'>Price: </span>{price}TK</p>
            </div>
            <div className="buttons flex flex-col gap-4">
                <div className='bg-[#D2B48C] w-[40px] h-[40px] text-[20px] rounded-lg flex items-center justify-center text-white'><AiFillEye/></div>
                <NavLink to={`/updateCoffee/${_id}`}>
                <div className='bg-[#3C393B] w-[40px] h-[40px] text-[20px] rounded-lg flex items-center justify-center text-white'><MdEdit/></div>
                </NavLink>
                <div onClick={()=>handleDelete(_id)} className='bg-[#EA4744] w-[40px] h-[40px] text-[20px] rounded-lg flex items-center justify-center text-white'><MdDelete/></div>
            </div>
        </div>
    );
};

CoffeeCard.propTypes = {
    coffee : PropTypes.node,
    setCoffees: PropTypes.node,
    coffees: PropTypes.node
};

export default CoffeeCard;