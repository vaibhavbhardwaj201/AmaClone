import React, { useState } from 'react';
import './Login.css';
import { Link,useNavigate } from "react-router-dom";
import {auth} from "./firebase";
import firebase from './firebase';


function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signIn = e => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password).then(auth=>{
      history.push('/')
    })
    .catch(error=>alert(error.message))
  }




  function register(e) {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password).then((auth) => {
if(auth){
  history.push('/')
}      
      console.log(auth);
    }).catch(error => alert(error.message))
  }

  return (
    <div className='login'>
      <Link to="/">
        <img className='login__logo' src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="" />
      </Link>
      <div className='login__container'>
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
          <h5>Password</h5>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
          <button className='login__signInButton' type='submit' onClick={signIn}>Sign In</button>

        </form>
        <p>
          By signing-in you agree to the terms and conditions of use
          and sale of Amazon Clone.
        </p>
        <button className='login__regitserButton' onClick={register}>Create your amazon account</button>
      </div>
    </div>
  )
}

export default Login