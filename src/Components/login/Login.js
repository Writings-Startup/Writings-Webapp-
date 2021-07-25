import React from 'react'
import './loginform.css'
import useLogin from './useLogin'


function Login() {
    const {submitHandler , details, changeHandler, error} = useLogin();
    console.log(details,error)
    return (
        <div className="login-split-screen">
            <div className="login-left">
                <section className="login-split">
                    <span className="login-logo-title">
                        <h3 className="login-logo">Logoname</h3>
                    </span>
                    <span className="login-content-center">
                        <h1 className="login-header1">Lorem Ipsum is simply dummy text of the printing</h1>
                        <p className="login-para-text"> Welcome  Please Sign Up to your account. </p>
                    </span>
                </section>
            </div>
            <div className="login-right">
                <form className="form-login" onSubmit={submitHandler}>
                    <section className="login-right-split">
                        <h2 className="login-header2">Login</h2>
                        <div className="login-container">
                        </div>
                    </section>
                    <div className="login-input-container">
                        <label className="login-label" for="email"  >Email Address</label>
                        <input className="login-inputs" type="email" name="email"  id="email"  placeholder="email"
                         detail={details.email} onChange={changeHandler}></input>
                    </div>
                    <div className="login-input-container">
                        <label className="login-label" for="password"  > Password</label>
                        <input type="password" name="password" placeholder="Password" 
                        detail={details.password} onChange={changeHandler} ></input>
                    </div>
                    <button className="login-btn" type="submit">Login</button>
                            <button className="login-google">
                                <span className="google-spacing">
                                    <a className="login-text" href="#"><i className="fab fa-google"></i>Login with Google</a>
                                </span>
                            </button>
                    <p class="login">Not a member? <a href="#"><strong>Sign Up</strong></a></p>
                </form>
            </div>
        </div>
    )
}

export default Login
