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
    return (
        <div>
            <div className="middleSection">
                <div className="headerblog">Blogs !</div>
                <div>Publish your passions, your way ...</div>
                <hr />
                <div className="button">
                    <button onClick={LoginClick} className="loginButton">Login</button>
                    <button onClick={registerClick} className="registerButton" >Register</button>
                </div>
            </div>    
        </div>
    );
}
export default Dashboard;