import authImg from "../../assets/others/authentication2.png";
import authBg from "../../assets/others/authentication.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin";

const Login = () => {
  const [disable, setDisable] = useState(true);

  const {signIn} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const onSubmit = (data) => {
    signIn(data.email, data.password)
    .then(result => {
      if (result.user) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'You are successfully Login',
          showConfirmButton: false,
          timer: 1500
        });
        navigate(from, {replace: true});
      }
    })
  };

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value) == true) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${authBg})` }}
    >
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left md:w-1/2">
          <img src={authImg} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm md:w-1/2">
          <form onSubmit={handleSubmit(onSubmit)}className="card-body">
            <h1 className="text-5xl font-bold text-center">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered rounded-sm"
                {...register("email", { required: "Email Address is required" })}
        aria-invalid={errors.mail ? "true" : "false"}
              />
              {errors.email && <p className="text-red-700">{errors.email?.message}</p>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered rounded-sm"
                {...register("password", {required:true, minLength: 8, maxLength: 20, pattern: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* )/ })}
              />
              {errors.password?.type === 'required' && <p className="text-red-700">Password must be required</p>}
              {errors.password?.type === 'minLength' && <p className="text-red-700">Password must be contain 8 character</p>}
              {errors.password?.type === 'maxLength' && <p className="text-red-700">Password maximum contain 20 character</p>}
              {errors.password?.type === 'pattern' && <p className="text-red-700">Password must contain a single digit,one lowercase letter,one uppercase letter and one special character.</p>}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <LoadCanvasTemplate />
              <input
                type="text"
                name="captcha"
                placeholder="write the captcha above"
                className="input input-bordered rounded-sm"
                onBlur={handleValidateCaptcha}
              />
            </div>
            <div className="form-control mt-6">
              <input
                disabled={disable}
                className="btn bg-[#d1a054b3] hover:bg-[#d1a054e6] capitalize rounded-sm"
                type="submit"
                value="sign in"
              />
            </div>
          </form>
          <p className="text-[#D1A054]"><small>New Here? <Link to="/signUp" className="font-bold">Create an account</Link></small></p>
        <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
