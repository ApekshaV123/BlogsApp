import { useNavigate } from "react-router-dom";
import "./Logout.css"
function Logout() {
    const navigate=useNavigate();
    const createtClick=()=>{
        navigate("/AddAndEditBlogs");
    }
    const handleDashbordClick=()=>{
        navigate("/");
    }
    return (
        <div>
            <div className="logout-navbar">
                <div onClick={handleDashbordClick} className="logout-Blog">Blogs</div>
                <div className="logout-button">
                    <span className="logout-button-name">Apeksha Vishwasrao</span>
                    <i class="fa fa-arrow-circle-o-right" aria-hidden="true" ></i>
                    <span  className="logout-button1">Logout</span>
                </div>
            </div>
            <div className="logout-middle-section">
                <div className="logout-section">
                    <div>
                        <div className="logout-heading">Blogs</div>
                        <div>Publish your passions, your way ...</div>
                    </div>
                    <div><button onClick={createtClick} className="logout-create-button"><i class="fa fa-plus-circle" aria-hidden="true"></i> Create new post</button></div>
                </div>
                <hr />
                <div className="logout-form-section">
                    <div className="logout-heading-section">Hello World</div>
                    <div><strong>Created By</strong> <em>apekshavishwasrao2002@gmail.com</em></div>
                    <div><strong>Created At</strong> <em>30 jan, 2025</em></div>
                    <hr />
                    <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                        with desktop publishing software like Aldus PageMaker including versions of Lorem IpsumLorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                        type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                        1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum.
                        <div className="logout-button2">
                            <button className="logout-thumb-up-button"><i class="fa fa-thumbs-up" aria-hidden="true"></i> 0</button>
                            <button className="logout-thumb-down-button"><i class="fa fa-thumbs-down" aria-hidden="true"></i> 0</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="logout-footer">Copyright <i class="fa fa-copyright" aria-hidden="true"></i> 2022</div>
        </div>
    );
}
export default Logout;