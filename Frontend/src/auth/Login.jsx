import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import './Signup.css'
const Login = () => {
     const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => {
        console.log(data)
      }
  return (
    <>
      <div className="form-container">
        <h2>Login</h2>
         <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('email' , {required: "Email is required"})} placeholder='Email' type='text'/>
            {errors.email && <span>{errors.email.message}</span>}
            <input {...register('password' , {required: "Password is required" , minLength: { value: 3 , message: " Enter Minimum 3 digit "}})} placeholder='Password' type='password'/>
            {errors.password && <span>{errors.password.message}</span>}
            <button type='submit'>Login</button>
            <p>You  don't have any Account Please <Link to= '/signup'>Signup</Link></p>
            </form>
            </div>
    </>
  )
}

export default Login
