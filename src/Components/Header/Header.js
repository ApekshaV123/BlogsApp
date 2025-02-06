
import { useNavigate } from "react-router-dom";
import "./Header.css"
function Header(){
    const navigate=useNavigate();
    const handleBlogsClick=()=>{
        navigate("/");
    }
    const handleLoginClick=()=>{
        navigate("/login");
    }
    const handleRegisterClick=()=>{
        navigate("/register");
    }


    return(
        <div className="blogs-navbar">
            <div className="blogs-heading" onClick={handleBlogsClick}>Blogs</div>
            <div>
                <span className="blogs-button" onClick={handleLoginClick}>Login</span>
                <span className="blogs-button" onClick={handleRegisterClick}>Register</span>
            </div>
        </div>
    );

}
export default Header;