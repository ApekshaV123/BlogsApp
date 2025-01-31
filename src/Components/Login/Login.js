import { useNavigate } from "react-router-dom";
import "./Login.css"
import Dashboard from "../Dashboard/Dashboard";
function Login() {
    const navigate=useNavigate();
    const registerClick2=()=>{
        navigate("/register");
    }
    const loginClick2=()=>{
        navigate("/login");
    }
    const DashboardClick=()=>{
        navigate("/");
    }
    const LogoutClick=()=>{
        navigate("/logout");
    }
    return (
        <div>
            <div className="login-navbar">
                <div onClick={DashboardClick} className="login-header">Blogs</div>
                <div>
                    <span onClick={loginClick2} className="login-form-button1"></span>
                    <span onClick={registerClick2} className="login-form-button2">Register</span>
                </div>
            </div>
            <div className="login-form-section">
                <div className="login-heading">Blogs</div>
                <div>Publish your passions, your way ...</div>
                <hr/>
                <div className="login-heading-form">Login</div>
                <div className="login-input-field">
                    <label className="login-label-email" >Email id</label><br/>
                    <input type="text" placeholder="test@gmail.com" className="login-email-input"/>
                </div>
                <div  className="login-input-field">
                    <label className="login-label-password">Password</label><br/>
                    <input type="text" placeholder="Test@123" className="login-password-input"/>
                </div>
                <button onClick={LogoutClick} className="login-from-button">Login</button>
            </div>
            <div className="login-from-footer">Copyright <i class="fa fa-copyright" aria-hidden="true"></i> 2022</div>
        </div>
    );
}
export default Login;