import React from 'react'
import {useForm} from 'react-hook-form'
import {Link}  from 'react-router-dom'
import './Signup.css'
const Signup = () => {
     const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
  console.log(data);
};
  return (
    <>
    <div className="form-container">
        <h2>Signup</h2>
         <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('name' , {required: "Username is required"})} placeholder='Username' type='text'/>
            {errors.name && <span>{errors.name.message}</span>}
            <input {...register('email' , {required: "Email is required"})} placeholder='Email' type='text'/>
            {errors.email && <span>{errors.email.message}</span>}
            <input {...register('password' , {required: "Password is required" , minLength: { value: 3 , message: " Enter Minimum 3 digit "}})} placeholder='Password' type='password'/>
            {errors.password && <span>{errors.password.message}</span>}
            <input {...register('cpassword' , {required: "Password is required" , minLength: {value: 3 , message: "Enter Minimum 3 digit"}})} placeholder='Confirm Password' type='password'/>
            {errors.cpassword && <span>{errors.cpassword.message}</span>}
            <button type='submit'>Signup</button>
            <p>You Have Already Account Please <Link to='/login'>Login</Link></p>
        </form>
    </div>
      
    </>
  )
}

export default Signup
