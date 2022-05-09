import React, { useState } from 'react'
import useAuth from '../../../hooks/useAuth'

export default function Login() {
  const [email,setEmail] = useState('an.tran2@monstar-lab.com');
  const [password,setPassword] = useState(123);
  let {login} = useAuth()
  return (
   <>
    <div className="container flex align-items-center auth">
      <h3 className="auth-title">Login</h3>
      <form className="form">
        <input placeholder='Email' onChange={(e)=> setEmail(e.target.value)} type="text" />
        <input placeholder='Password' onChange={(e)=> setPassword(e.target.value)} type="password" />
      </form>
      <button onClick={() => login({email},{password})} className="btn">Login</button>
    </div>

   </>
  )
}
