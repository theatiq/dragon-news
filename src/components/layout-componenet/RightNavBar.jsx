import React from "react";
import SocialLogIn from "../SocialLogIn";
import FindUs from "../FindUs";

const RightNavBar = () => {
  return (
    <div className="space-y-5">
      <SocialLogIn></SocialLogIn>
      <FindUs></FindUs>
    </div>
  );
};

export default RightNavBar;
