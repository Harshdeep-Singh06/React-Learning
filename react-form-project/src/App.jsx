import { useState } from 'react'
import './App.css'
import {useForm} from "react-hook-form"


function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
   <div className='flex flex-col justify-center items-center h-screen border bg-black'>

     <form className='px-10 py-10 rounded-2xl shadow-2xl shadow-sky-900'>

    <div className='mb-4'>
      <label className='text-white text-xl font-serif shadow-xl shadow-sky-700'>First Name: </label>
      <input className='shadow-xl shadow-sky-900 border-2 border-sky-500 outline-none rounded-2xl ml-2 px-3 text-white'/>
    </div>

    <div className='mb-4'>
      <label className='text-white text-xl font-serif shadow-xl shadow-sky-700'>Middle Name: </label>
      <input className='shadow-xl shadow-sky-900 border-2 border-sky-500 outline-none rounded-2xl ml-2 px-3 text-white'/>
    </div>

    <div className='mb-4'>
      <label className='text-white text-xl font-serif shadow-xl shadow-sky-700'>Last Name: </label>
      <input className='shadow-xl shadow-sky-900 border-2 border-sky-500 outline-none rounded-2xl ml-2 px-3 text-white'/>
    </div>


   </form>
   </div>
  )
}

export default App
