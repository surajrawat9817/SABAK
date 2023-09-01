import React, { useState } from 'react';
import {loginUser,userDetails} from '../api';
import "./LoginForm.css";
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Assuming you're using FontAwesome
import { faSpinner } from '@fortawesome/free-solid-svg-icons'; // You can use a loading spinner icon


function LoginForm() {
    
    
    const navigate = useNavigate();
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [loginresponse, setloginresponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isError,setIsError] =useState(false);
    const [errormessage,setErrorMessage] = useState("");
    const [userDetailsResponse, setuserDetailsResponse] = useState(null);
    const [recaptchV2Response ,setRecaptchV2Response] =useState(null);
    const siteKey = '6Lf6_vAnAAAAADgq0w1OhvOZTYGA8NlBo2Uk3wsk';
     // Replace with your actual site key

    const handleRecaptchaChange = (value) => {
      // Handle reCAPTCHA response, 'value' contains the user's response token.
      setRecaptchV2Response(value);
      console.log('reCAPTCHA value:', value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Start loading
        try {
            // Make the login request
            const LoginResponse = await loginUser({ username, password });
            setloginresponse(LoginResponse);

            // If login was successful, make the userDetails request
            if (LoginResponse) {
                const userDetailsResponse = await userDetails(LoginResponse);
                setuserDetailsResponse(userDetailsResponse);
                setLoading(false); // Start loading
                setIsLoggedIn(true);
                setIsError(false);
                 setTimeout(() => {
            // Redirect to the dashboard after the delay
            navigate('/signup');
        }, 2000);
            } 
            else {
                // Handle login failure
                setuserDetailsResponse(null);
            }
        }
        catch(error){
            if(error.message.includes("Incorrect username"))
            {
                setIsError(true);
                setErrorMessage("invalid username and password");
            }
            setLoading(false); // Start loading

            console.error(error);
        }
        
        
       

    };

    return (
        // <div classNameName='login container mx-4 my-3'>
        //     <h2>Login</h2>
        //     <form  onSubmit={handleSubmit}>
        //         <div>
        //             <label>Username</label>
        //             <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        //         </div>
        //         <div>
        //             <label>Password</label>
        //             <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        //         </div>
        //         <button type="submit">Login</button>
        //         {error && <p classNameName="error">{error}</p>}
        //     </form>
        // </div>
        <section className="vh-100 top-header" >
  <div className="container py-5 h-100">
 
    <div className="row d-flex justify-content-center align-items-center h-100">
    
      <div className="col col-xl-10">
        <div className="card card1" >
          <div className="row g-0">
            <div className="col-md-6 col-lg-5 d-none d-md-block">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                alt="login form" className="img-fluid login-img"  />
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">

                <form onSubmit={handleSubmit}>

                  <div className="d-flex align-items-center mb-3 pb-1">
                    <i className="fas fa-cubes fa-2x me-3 icon1"></i>
                    <span className="h1 fw-bold mb-3 mx-auto my-2">SABAK</span>
                  </div>
                  {isError ?(
                    <div className='row d-flex  justify-content-center h-100 text-light'>
                    <p className="fw-normal mb-3 pb-3 heading5 text-danger" > {errormessage}</p>
               </div>):
                  isLoggedIn ? (
                <div className='row d-flex  justify-content-center h-100 text-light'>
                     <p className="fw-normal mb-3 pb-3 heading5 text-danger" > <FontAwesomeIcon icon={faSpinner} spin  className='text-dark'/> You are logged in Successfully. Redirecting to the dashboard... </p> 
                    
                </div>
                 ):(
                <h5 className="fw-normal mb-3 pb-3 heading5" >Sign into your account</h5>
                )}

                  <div className="form-outline mb-4">
                  <label className="form-label" for="form2Example17" >UserName</label>
                    <input type="text" id="form2Example17" value={username} onChange={(e) => setusername(e.target.value)} className="form-control form-control-lg" />
                  </div>

                  <div className="form-outline mb-4">
                  <label className="form-label" for="form2Example27" >Password</label>
                    <input type="password" id="form2Example27" value={password} onChange={(e) => setpassword(e.target.value)} className="form-control form-control-lg" />
                  </div>
                    
                  <ReCAPTCHA
                        sitekey={siteKey}
                        onChange={handleRecaptchaChange}
                    />
                  <div className="pt-1 mb-4">
                    <button className="btn btn-dark btn-lg btn-block"  type="submit">{loading ? (
                    <FontAwesomeIcon icon={faSpinner} spin />
                ) : (
                    'Login'
                )}
                    </button>
                  </div>     
                  <br/>
                  <a className="small text-muted" href="#!">Forgot password?</a>
                  <p className="mb-5 pb-lg-2 signup-account" >Don't have an account? <a href="/signup"
                      >Register here</a></p>
                  <a href="#!" className="small text-muted">Terms of use.</a>
                  <a href="#!" className="small text-muted">Privacy policy</a>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
   
    </div>
  </div>
  <script src="https://www.google.com/recaptcha/api.js" async defer></script>
</section>

    );
}

export default LoginForm;
