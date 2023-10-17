// import PropTypes from 'prop-types';
import backgroundImage01 from "../../assets/images/more/11.png"
import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleAddCoffee = e =>{
        e.preventDefault();
        console.log('add coffee button clicked!');
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const price = form.price.value;
        const photo = form.photo.value;
        const newCoffeeData = {name, chef, supplier, taste, category, details, price, photo};
        //send data to the server
        fetch('https://coffee-shop-server-nine.vercel.app/coffee', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffeeData),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee added successfully!',
                    icon: 'success',
                    confirmButtonText: 'Close'
                  })
                  form.reset();
            }
        })
        console.log(newCoffeeData);
    }
    const bgStyle = {
        backgroundImage: `url(${backgroundImage01})`,
        backGroundSize: 'cover'
    }
    return (
       
        <div style={bgStyle} className=" py-[70px]">
           <div className="bg-gray-100 w-[80%] mx-auto  py-[70px]">
            <h1 className="text-center text-[45px] text-[#374151]">Add New Coffee</h1>
            <p className="py-8 mx-auto text-center text-[18px] w-[80%] text-gray-400">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            <form onSubmit={handleAddCoffee} className="w-[80%] mx-auto">
               <div className="form-container flex flex-col md:flex-row gap-[35px] mx-auto ">
                 {/* left side */}
                 <div className="leftside w-1/2">
                    <div className="mt-6">
                        <h1 className="text-gray-600 text-xl font-semibold">Name</h1>
                        <input type="text" name="name" id="name" placeholder="Enter coffee name" className="w-full bg-white border-2 border-white hover:border-gray-300 mt-4 p-3 rw-full bg-white border-2 border-white hover:border-[#331A15] mt-4 p-3 rounded-md duration-200ounded-md duration-200"  />
                    </div>
                   
                    <div className="mt-6">
                        <h1 className="text-gray-600 text-xl font-semibold">Supplier</h1>
                        <input type="text" name="supplier" id="supplier" placeholder="Enter coffee supplier" className="w-full bg-white border-2 border-white hover:border-gray-300 mt-4 p-3 rw-full bg-white border-2 border-white hover:border-[#331A15] mt-4 p-3 rounded-md duration-200ounded-md duration-200"  />
                    </div>

                    <div className="mt-6">
                        <h1 className="text-gray-600 text-xl font-semibold">Category</h1>
                        <input type="text" name="category" id="category" placeholder="Enter coffee category" className="w-full bg-white border-2 border-white hover:border-gray-300 mt-4 p-3 rw-full bg-white border-2 border-white hover:border-[#331A15] mt-4 p-3 rounded-md duration-200ounded-md duration-200"  />
                    </div>

                </div>

                {/* right side */}
                <div className="rightside w-1/2">

                    <div className="mt-6">
                        <h1 className="text-gray-600 text-xl font-semibold">Chef</h1>
                        <input type="text" name="chef" id="chef" placeholder="Enter coffee chef" className="w-full bg-white border-2 border-white hover:border-gray-300 mt-4 p-3 rw-full bg-white border-2 border-white hover:border-[#331A15] mt-4 p-3 rounded-md duration-200ounded-md duration-200"  />
                    </div>
                    <div className="mt-6">
                        <h1 className="text-gray-600 text-xl font-semibold">Taste</h1>
                        <input type="text" name="taste" id="taste" placeholder="Enter coffee taste" className="w-full bg-white border-2 border-white hover:border-gray-300 mt-4 p-3 rw-full bg-white border-2 border-white hover:border-[#331A15] mt-4 p-3 rounded-md duration-200ounded-md duration-200"  />
                    </div>
                    
                    <div className="mt-6">
                        <h1 className="text-gray-600 text-xl font-semibold">Price</h1>
                        <input type="number" name="price" id="price" placeholder="Enter coffee Price" className="w-full bg-white border-2 border-white hover:border-gray-300 mt-4 p-3 rw-full bg-white border-2 border-white hover:border-[#331A15] mt-4 p-3 rounded-md duration-200ounded-md duration-200"  />
                    </div>
                    
                </div>
                
               </div>
               <div className="mt-6">
                    <h1 className="text-gray-600 text-xl font-semibold">Details</h1>
                    <input type="text" name="details" id="details" placeholder="Enter coffee details" className="w-full bg-white border-2 border-white hover:border-gray-300 mt-4 p-3 rw-full bg-white border-2 border-white hover:border-[#331A15] mt-4 p-3 rounded-md duration-200ounded-md duration-200"  />
               </div>
               <div className="mt-6">
                    <h1 className="text-gray-600 text-xl font-semibold">Photo</h1>
                    <input type="text" name="photo" id="photo" placeholder="Enter your photo URL" className="w-full bg-white border-2 border-white hover:border-gray-300 mt-4 p-3 rw-full bg-white border-2 border-white hover:border-[#331A15] mt-4 p-3 rounded-md duration-200ounded-md duration-200"  />
                </div>
                <input type="submit" value="Add Coffee" className="w-full mt-6 bg-[#D2B48C] border-2 border-[#331A15] rounded-md py-4 text-center text-[#331A15] font-bold" />
            </form>

           </div>
           
        </div>
    );
};

AddCoffee.propTypes = {
    
};

export default AddCoffee;