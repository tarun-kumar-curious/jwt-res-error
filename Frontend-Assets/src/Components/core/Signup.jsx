import { useState } from "react";
import Sign_up from "../../assets/Sign_up.gif";
import { Link, useNavigate } from 'react-router-dom';
const Signup = () => {
  const [signUp, setSignUp] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formData,setFormData] = useState({});
  const handleSignUp = (val) => {
     setSignUp(val);
     handleSetSignUp({ target: { name: 'role', value: val } });
  }
  const handleSetSignUp = (e) => {

    setFormData ({
      
      ...formData,
      [e.target.name]: e.target.value,


    });

  }
  console.log(formData);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const requiredFields = ['username', 'email', 'password', 'country', 'phonenumber', 'role'];
    const missingFields = requiredFields.filter(field => !formData[field]);
  
    if (missingFields.length > 0) {
      console.error('Please fill in all required fields:', missingFields);
      return;
    }
    try {
      setLoading(true);
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
     
      setError(null);
      navigate('/signin');
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  return (
    <div className="font-[sans-serif] text-[#333]">
      <div className="min-h-screen flex flex-col items-center justify-top">
        <div className="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full p-4 m-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
          <div className="md:h-full max-md:mt-0 rounded-xl lg:p-12 p-8 items-start">
            <img
              src={Sign_up}
              className="w-full h-[60%] object-contain"
              alt="Sign in image"
            />
          </div>
          <div className="md:max-w-md w-full sm:px-6 py-4 font-semibold from-neutral-950">
            <form onSubmit={handleSubmit}>
              <div className="mb-12">
                <h3 className="text-3xl font-extrabold">Sign Up</h3>
              </div>
              <div className="mt-3">
                <h3>Sign Up As?</h3>
              </div>

              <div className="flex items-center justify-between gap-2 mt-4 mb-3">
                <div className="flex justify-center space-x-5 mb-2 font-normal">
                  <div className="flex items-center">
                    <input
                      id="mentor"
                      name="role"
                      type="radio"
                      value={signUp}
                      checked={signUp === "mentor"}
                      onChange={() => {
                        handleSignUp("mentor");
                      
                      }}
                      className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-3 block text-sm">
                      Mentor
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="mentee"
                      name="signup-role"
                      type="radio"
                      value={signUp}
                      checked={signUp === "mentee"}
                      onChange={() => {
                        handleSignUp("mentee");
                      }}
                      className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label for="remember-me" className="ml-3 block text-sm">
                      Mentee
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="radio"
                      value = {signUp}
                      checked={signUp === "organization"}
                      onChange={()=> handleSignUp("organization")}
                      className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label for="remember-me" className="ml-3 block text-sm">
                      Organization
                    </label>
                  </div>
                </div>
              </div>
              {signUp === "Organization" ? (
                            <div>
                            <label className="text-xs block mb-2">Organization Name</label>
                            <div className="relative flex items-center">
                              <input
                                name="organization-name"
                                type="text"
                                required
                                className="w-full text-sm border-b border-gray-300 focus:border-[#333] px-2 py-3 outline-none"
                                placeholder="Enter Organization Name"
                              />
                              <svg
                                viewBox="0 0 24 24"
                                fill="#bbb"
                                stroke="#bbb"
                                className="w-[18px] h-[18px] absolute right-2 cursor-pointer"
                              >
                                <path d="M12 2A10.13 10.13 0 002 12a10 10 0 004 7.92V20h.1a9.7 9.7 0 0011.8 0h.1v-.08A10 10 0 0022 12 10.13 10.13 0 0012 2zM8.07 18.93A3 3 0 0111 16.57h2a3 3 0 012.93 2.36 7.75 7.75 0 01-7.86 0zm9.54-1.29A5 5 0 0013 14.57h-2a5 5 0 00-4.61 3.07A8 8 0 014 12a8.1 8.1 0 018-8 8.1 8.1 0 018 8 8 8 0 01-2.39 5.64z" />
                                <path d="M12 6a3.91 3.91 0 00-4 4 3.91 3.91 0 004 4 3.91 3.91 0 004-4 3.91 3.91 0 00-4-4zm0 6a1.91 1.91 0 01-2-2 1.91 1.91 0 012-2 1.91 1.91 0 012 2 1.91 1.91 0 01-2 2z" />
                              </svg>
                            </div>
                          </div>
              ):(
                <div>
                <label className="text-xs block mb-2">Full Name</label>
                <div className="relative flex items-center">
                  <input
                    name="username"
                    type="text"
                    required
                    className="w-full text-sm border-b border-gray-300 focus:border-[#333] px-2 py-3 outline-none"
                    placeholder="Enter full name"
                    onChange={handleSetSignUp}     
                  />
                  <svg
                    viewBox="0 0 24 24"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-[18px] h-[18px] absolute right-2 cursor-pointer"
                  >
                    <path d="M12 2A10.13 10.13 0 002 12a10 10 0 004 7.92V20h.1a9.7 9.7 0 0011.8 0h.1v-.08A10 10 0 0022 12 10.13 10.13 0 0012 2zM8.07 18.93A3 3 0 0111 16.57h2a3 3 0 012.93 2.36 7.75 7.75 0 01-7.86 0zm9.54-1.29A5 5 0 0013 14.57h-2a5 5 0 00-4.61 3.07A8 8 0 014 12a8.1 8.1 0 018-8 8.1 8.1 0 018 8 8 8 0 01-2.39 5.64z" />
                    <path d="M12 6a3.91 3.91 0 00-4 4 3.91 3.91 0 004 4 3.91 3.91 0 004-4 3.91 3.91 0 00-4-4zm0 6a1.91 1.91 0 01-2-2 1.91 1.91 0 012-2 1.91 1.91 0 012 2 1.91 1.91 0 01-2 2z" />
                  </svg>
                </div>
              </div>
              )}
              <div className="mt-3">
                <label className="text-xs block mb-2">Email</label>
                <div className="relative flex items-center">
                  <input
                    name="email"
                    type="text"
                    required
                    className="w-full text-sm border-b border-gray-300 focus:border-[#333] px-2 py-3 outline-none"
                    placeholder="Enter email"
                    onChange={handleSetSignUp}     
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-[18px] h-[18px] absolute right-2"
                    viewBox="0 0 682.667 682.667"
                  >
                    <defs>
                      <clipPath id="a" clipPathUnits="userSpaceOnUse">
                        <path
                          d="M0 512h512V0H0Z"
                          data-original="#000000"
                        ></path>
                      </clipPath>
                    </defs>
                    <g
                      clip-path="url(#a)"
                      transform="matrix(1.33 0 0 -1.33 0 682.667)"
                    >
                      <path
                        fill="none"
                        stroke-miterlimit="10"
                        stroke-width="40"
                        d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                        data-original="#000000"
                      ></path>
                      <path
                        d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                        data-original="#000000"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="mt-3">
                <label className="text-xs block mb-2">Password</label>
                <div className="relative flex items-center">
                  <input
                    name="password"
                    type="password"
                    required
                    className="w-full text-sm border-b border-gray-300 focus:border-[#333] px-2 py-3 outline-none"
                    placeholder="Enter password"
                    onChange={handleSetSignUp} 
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-[18px] h-[18px] absolute right-2 cursor-pointer"
                    viewBox="0 0 128 128"
                  >
                    <path
                      d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>
              </div>

              {/* this is for country */}
              <div className="mt-3">
                <label className="text-xs block mb-2">Country</label>
                <div className="relative flex items-center">
                  <input
                    name="country"
                    type="text"
                    required
                    className="w-full text-sm border-b border-gray-300 focus:border-[#333] px-2 py-3 outline-none"
                    placeholder="Enter country"
                    onChange={handleSetSignUp}   
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-[18px] h-[18px] absolute right-2 cursor-pointer"
                    viewBox="0 0 128 128"
                  >
                    <path d="M8.95 13.4H6.58a5.5 5.5 0 010-2.8h2.37a11.56 11.56 0 00-.1 1.4 11.56 11.56 0 00.1 1.4M7.16 9.2H9.2a12.06 12.06 0 01.98-2.49A5.55 5.55 0 007.16 9.2m9.68 0a5.59 5.59 0 00-3.03-2.49 10.95 10.95 0 01.97 2.49M12 17.57a9.5 9.5 0 001.34-2.77h-2.68A9.5 9.5 0 0012 17.57m0-11.15a9.53 9.53 0 00-1.34 2.78h2.68A9.53 9.53 0 0012 6.42M7.16 14.8a5.61 5.61 0 003.02 2.49 12.06 12.06 0 01-.98-2.49M21 5v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2m-2 7a7 7 0 10-7 7 7 7 0 007-7m-3.85 0a11.56 11.56 0 01-.1 1.4h2.37a5.5 5.5 0 000-2.8h-2.37a11.56 11.56 0 01.1 1.4m-1.34 5.29a5.62 5.62 0 003.03-2.49h-2.06a10.95 10.95 0 01-.97 2.49m-3.45-6.69a8.81 8.81 0 000 2.8h3.28a10.3 10.3 0 00.11-1.4 10.21 10.21 0 00-.11-1.4z" />
                  </svg>

                  <svg
                    fill="#bbb"
                    viewBox="0 0 24 24"
                    className="w-[20px] h-[20px] absolute right-2 cursor-pointer"
                  >
                    <path d="M16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 01-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2 0-.68.06-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.923 7.923 0 019.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8.008 8.008 0 015.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.65 15.65 0 00-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2z" />
                  </svg>
                </div>
              </div>

              {/* this is phone number input */}
              <div className="mt-3">
                <label className="text-xs block mb-2">Phone Number</label>
                <div className="relative flex items-center">
                  <input
                    name="phonenumber"
                    type="tel"
                    required
                    className="w-full text-sm border-b border-gray-300 focus:border-[#333] px-2 py-3 outline-none"
                    placeholder="Enter phone number"
                    onChange={handleSetSignUp}  

                  />

                  <svg
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-[25px] h-[25px] absolute right-0.5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11 1a1 1 0 011 1v12a1 1 0 01-1 1H5a1 1 0 01-1-1V2a1 1 0 011-1h6zM5 0a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V2a2 2 0 00-2-2H5z" />
                    <path d="M8 14a1 1 0 100-2 1 1 0 000 2z" />
                  </svg>
                </div>
              </div>
              
              <div>
                <a
                  href="jajvascript:void(0);"
                  className="text-[#8800ff] font-semibold text-sm hover:underline-none hover:text-[#8200ff]"
                >
                  Forgot Password?
                </a>
              </div>
              <div className="mt-12">
                <button
                  disabled={loading}
                  type="button"
                  className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded-full text-white bg-[#8800ff] hover:bg-[#8200ff] focus:outline-none"
                  onClick={handleSubmit}
                >
                   {loading ? 'Loading...' : 'Sign Up'}
                </button>
              </div>
              <p className="my-8 text-sm text-gray-400 text-center">
                or continue with
              </p>
              <div className="space-x-8 flex justify-center">
                <button type="button" className="border-none outline-none transform hover:scale-75 transition duration-200 ease-in-out">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30px"
                    className="inline"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#fbbd00"
                      d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                      data-original="#fbbd00"
                    />
                    <path
                      fill="#0f9d58"
                      d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                      data-original="#0f9d58"
                    />
                    <path
                      fill="#31aa52"
                      d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                      data-original="#31aa52"
                    />
                    <path
                      fill="#3c79e6"
                      d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                      data-original="#3c79e6"
                    />
                    <path
                      fill="#cf2d48"
                      d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                      data-original="#cf2d48"
                    />
                    <path
                      fill="#eb4132"
                      d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                      data-original="#eb4132"
                    />
                  </svg>
                </button>
                <button type="button" className="border-none outline-none transform hover:scale-75 transition duration-200 ease-in-out">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30px"
                    fill="#000"
                    viewBox="0 0 22.773 22.773"
                  >
                    <path
                      d="M15.769 0h.162c.13 1.606-.483 2.806-1.228 3.675-.731.863-1.732 1.7-3.351 1.573-.108-1.583.506-2.694 1.25-3.561C13.292.879 14.557.16 15.769 0zm4.901 16.716v.045c-.455 1.378-1.104 2.559-1.896 3.655-.723.995-1.609 2.334-3.191 2.334-1.367 0-2.275-.879-3.676-.903-1.482-.024-2.297.735-3.652.926h-.462c-.995-.144-1.798-.932-2.383-1.642-1.725-2.098-3.058-4.808-3.306-8.276v-1.019c.105-2.482 1.311-4.5 2.914-5.478.846-.52 2.009-.963 3.304-.765.555.086 1.122.276 1.619.464.471.181 1.06.502 1.618.485.378-.011.754-.208 1.135-.347 1.116-.403 2.21-.865 3.652-.648 1.733.262 2.963 1.032 3.723 2.22-1.466.933-2.625 2.339-2.427 4.74.176 2.181 1.444 3.457 3.028 4.209z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </button>
                <button type="button" className="border-none outline-none transform hover:scale-75 transition duration-200 ease-in-out">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30px"
                    fill="#007bff"
                    viewBox="0 0 167.657 167.657"
                  >
                    <path
                      d="M83.829.349C37.532.349 0 37.881 0 84.178c0 41.523 30.222 75.911 69.848 82.57v-65.081H49.626v-23.42h20.222V60.978c0-20.037 12.238-30.956 30.115-30.956 8.562 0 15.92.638 18.056.919v20.944l-12.399.006c-9.72 0-11.594 4.618-11.594 11.397v14.947h23.193l-3.025 23.42H94.026v65.653c41.476-5.048 73.631-40.312 73.631-83.154 0-46.273-37.532-83.805-83.828-83.805z"
                      data-original="#010002"
                    ></path>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup