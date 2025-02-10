import { useNavigate } from "react-router-dom";
import "./BlogsList.css"
import { useEffect, useState } from "react";
import axios from "axios";
function BlogsList() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4000/posts").then((Response) => setBlogs(Response.data))
    }, []);
    
    function handlelikes(index) {
        axios.patch(`http://localhost:4000/posts/${blogs[index].id}`,{
            likes:blogs[index].likes+1
        })
        .then(Response=>{
            let tempBlogs=[...blogs];
            tempBlogs[index]=Response.data
           setBlogs(tempBlogs);
        })
        .catch(error => console.error('Error updating likes:',error));
    }
    function handleDisLike(index) {
        axios.patch(`http://localhost:4000/posts/${blogs[index].id}`,{
            disLikes:blogs[index].disLikes+1
        })
        .then(Response=>{
            let tempBlogs=[...blogs];
             tempBlogs[index]=Response.data
             setBlogs(tempBlogs);
        })
        .catch(error => console.error('Error updating disLikes:',error));  
    }
    const navigate = useNavigate();
    const createtClick = () => {
        navigate("/AddAndEditBlogs");
    }
    return (
        <div>
            <div className="logout-middle-section">
                <div className="logout-section">
                    <div>
                        <div className="logout-heading">Blogs</div>
                        <div>Publish your passions, your way ...</div>
                    </div>
                    <div><button onClick={createtClick} className="logout-create-button"><i class="fa fa-plus-circle" aria-hidden="true"></i> Create new post</button></div>
                </div>
                <hr />
                {blogs.map((singleBlog, index) => {
                    console.log('singleBlog:', singleBlog)
                    return <div className="logout-form-section">
                        <div className="logout-heading-section"> {singleBlog.title}</div>
                        <div><strong>Created By</strong> <em>{singleBlog.createdby}</em> </div>
                        <div><strong>Created At</strong> <em>{singleBlog.createdAtDate}</em> </div>
                        <hr />
                        <div>{singleBlog.blogDescription}</div>
                        <div className="logout-button2">
                            <button className="thumb-up-button" onClick={() => handlelikes(index)}><i class="fa fa-thumbs-up" aria-hidden="true"></i> {singleBlog.likes}</button>
                            <button className="thumb-down-button" onClick={() => handleDisLike(index)}><i class="fa fa-thumbs-down" aria-hidden="true"></i>{singleBlog.disLikes}</button>
                        </div>
                    </div>
                })}
            </div>
        </div>
    );
}
export default BlogsList;