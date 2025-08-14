import React, { useState } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { loginAPI, registerAPI } from "../Services/allAPI";
import { useNavigate } from "react-router";

function Login() {
  const [registerData, setRegisteData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [ spinner, setSpinner ] = useState(false)
  // console.log(registerData);

  const navigate = useNavigate();

  const handleRegister = async () => {
    const { username, email, password } = registerData;
    // console.log( username, email, password );

    if (!username || !email || !password) {
      toast.warning("fill the missing fields");
    } else {
      try {
        const result = await registerAPI(registerData);
        console.log(result);
        if (result.status == 200) {
          toast.success(`${result.data.username}  register successfull`);
          handleClose();
        } else {
          toast.warning(result.response.data);
        }
      } catch (err) {
        toast.error(err);
      }
    }
  };

  const handleClose = () => {
    setRegisteData({ username: "", email: "", password: "" });
  };

  const handleLogin = async() => {
    // console.log(loginData);
    const { email, password } = loginData;
    if( !email || !password ) {
      toast.warning("fill the missing fields");
    }else{
      try{
        const result = await loginAPI(loginData);
        console.log(result);
        
        if( result.status == 200 ) {
          localStorage.setItem("username",result.data.existingUser.username)
          localStorage.setItem("token",result.data.token)
          toast.success("user logged in successfully")
          setLoginData({ email: "", password: "" })
          setSpinner(true)
          setTimeout(() => {
            navigate('/booklist')
          }, 2000);
        }else{
          toast.warning(result.response.data)
        }
      }catch(err){
        toast.error(err)
      }
    }
  }

  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <div className=" w-95 h-85">
          <h1 className="text-center m-6 text-4xl text-green-700 font-bold shadow-2xs ">
            Login
          </h1>
          <div>
            <input
              type="email"
              placeholder="Email id"
              className="input text-xl input-success input-md btn-block my-3"
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
              value={loginData.email}
            />
            <input
              type="password"
              placeholder="Password"
              className="input text-xl input-success input-md btn-block my-3"
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
              value={loginData.password}
            />
            <button className="btn btn-outline btn-success my-3 btn-block text-xl btn-circle" onClick={handleLogin}>
            Login{spinner&&<span className="loading loading-spinner text-white"></span>}
            </button>
            <h4 className="text-center">
              If You Are Not Register ? Register Before Login -
              <button
                className="text-red-700 btn btn-warning btn-outline rounded-2xl"
                onClick={() =>
                  document.getElementById("my_modal_register").showModal()
                }
              >
                Register
              </button>{" "}
            </h4>
            <p className="text-center m-2 text-blue-400">
              <a href=""> forgot your password ?</a>
            </p>
          </div>
        </div>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <dialog id="my_modal_register" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-center text-red-700">
              Register
            </h3>
            <form>
              <input
                type="text"
                placeholder="User Name"
                className="input input-warning mt-10 btn-block"
                onChange={(e) =>
                  setRegisteData({ ...registerData, username: e.target.value })
                }
                value={registerData.username}
              />
              <input
                type="text"
                placeholder="Email Id"
                className="input input-warning mt-5 btn-block"
                onChange={(e) =>
                  setRegisteData({ ...registerData, email: e.target.value })
                }
                value={registerData.email}
              />
              <input
                type="password"
                placeholder="Password"
                className="input input-warning mt-5 btn-block"
                onChange={(e) =>
                  setRegisteData({ ...registerData, password: e.target.value })
                }
                value={registerData.password}
              />
            </form>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn md:my-5 my-2" onClick={handleClose}>
                  Close
                </button>
                <button
                  onClick={handleRegister}
                  className="btn md:m-5 m-2 btn-warning text-red-700"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        theme="colored"
        transition={Bounce}
      />
    </>
  );
}

export default Login;
