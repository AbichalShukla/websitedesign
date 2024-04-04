import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './SignUpValidation'
import axios from 'axios'
import '../style.css'
import Header from '../Header/Header'
import HeaderList from '../Header/HeaderList'
import Footer from '../FooterPage/Footer'

function Signup() {

      const [values, setValues] = useState(
        {
          name:'',
          email:'',
          password:''
        }
      )

      const navigate = useNavigate();
      const [errors, setErrors] = useState({})
      
      const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
      }

      const handleSubmit = (event) => {
          event.preventDefault();
          setErrors(Validation(values))
          if(errors.name === "" && errors.email === "" && errors.password === ""){
            axios.post('http://localhost:8081/signup', values)
            .then(res => {
              navigate('/');
            })
            .catch(err => console.log(err));
          }
      }

  return (
    <div>
      <Header/>
      
      <div className='d-flex justify-content-center align-items-center bg-white  vh-100 login'>
      <div className='loginBg p-4 rounded w-25'>
      <form action='' onClick={handleSubmit}>
        <h2 className='text-center'>Sign Up</h2>
        <div className='mb-3' >
            <label htmlFor='name'><strong>Name</strong></label>
            <input type='text' placeholder='Enter name' name='name'
            onChange={handleInput} className='form-control rounded-0'></input>
            {errors.name && <span className='text-danger'> {errors.name}</span>}
        </div>
        <div className='mb-3' >
            <label htmlFor='email'><strong>Email</strong></label>
            <input type='email' placeholder='Enter Email' name='email'
           onChange={handleInput} className='form-control rounded-0'></input>
           {errors.email && <span className='text-danger'> {errors.email}</span>}
        </div>
        <div className='mb-3'>
            <label htmlFor='password'><strong>Password</strong></label>
            <input type='password' placeholder='Enter password' name='password'
            onChange={handleInput} className='form-control rounded-0'></input>
            {errors.password && <span className='text-danger'> {errors.password}</span>}
        </div>
        <button className='btn btn-success w-100 rounded-0'>Sign up</button>
        <p>You are agree to our terms and policies</p>
        <Link to="/" className='btn btn-default border w-100 rounded-0 text-decoration-none bg-light'>Login</Link>
      </form>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Signup
