import React from "react";
import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Başlık</h1>
          <p>Açıklama kısmı</p>
          <span>Don't you have an account</span>
          <button>Register</button>
          <div className="right">
            <h1>Login</h1>
            <form>
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />
            </form>
            <button>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
