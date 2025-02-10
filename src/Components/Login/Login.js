import { useNavigate } from "react-router-dom";
import "./Login.css"
import { useEffect, useState } from "react";
import axios from "axios";
import _ from "lodash";
function Login() {
    const [loginFormData, setLoginFormData] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState({
        email: "",
        password: "",
    });
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4000/users").then((Response) => setUsers(Response.data))
    }, []);

    const navigate = useNavigate();
    const loginClick = () => {
        let errorMessage = { email: "", password: "" };
        if (loginFormData.email === "" && loginFormData.password === "") {
            errorMessage = "Please enter valid field";
        } else if (loginFormData.email === "" && loginFormData.password !== "") {
            errorMessage.email = "Please enter email";
        } else if (loginFormData.email !== "" && loginFormData.password === "") {
            errorMessage.password = "Please enter password";
        } else {
            let foundUser = {}
            users.map((user) => {
                console.log('user: ', user);
                console.log('loginFormData: ', loginFormData);
                if (user.email === loginFormData.email) {
                    foundUser = user;
                }
            })
            console.log('foundUser: ', foundUser);
            if (!_.isEmpty(foundUser)) {
                if (foundUser.password === loginFormData.password) {
                    navigate("/blogsList");
                } else {
                    errorMessage.password = "Incorrect password";
                }
            }
            else {
                errorMessage.email = "User not found";
            }
        }
        setError(errorMessage);
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
    const isFormValid = loginFormData.email && loginFormData.password && !(error.email || error.password);
    return (
        <div>
            <div className="login-form-section">
                <div className="login-heading">Blogs</div>
                <div>Publish your passions, your way ...</div>
                <hr />
                <div className="login-heading-form">Login</div>
                <div className="login-error">{error.email}</div>
                <div className="login-error">{error.password}</div>
                <div className="login-input-field">
                    <label className="login-label-email"  >Email id</label><br />
                    <input type="text" placeholder="test@gmail.com" id="name" value={loginFormData.email} onChange={handleEmailChange} className={`login-email-input ${error.email ? "invalid-input" : ""}`} />
                </div>
                <div className="login-input-field">
                    <label className="login-label-password">Password</label><br />
                    <input type="text" placeholder="Test@123" id="password" value={loginFormData.password} onChange={handlePasswordChange} className={`login-password-input ${error.password ? "invalid-input" : ""}`} />
                </div>
                <button onClick={loginClick} className="login-from-button" disabled={!isFormValid}>Login</button>
            </div>
        </div>
    );
}
export default Login;