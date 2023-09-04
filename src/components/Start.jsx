import styled from 'styled-components'
import '../css/style.css'
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";


const Start = () => {

   const [err, setErr] = useState(false);
    const navigate = useNavigate()


    const handleSubmit = async (e)=>{
        e.preventDefault()
        
        /*const displayName = e.target[0].value;*/
        const email = e.target[0].value;
        const password = e.target[1].value;

        try{

            await signInWithEmailAndPassword(auth, email, password)
            navigate("/home")

        }catch(err){
         setErr(true);
        }
    };

  return (
    <div class="login">
    <img src="assets/img/login-bg.png" alt="login image" class="login__img"/>
    <form action="" class="login__form"  onSubmit={handleSubmit}>
       <h1 class="login__title">Inicia sesión</h1>

       <div class="login__content">
          <div class="login__box">
             <i class="ri-user-3-line login__icon"></i>

             <div class="login__box-input">
                <input type="email" required class="login__input" placeholder=""/>
                <label for="" class="login__label">Correo electrónico</label>
             </div>
          </div>

          <div class="login__box">
             <i class="ri-lock-2-line login__icon"></i>

             <div class="login__box-input">
                <input type="password" required class="login__input" id="login-pass" placeholder=" "/>
                <label for="" class="login__label">Contraseña</label>
                <i class="ri-eye-off-line login__eye" id="login-eye"></i>
             </div>
          </div>
       </div>

       <div class="login__check">
          <div class="login__check-group">
            
          </div>

          
       </div>

       <button type="submit" class="login__button">Ingresar</button>

       <p class="login__register">
        
       </p>
    </form>
 </div>
  )
}

export default Start;
