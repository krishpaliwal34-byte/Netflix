import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import './Signup.css'
import axios from 'axios'

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        "http://localhost:4900/api/auth/login",
        {
          email: data.email,
          password: data.password,
        }
      );

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        navigate("/");
        alert(res.data.msg)
        window.location.reload();
      } else {
        alert(res.data.msg);
      }

    } catch (err) {
      console.log(err);
      alert("Login failed");
    }
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <h2>Login</h2>

        <form onSubmit={handleSubmit(onSubmit)}>

          <input
            {...register('email', { required: "Email is required" })}
            placeholder='Email'
          />
          {errors.email && <span>{errors.email.message}</span>}

          <input
            {...register('password', {
              required: "Password is required",
              minLength: { value: 3, message: "Minimum 3 characters" }
            })}
            placeholder='Password'
            type='password'
          />
          {errors.password && <span>{errors.password.message}</span>}

          <button type='submit'>Login</button>

          <p className="bottom-text">
            Don't have an account? <Link to='/signup'>Signup</Link>
          </p>

        </form>
      </div>
    </div>
  )
}

export default Login