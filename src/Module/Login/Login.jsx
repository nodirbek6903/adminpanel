import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import "./login.css";
import { useState } from "react";

export const Login = () => {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(false);
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleToggle = () => {
    setType(type === "password" ? "text" : "password");
    setIcon(!icon);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://autoapi.dezinfeksiyatashkent.uz/api/auth/signin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            phone_number: number,
            password: password,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Sign-in failed");
      } else {
        window.location.href = "/";
      }

      const data = await response.json();
      localStorage.setItem("token", data.data.tokens.accessToken.token);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login">
      <form className="login-form" action="#" onSubmit={handleSubmit}>
        <span className="login-title">Autozoom - Admin Panel</span>
        <div className="login-box">
          <input
            className="login-inp"
            type="text"
            placeholder="Phone Number"
            onChange={(e) => setNumber(e.target.value)}
          />
          <span className="login-icon">
            <MdOutlineEmail />
          </span>
        </div>

        <div className="login-box">
          <input
            className="login-inp"
            type={type}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="login-icon" onClick={handleToggle}>
            {icon ? <FaEye /> : <FaEyeSlash />}
          </span>
        </div>
        <button className="login-btn" type="submit">
          Login
        </button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};
