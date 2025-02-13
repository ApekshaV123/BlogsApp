
import { useNavigate } from "react-router-dom";
import "./Header.css"
import { useEffect } from "react";
function Header() {
    const navigate = useNavigate();
    const LoggedEmail = localStorage.getItem("email");
    console.log("logged Email:", LoggedEmail);
    const handleBlogsClick = () => {
        navigate("/");
    }
    const handleLoginClick = () => {
        navigate("/login");
    }
    const handleRegisterClick = () => {
        navigate("/register");
    }
    const handleLogoutClick = () => {
        localStorage.removeItem("email");
        navigate("/login");
    }
    return (
        <div className="blogs-navbar">
            <div className="blogs-heading" onClick={handleBlogsClick}>Blogs</div>
            <div>
                {LoggedEmail ? (
                    <>
                        <span className="blogs-button">{LoggedEmail}</span>
                        <span onClick={handleLogoutClick} className="blogs-button">logout</span>
                    </>
                ) : (
                    <>
                        <span className="blogs-button" onClick={handleLoginClick}>Login</span>
                        <span className="blogs-button" onClick={handleRegisterClick}>Register</span>
                    </>
                )}
            </div>
        </div>
    );
}
export default Header;