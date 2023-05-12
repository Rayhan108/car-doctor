
import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg"
import { useContext } from "react";
import { authContext } from "../../Providers/AuthProvider";

const Login = () => {
    const {login}=useContext(authContext)
    const handleLogin =(event)=>{
        event.preventDefault()
        const form=event.target;
        const email =form.email.value;
        const password = form.password.value;
        console.log(email,password);
        login(email,password)
        .then(result=>{
            const user =result.user;
            console.log(user);
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
      <h1 className="text-5xl font-bold">Login now!</h1>
      <form onSubmit={handleLogin}>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" name="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" name="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          
          <input className="btn btn-primary" type="submit" value="Login" />
        </div>
      </form>
      <p > <span className="text-2xl font-bold"> Have an Account?</span>  <Link className="text-orange-400 font-bold" to="/signup">Sign Up</Link></p>
      </div>
  
    </div>
  </div>
</div>
    );
};

export default Login;