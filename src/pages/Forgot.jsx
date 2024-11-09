import React from 'react'

function Forgot() {
  return (
    <div id="forgotpassword">
            <img src="https://portal.mut.ac.ke/uploads/60f2dc3a-7b61-4544-91a8-af2f8fa7d9c9.png?v=owI7j1YJIb_ys2wg_aWc9iUu37eDpGcwvFn8cReKebk" alt="logo"/>
            <h1>Forgot Password</h1>
            <p class="passwordp1">Please enter your email address to reset password</p>
            <form action="">
                <div id="f1">
                    <label for="username2">Username/Email address</label>
                    <input type="text" name="username2" id="username2" placeholder="Enter your username or email" required/>
                    <p id="validate5"></p>
                </div>
                <div></div>
                <button type="submit">Submit</button>
            </form>
            <div>
                <p id="one2"><a href="#login" >Back to Login</a></p>
                <p id="two2">copyright &copy; <span id="getYear2"></span> - ABNO softwares international</p>
            </div>
        </div>
  )
}

export default Forgot