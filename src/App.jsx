import { NavLink, useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Components/CoffeeCard/CoffeeCard';
import { useState } from 'react';
import Header from './Components/Header/Header';
import Gallery from './Components/Gallery/Gallery';
// import cupIcon from "../src/assets/images/icons/1.png"
function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees)

  return (
    <>
    <Header/>      
    <div className='my-[70px]'>
      <h1 className='text-[20px] text-[#1B1A1A] text-center'>--- Sip & Savor ---</h1>
      <h1 className='text-[55px] text-[#331A15] text-center font-bold py-1'>Our Popular Products</h1>
      <NavLink to="/addcoffee" className="flex items-center justify-center pb-8"><button className='bg-[#E3B577] py-2 px-4 text-white font-semibold rounded-md border-2 border-[#331A15]'>Add Coffee</button></NavLink>
      {/* card */}
      <div className="grid grid-cols-2 gap-8 mx-[150px]">
      {
        coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
      }
      </div>
    </div>
    <Gallery/>
    </>
  )
}

export default App
