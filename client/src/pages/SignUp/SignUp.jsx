import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import authBg from "../../assets/others/authentication.png";
import authImg from "../../assets/others/authentication2.png";
import { AuthContext } from "../../provider/AuthProvider";
import SocialLogin from "../Shared/SocialLogin";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleSignUp = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          const saveUser = { name: data.name, email: data.email };
          fetch("https://bistro-boss-server-steel-five.vercel.app/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "You are successfully Sign Up",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/");
              }
            });
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${authBg})` }}
    >
      <div className="hero-content flex-col  lg:flex-row-reverse">
        <div className="text-center lg:text-left md:w-1/2">
          <img src={authImg} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm md:w-1/2">
          <form onSubmit={handleSubmit(handleSignUp)} className="card-body">
            <h1 className="text-5xl font-bold text-center">Sign Up</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Type here"
                className="input input-bordered rounded-sm"
                {...register("name", { required: true })}
                aria-invalid={errors.name ? "true" : "false"}
              />
              {errors.name?.type === "required" && (
                <p className="text-red-700">Name is required</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photoURL"
                placeholder="Type here"
                className="input input-bordered rounded-sm"
                {...register("photoURL", { required: true })}
                aria-invalid={errors.photoURL ? "true" : "false"}
              />
              {errors.photoURL?.type === "required" && (
                <p className="text-red-700">photoURL is required</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Type here"
                className="input input-bordered rounded-sm"
                {...register("email", {
                  required: "Email Address is required",
                })}
                aria-invalid={errors.mail ? "true" : "false"}
              />
              {errors.email && (
                <p className="text-red-700">{errors.email?.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Type here"
                className="input input-bordered rounded-sm"
                {...register("password", {
                  required: true,
                  minLength: 8,
                  maxLength: 20,
                  pattern: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* )/,
                })}
              />
              {errors.password?.type === "required" && (
                <p className="text-red-700">Password must be required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-700">
                  Password must be contain 8 character
                </p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-700">
                  Password maximum contain 20 character
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-700">
                  Password must contain a single digit,one lowercase letter,one
                  uppercase letter and one special character.
                </p>
              )}
            </div>
            <div className="form-control mt-6">
              <input
                className="btn bg-[#d1a054b3] hover:bg-[#d1a054e6] capitalize rounded-sm"
                type="submit"
                value="sign up"
              />
            </div>
          </form>
          <p>
            <small className="text-[#D1A054]">
              Already registered?{" "}
              <Link to="/login" className="font-bold">
                Go to log in
              </Link>
            </small>
          </p>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
