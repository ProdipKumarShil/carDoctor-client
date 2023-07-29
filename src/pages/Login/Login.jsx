import { Link } from 'react-router-dom';
import svgImg from '../../assets/images/login/login.svg'
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content w-full flex items-center">
        <div className="text-center lg:text-left hidden md:block w-full md:w-1/2">
          <img src={svgImg} alt="" />   
        </div>
        <div className="card  border border-[#D0D0D0] rounded w-full md:w-1/2">
          <h1 className='text-4xl font-semibold text-center mt-8'>Login In</h1>
          <from className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="text" placeholder="password" className="input input-bordered" />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn my-btn-primary">Login in</button>
            </div>
          </from>
          <p className='text-center text-[18px] font-medium'>Or, Login with </p>
          <div className="">
            <FcGoogle className='text-center text-3xl mt-[30px] mb-[15px] mx-auto bg-[#F5F5F8] '/>
          </div>
          <p className='text-[#737373] text-[18px] text-center mb-8'>Don't have an account? <Link to="/signUp" className='font-bold text-[#FF3811]'>Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;