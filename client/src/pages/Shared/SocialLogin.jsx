import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const SocialLogin = () => {
  const { createGoogleUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleLogin = () => {
    createGoogleUser().then((result) => {
      const loggedInUser = result.user;
      const saveUser = {
        name: loggedInUser.displayName,
        email: loggedInUser.email,
      };
      fetch("https://bistro-boss-server-steel-five.vercel.app/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then(() => {
          navigate(from, { replace: true });
        });
    });
  };
  return (
    <div>
      <div className="divider"></div>
      <div className="text-center my-5">
        <button
          className="btn btn-circle btn-outline"
          onClick={handleGoogleLogin}
        >
          <FaGoogle />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
