import React from 'react'

function Login() {
  return (
    <div id="login">
            <div class="login-icon">
                <img src="https://portal.mut.ac.ke/uploads/60f2dc3a-7b61-4544-91a8-af2f8fa7d9c9.png?v=owI7j1YJIb_ys2wg_aWc9iUu37eDpGcwvFn8cReKebk" alt="logo"/>
            </div>
            <h1>Hi, welcome back</h1>
            <p>Please fill in your details to log in</p>
            <form>
                <div id="f1">
                    <label for="username">username</label>
                    <input type="text" name="username" id="username" placeholder="Student No/ Employee No" required/>
                    <label for="password">password</label>
                    <input type="password" name="password" id="password" placeholder="Enter your Password" required/>
                </div>
                <div id="f2">
                    <div id="f21">
                        <input type="checkbox" name="remember" id="remember"/>
                        <label for="remember">remember me</label>
                    </div>
                    <div id="f22">
                        <a href="#forgotpassword">forgot password?</a>
                    </div>                
                </div>
                <button>Sign in</button>
            </form>
            <div>
                <p id="one"> Don't have an account? <a href="#signup">sign up</a></p>
                <p id="two">copyright &copy; <span id="getYear"></span> - ABNO softwares international</p>
            </div>
        </div>
  )
}

export default Login