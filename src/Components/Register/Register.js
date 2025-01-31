import { useNavigate } from "react-router-dom";
import "./Register.css"
import Dashboard from "../Dashboard/Dashboard";
function Register() {
    const navigate=useNavigate();
    const loginClick=()=>{
        navigate("/login");
    }
    const loginClick3=()=>{
        navigate("/login");
    }
    const DashboardClick4=()=>{
        navigate("/");
    }
    return (
        <div>
            <div className="register-NavBar">
                <div onClick={DashboardClick4} className="register-header">Blogs</div>
                <div>
                    <span  onClick={loginClick3} className="register-button1">Login</span>
                    <span  className="register-button2"></span>
                </div>
            </div>
            <div className="section">
                <div className="register-form-header">Blogs</div>
                <div>Publish your passions, your way ...</div>
                <hr />
                <div className="register-heading">Register</div>
                <div className="register-form-input-field">
                    <label className="register-name">Name</label><br />
                    <input type="text" placeholder="Firstname Lastname" className="input-field-name" /><br />
                </div>
                <div className="register-form-input-field">
                    <label className="register-name">Email id</label><br />
                    <input type="text" placeholder="test@gmail.com" className="input-field-email"/><br />
                </div>
                <div className="register-form-input-field">
                    <label className="register-name">Password</label><br />
                    <input type="text" placeholder="Test@123" className="input-field-password"/><br />
                </div>
                <button className="register-form-button" onClick={loginClick}><a href="">Register</a></button>
            </div>
            <div className="register-footer">Copyright <i class="fa fa-copyright" aria-hidden="true"></i> 2022</div>
        </div>
    );
}
export default Register;