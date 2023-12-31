// import PropTypes from 'prop-types';
// import { AiOutlineUser } from 'react-icons/ai';
import { useContext,  } from "react";
import backgroundImage01 from "../../assets/images/more/11.png"
import { AuthContext } from "../../Providers/AuthProvider";
import userPic from "../../assets/images/more/user.png"
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";
import { BsArrowLeft } from 'react-icons/bs';


const SignUp = () => {
    const {createUser}= useContext(AuthContext)
    // const [user, setUser] = useState(null)
    const handleSignUp = e =>{
        e.preventDefault();
        console.log('add coffee button clicked!');
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        const newUserData = {name, email, password, photo};
        console.log(newUserData);
        createUser(email, password)
        .then(result =>{
            console.log(result.user);
            const createdAt = result.user?.metadata?.creationTime;
            const user ={email, photo, createdAt }
            //https://coffee-shop-server-nine.vercel.app
            fetch('https://coffee-shop-server-nine.vercel.app/user', {
                method: "POST",
                headers: {
                    'content-type': "application/json"
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data=>{
                                 
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'New User added successfully!',
                        imageUrl: user.photoURL || userPic, 
                        imageAlt: user.name,
                        confirmButtonText: 'Close'
                      })
                      form.reset();
                }
            })

        })
        .catch(error=> {
            console.error(error.message);
            Swal.fire({
                title: 'Failed!',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'Close'
              })
        })
    }
    const bgStyle = {
        backgroundImage: `url(${backgroundImage01})`,
        backGroundSize: 'cover'
    }
    return (
   
        <div style={bgStyle} className=" py-[70px]">
        <NavLink className={"flex gap-2 items-center mx-[150px] text-[30px] font-bold"} to="/"><BsArrowLeft/>Back to home</NavLink>
           <div className="bg-gray-100 w-[80%] mx-auto mt-[50px] py-[70px]">
            <h1 className="text-center text-[45px] text-[#374151]">Please Sign Up</h1>
            {/* <p className="py-8 mx-auto text-center text-[18px] w-[80%] text-gray-400">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p> */}
            <form onSubmit={handleSignUp} className="w-[80%] mx-auto">
                <div className="mt-6">
                    <h1 className="text-gray-600 text-xl font-semibold">Name</h1>
                    <input type="text" name="name" id="name" required placeholder="Enter Your Name" className="w-full bg-white border-2 border-white hover:border-gray-300 mt-4 p-3 rw-full bg-white border-2 border-white hover:border-[#331A15] mt-4 p-3 rounded-md duration-200 rounded-md duration-200"  />
                </div>
                <div className="mt-6">
                    <h1 className="text-gray-600 text-xl font-semibold">Email</h1>
                    <input type="email" name="email" id="email" required placeholder="Enter Your Email" className="w-full bg-white border-2 border-white hover:border-gray-300 mt-4 p-3 rw-full bg-white border-2 border-white hover:border-[#331A15] mt-4 p-3 rounded-md duration-200 rounded-md duration-200"  />
                </div>
                <div className="mt-6">
                    <h1 className="text-gray-600 text-xl font-semibold">Password</h1>
                    <input type="password" name="password" id="password" required placeholder="Enter Your Password" className="w-full bg-white border-2 border-white hover:border-gray-300 mt-4 p-3 rw-full bg-white border-2 border-white hover:border-[#331A15] mt-4 p-3 rounded-md duration-200 rounded-md duration-200"  />
                </div>
                <div className="mt-6">
                    <h1 className="text-gray-600 text-xl font-semibold">Photo URL</h1>
                    <input type="text" name="photo" id="photo" required placeholder="Enter Your Photo's URL" className="w-full bg-white border-2 border-white hover:border-gray-300 mt-4 p-3 rw-full bg-white border-2 border-white hover:border-[#331A15] mt-4 p-3 rounded-md duration-200 rounded-md duration-200"  />
                </div>
                <input type="submit" value="Sign Up" className="w-full mt-6 bg-[#D2B48C] border-2 border-[#331A15] rounded-md py-4 text-center text-[#331A15] font-bold" />
            </form>

           </div>
           
        </div>
    );
};

SignUp.propTypes = {
    
};

export default SignUp;