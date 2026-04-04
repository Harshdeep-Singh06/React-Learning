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

  function onSubmit(data){
    console.log("Submitting the form",data )
  }

  return (
   <div className='flex flex-col justify-center items-center h-screen border bg-black'>

     <form onSubmit={handleSubmit(onSubmit)} className='px-10 py-10 rounded-2xl shadow-2xl shadow-sky-900 border-3 border-sky-700'>

    <div className='mb-4'>
      <label className='text-white text-xl font-serif shadow-xl shadow-sky-700'>First Name: </label>
      <input {...register("firstName")} className='shadow-xl shadow-sky-900 border-2 border-sky-500 outline-none rounded-2xl ml-2 px-3 text-white'/>
    </div>

    <div className='mb-4'>
      <label className='text-white text-xl font-serif shadow-xl shadow-sky-700'>Middle Name: </label>
      <input {...register("MiddleName")} className='shadow-xl shadow-sky-900 border-2 border-sky-500 outline-none rounded-2xl ml-2 px-3 text-white'/>
    </div>

    <div className='mb-4'>
      <label className='text-white text-xl font-serif shadow-xl shadow-sky-700'>Last Name: </label>
      <input {...register("LastName")} className='shadow-xl shadow-sky-900 border-2 border-sky-500 outline-none rounded-2xl ml-2 px-3 text-white'/>
    </div>

     <button 
          type="submit"
          className="mt-4 ml-33 border-4 border-sky-500 text-white font-semibold px-4 py-1 rounded-2xl shadow-sky-900 text-sm hover:font-semibold hover:border-4 hover:border-sky-300 transition">
          Submit
        </button>

  </form>
   </div>
  )
}

export default App
