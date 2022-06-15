import React from "react";
import {Link} from "react-router-dom"
import '../styles/adminLogin.css'
const AdminLogin = () => {

  return (
    <div className="logn">
    <div class="container">
      <div class="login-content">
        <form action="#">

          <div class="title-container">
            <h1>Login</h1>
            <h2>Hello, Admin!</h2>
            <p>Enter your Admin detail and start journey with us.</p>
          </div>


          <div class="login-inner-content">


            <div class="input-div one">
              <div class="i">
                <i class="far fa-user-circle"></i>
              </div>
              <div class="div">

                <input type="email" class="input" placeholder="Enter Your Email...." />
              </div>
            </div>

            <div class="input-div pass">
              <div class="i">
                <i class="fas fa-eye" onclick="show()"></i>
              </div>
              <div class="div">

                <input id="pswrd" type="password" class="input" placeholder="Enter Your Password...." />
              </div>
            </div>



          </div>

          <Link to='/adminportal'><input type="submit" class="btn" value="Login" /></Link>



        </form>
      </div>
    </div>
    </div>
  );
}

export default AdminLogin;