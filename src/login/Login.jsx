import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center">
      <div className="flex justify-center items-center h-screen w-1/2 bg-primaryColor self-center">
        <div className="flex flex-col justify-between items-center h-4/5 w-3/5 bg-secondaryColor border rounded-lg ">
          <div>Company Name</div>
          <div className="grid w-4/5 gap-5">
            <div className="flex flex-col">
              <span className="text-2xl text-oliveGreen">Welcome back</span>
              <span>Please enter your details</span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-col text-left gap-1 w-3/5">
                <label className="text-oliveGreen">Email</label>
                <input className="border h-10 rounded-lg" type="text" />
              </div>
              <div className="flex flex-col text-left gap-1 w-3/5">
                <label className="text-oliveGreen">Password</label>
                <input className="border h-10 rounded-lg" type="password" />
              </div>
              <button className="border h-10 rounded-lg w-3/5 bg-oliveGreen text-secondaryColor">
                Login
              </button>
            </div>
          </div>
          <div>copyright</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
