import React, { useRef, useState } from "react";
import { useNavigate } from "react-router";
import "./login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  let navigate = useNavigate();
  const input1 = useRef(null);
  const input2 = useRef(null);
  const notify = () => toast("Parolingiz xato");
  const [show_password, setshow_password] = useState(true);
  const Login = () => {
    console.log();
    let name = input1.current.value;
    let password = input2.current.value;
    if (password.length > 15 || password=== "0220" || password==="1234")  {
      if (
        (name === "Arslon" && password === "0220") ||
        (name === "Doniyor" && password === "1234")
      ) {
        navigate("/home");
        localStorage.setItem("tocen", "123456789");
      } else {
        notify();
      }
    } else toast("Kuchsiz parol");
  };
  return (
    <div className="login">
      <ToastContainer />
      <div className="login_detail">
        <p className="login_title">Login</p>
        <input ref={input1} type="text" placeholder="User Name" autoComplete="on" />
        <div className="show-password px-auto">
          <input
            ref={input2}
            type={show_password ? "password" : "text"}
            placeholder="Password"
            autoComplete="off"
          />
          <span
            onClick={() => setshow_password(false)}
            className={show_password ? "yes" : "no"}
          >
            <i class="fa-solid fa-eye"></i>
          </span>
          <span
            onClick={() => setshow_password(true)}
            className={show_password ? "no" : "yes"}
          >
            <i class="fa-solid fa-eye-slash"></i>
          </span>
        </div>
        <button className="button" onClick={Login}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
