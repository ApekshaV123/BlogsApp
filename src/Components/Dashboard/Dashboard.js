import { useNavigate } from "react-router-dom";
import "./Dashboard.css"
function Dashboard() {
    const navigate = useNavigate();
    const registerClick=()=>{
        navigate("/register");
    }
    const LoginClick=()=>{
        navigate("/login");
    }
    const LoginClick1=()=>{
        navigate("/login");
    }
    const registerClick1=()=>{
        navigate("/register");
    }
    return (
        <div>
            <div className="navbar">
                <div className="header">Blogs</div>
                <div>
                    <span onClick={LoginClick1} className="rightlogin">Login</span>
                    <span onClick={registerClick1} className="rightlogin">Register</span>
                </div>
            </div>
            <div className="middleSection">
                <div className="headerblog">Blogs !</div>
                <div>Publish your passions, your way ...</div>
                <hr />
                <div className="button">
                    <button onClick={LoginClick} className="loginButton">Login</button>
                    <button onClick={registerClick} className="registerButton" >Register</button>
                </div>
            </div>
            <div className="footer">Copyright <i class="fa fa-copyright" aria-hidden="true"></i> 2022</div>
        </div>
    );
}
export default Dashboard;