import React from "react";
import { Link } from "react-router-dom";
import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Kendine Kütüphane</h1>
          <p>
            Kendin için oluşturduğun bir online kitap defteri uygulaması. Aynı
            zamanda diğer kullanıcıların kitap defterlerini görebilir ve ortak
            okumalar üzerinden sohbet edebilirsin.
          </p>
          <span>Henüz hesabın yok mu?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
