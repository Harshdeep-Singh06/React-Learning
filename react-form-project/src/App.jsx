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
      <input {...register("firstName")} className='shadow-xl shadow-sky-900 border-2 border-sky-500 outline-none rounded-2xl ml-2 px-3 text-white  focus:border-sky-300'/>
      {errors.FirstName && <p className='font-semibold text-sky-200 ml-20 mt-3' >{errors.First.message}</p>}
    </div>

    <div className='mb-4'>
      <label className='text-white text-xl font-serif shadow-xl shadow-sky-700'>Middle Name: </label>
      <input {...register("MiddleName"), { required:"Middle Name is required",
      minLength:{value:3, message:'Minimum length atleast 3'},
       maxLength:{value:6, message: "Maximum length atleast 6"}
      }} className='shadow-xl shadow-sky-900 border-2 border-sky-500 outline-none rounded-2xl ml-2 px-3 text-white  focus:border-sky-300'/>
      {errors.MiddleName && <p className='font-semibold text-sky-200 ml-20 mt-3' >{errors.MiddleName.message}</p>}
    </div>

    <div className='mb-4'>
      <label className='text-white text-xl font-serif shadow-xl shadow-sky-700'>Last Name: </label>
      <input {...register("LastName",
       { pattern: {
        value: /^[A-Za-z]+$/i,
        message: "Put valid Last name"
      }  
       })} 
      className='shadow-xl shadow-sky-900 border-2 border-sky-500 outline-none rounded-2xl ml-2 px-3 text-white focus:border-sky-300'/>
      {errors.LastName && <p className='font-semibold text-sky-200 ml-20 mt-3' >{errors.LastName.message}</p>}
    </div>

     <button 
          type="submit"
          className="mt-4 ml-33 border-4 border-sky-500 text-sky-400 font-semibold px-4 py-1 rounded-2xl shadow-sky-900 text-sm hover:font-semibold hover:border-sky-300 hover:text-sky-200
          active:translate-y-2 transition">
          Submit
        </button>

  </form>
   </div>
  )
}

export default App
