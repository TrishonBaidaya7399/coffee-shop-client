// import PropTypes from 'prop-types';
import { useState } from "react";
import backgroundImage01 from "../../assets/images/more/11.png"
import { useLoaderData } from "react-router-dom";
import { MdDelete } from 'react-icons/md';
import Swal from "sweetalert2";

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers)
    const bgStyle = {
      backgroundImage: `url(${backgroundImage01})`,
      backGroundSize: 'cover'
    }

    const handleDelete= _id =>{
      // console.log(user.name);
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
                  fetch(`https://coffee-shop-server-nine.vercel.app/user/${_id}`, {
                    method: "DELETE"
                  })
                  .then(res=>res.json())
                  .then(data => {
                    if(data.deletedCount>0){
                        console.log(data);
                        Swal.fire({
                            title: 'Good Luck !!!',
                            text: 'Deleted user details',
                            icon: 'success',
                            confirmButtonColor:'#63C7F6',
                            confirmButtonText: 'OK'
                          })
                        const remaining = users.filter(user=> user._id !== _id);
                        setUsers(remaining)
                        }

                  })
            }
          })
    }



return (
<div style={bgStyle} className="overflow-x-auto px-[150px] py-[70px]">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th className="text-2xl font-bold">Avatar</th>
        <th className="text-2xl font-bold">Email</th>
        <th className="text-2xl font-bold">Created At</th>
        <th className="text-2xl font-bold">Last Logged In</th>
        <th className="text-2xl font-bold">Delete</th>
        
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        users.map(user => 
        <tr key={user._id}>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={user.photo} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                
              </div>
            </td>
            <td className="text-[16px] font-semibold text-gray-500">{user.email}</td>
            <td>{user.createdAt}</td>
            <td>{user.lastLoggedAt}</td>
            <th>
              <button onClick={()=> handleDelete(user._id)} className="text-red-500 text-2xl"><MdDelete/></button>
            </th>
          </tr>
        )
      }
    </tbody>   
  </table>
</div>
    );
};

Users.propTypes = {
    
};

export default Users;