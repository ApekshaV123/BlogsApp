import { useNavigate } from "react-router-dom";
import "./Login.css"
import { useState } from "react";
function Login() {
    const [loginFormData, setLoginFormData] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();
    const loginClick = () => {
        console.log("login button clicked");
        console.log("Login From Data:", loginFormData)
        navigate("/blogsList");
    }
    const handleEmailChange = (event) => {
        let loginData = { ...loginFormData }
        loginData.email = event.target.value;
        setLoginFormData(loginData);
    };
    const handlePasswordChange = (event) => {
        let loginData = { ...loginFormData }
        loginData.password = event.target.value;
        setLoginFormData(loginData);
    }
    return (
        <div>
            <div className="login-form-section">
                <div className="login-heading">Blogs</div>
                <div>Publish your passions, your way ...</div>
                <hr />
                <div className="login-heading-form">Login</div>
                <div className="login-input-field">
                    <label className="login-label-email"  >Email id</label><br />
                    <input type="text" placeholder="test@gmail.com" id="name" value={loginFormData.email} onChange={handleEmailChange} className="login-email-input" />
                </div>
                <div className="login-input-field">
                    <label className="login-label-password">Password</label><br />
                    <input type="text" placeholder="Test@123" id="password" value={loginFormData.password} onChange={handlePasswordChange} className="login-password-input" />
                </div>
                <button onClick={loginClick} className="login-from-button">Login</button>
            </div>
        </div>
    );
}
export default Login;