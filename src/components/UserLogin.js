import React from "react";
import '../styles/userLogin.css'
import { Link } from "react-router-dom";
const UserLogin = () => {
  return (<div class="login-page">
    <div class="form">
      <div class="login">
        <div class="login-header">
          <h3>LOGIN</h3>
          <p>Please enter your credentials to login.</p>
        </div>
      </div>
      <form class="login-form">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="password" />
        <Link to='/userPortal'>  <button>login</button></Link>

      </form>
    </div>
  </div>);
}

export default UserLogin;