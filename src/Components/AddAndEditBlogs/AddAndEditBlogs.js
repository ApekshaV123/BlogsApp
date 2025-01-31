import { Navigate, useNavigate } from "react-router-dom";
import "./AddAndEditBlogs.css"
function AddAndEditBlogs() {
    const navigate=useNavigate();
    const handleLogoutClick=()=>{
        navigate("/login");
    }
    const handleDashBoardClick=()=>{
        navigate("/");
    }
    return (
        <div>
            <div className="title-navbar">
                <div onClick={handleDashBoardClick} className="title-heading-blogs">Blogs</div>
                <div>
                    <span className="title-button-name">Apeksha Vishwasrao</span>
                    <i class="fa fa-arrow-circle-o-right" aria-hidden="true" ></i>
                    <span onClick={handleLogoutClick} className="title-button-logout">Logout</span>
                </div>
            </div>
            <div className="title-form">
                <div>
                    <div className="title-name">Title</div>
                </div>
                <hr />
                <div className="title-Description-section">
                    <div className="title-description">Description</div>
                </div>
                <div className="title-form-button">
                    <button className="title-cancel-button">Cancel</button>
                    <button className="title-save-button">Save</button>
                </div>
            </div>
            <div className="title-footer">Copyright <i class="fa fa-copyright" aria-hidden="true"></i> 2022</div>
        </div>
    );
}
export default AddAndEditBlogs;
