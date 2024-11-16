import React, { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { AuthContext } from "../provider/AuthProvider";

const SocialLogIn = () => {
  const { createUserGoogle, setGoogleUser, setUser } = useContext(AuthContext);
  const handleGoogleLogin = () => {
    createUserGoogle().then((result) => {
      const user = result.user;
      setUser(user);
    });
  };
  return (
    <div>
      <h1 className="font-semibold mb-3">Login with</h1>
      <div className="*:w-full space-y-3">
        <button onClick={handleGoogleLogin} className="btn">
          <FaGoogle />
          Login with Google
        </button>
        <button className="btn">
          <FaGithub /> Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogIn;
