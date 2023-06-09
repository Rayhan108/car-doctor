
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import SocialLogin from "../../../Home/Shared/SocialLogin/SocialLogin";

const SignUp = () => {
    const {createUser}=useContext(AuthContext)
    const location =useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";
    const handleSignUp =(event)=>{
        event.preventDefault()
        const form=event.target;
        // const name =form.name.value;
        const email =form.email.value;
        const password = form.password.value;
        // console.log(name,email,password);
        createUser(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            navigate(from, { replace: true })
        })
        .catch(error=>{
            console.log(error.message);
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200 mb-10">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2 mr-12">
          <img src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
         
         <div className="card-body">
            <h1 className="text-5xl font-bold">Sign Up</h1>
            <form onSubmit={handleSignUp}>
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" name="name" className="input input-bordered" />
              </div>
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                
                <input className="btn btn-primary" type="submit" value="Sign Up" />
              </div>
            </form>
            <p > <span className="text-2xl font-bold">Already have an account?</span>  <Link className="text-orange-400 font-bold" to="/login">Login</Link></p>
            </div>
            <SocialLogin></SocialLogin>
        
          </div>
        </div>
      </div>
    );
};

export default SignUp;