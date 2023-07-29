import React from 'react';

const Login = () => {
  return (
    <div>
      <div className='bg-[url("https://noahbogo.com/static/media/LoginPageImage.1b66fae6.jpg")] h-[600px] bg-no-repeat w-full bg-cover'>
        <div className="flex justify-center items-center h-full w-full text-white">
          <div className="w-1/3 bg-[#1e1e1e] rounded-xl shadow-xl px-10">
            <h1 className="text-4xl font-semibold my-6 text-center">NOAH</h1>
            <div className="text-xl font-bold my-4">Sign in</div>
            <div>
              <div>
                <label htmlFor="email" className="my-2">
                  Email Address
                </label>
              </div>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full p-2 rounded-md outline-none"
              />
            </div>
            <div className="my-6">
              <div>
                <label htmlFor="password" className="my-2">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                className="w-full p-2 rounded-md outline-none"
              />
            </div>
            <button className="bg-orange-500 rounded-lg w-full p-3 mt-4 text-center shadow-xl text-xl font-medium">
              <a href="/admin" className="w-full h-full">
                SIGN IN
              </a>
            </button>
            <div className="border-t mt-10 py-4 text-center">
              <div className="flex text-md justify-center items-center font-bold">
                <div>Not a menber?</div>
                <div className="text-orange-500 ml-3">Sign Up</div>
              </div>
              <div className="flex text-md justify-center items-center font-bold my-6">
                <div>Forget your password?</div>
                <div className="text-orange-500 ml-3">Reset password</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
