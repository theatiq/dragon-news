import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa6";

const SocialLogIn = () => {
  return (
    <div>
      <h1 className="font-semibold mb-3">Login with</h1>
      <div className="*:w-full space-y-3">
        <button className="btn">
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
