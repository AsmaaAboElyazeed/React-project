import Nav  from "../comp/nav";

import React from 'react';

const Login = () => {
    return (
        <>
       <Nav />
        <section id="sec4">
          <h2>Hello Again!</h2>
          <p>Welcome Back You've Been Missed!</p>
          <p>To login enter Your email address and password</p>
          <form action="/home" method="POST">
            <label htmlFor="">Email Address</label>
            <input type="email" />

              <img src="imgs/eye.svg" alt="" />

            <hr />
            <label htmlFor="">Password</label>
            <input type="password" />

              <img src="imgs/eye.svg" alt="" />
 
            <hr />
            <input type="checkbox" defaultChecked="checked" id="checkbox" />
            <label htmlFor="checkbox">Remember me</label>
            <input type="submit" defaultValue="Login" />
          </form>
        </section>
      </>
      
    );
}

export default Login;
