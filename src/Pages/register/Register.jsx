import React from "react";
import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Kendine Kütüphane</h1>
          <p>
            {" "}
            Kendin için oluşturduğun bir online kitap defteri uygulaması. Aynı
            zamanda diğer kullanıcıların kitap defterlerini görebilir ve ortak
            okumalar üzerinden sohbet edebilirsin.
          </p>
          <span>Hesabın varsa</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
