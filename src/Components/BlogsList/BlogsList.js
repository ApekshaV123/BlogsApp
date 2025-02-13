import { useNavigate } from "react-router-dom";
import "./BlogsList.css"
import { useEffect, useState } from "react";
import axios from "axios";
function BlogsList() {
    const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate();
    const LoggedEmail = localStorage.getItem("email");
    console.log("logged Email:", LoggedEmail);


    useEffect(() => {
        getBlogsData();
    }, []);
    const getBlogsData = () => {
        axios.get("http://localhost:4000/posts").then((Response) => setBlogs(Response.data))
    }
    function handlelikes(blogId, likeCount) {
        axios.patch(`http://localhost:4000/posts/${blogId}`, {
            likes: likeCount + 1
        })
            .then(Response => {
                getBlogsData();
            })
            .catch(error => console.error('Error updating likes:', error));
    }
    function handledisLike(blogId, dislikesCount) {
        axios.patch(`http://localhost:4000/posts/${blogId}`, {
            disLikes: dislikesCount + 1
        })
            .then(Response => {
                getBlogsData();
            })
            .catch(error => console.error('Error updating disLikes:', error));
    }
    function handleEditButton(blogId) {
        navigate(`/addAndEditBlogs/${blogId}`);
    }
    function handleDeleteButton(blogId) {
        if (blogs.length === 1 || blogId === 1) {
            console.error(` error: first past is not deleted. `);
            return;
        }
        axios.delete(`http://localhost:4000/posts/${blogId}`)
            .then(Response => {
                getBlogsData();
            })
            .catch(error => console.error(`Error deleting blogs:`, error))
    }
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
                        <div><strong>Created By</strong> <em>{singleBlog.createdBy}</em> </div>
                        <div><strong>Created At</strong> <em>{singleBlog.createdAtDate}</em> </div>
                        <hr />
                        <div>{singleBlog.description}</div>
                        <div className="buttons">
                            <div className="logout-button2">
                                <button className="thumb-up-button" onClick={() => handlelikes(singleBlog.id, singleBlog.likes)}><i class="fa fa-thumbs-up" aria-hidden="true"></i> {singleBlog.likes}</button>
                                <button className="thumb-down-button" onClick={() => handledisLike(singleBlog.id, singleBlog.disLikes)}><i class="fa fa-thumbs-down" aria-hidden="true"></i>{singleBlog.disLikes}</button>
                            </div>
                            <div>
                                {singleBlog.createdBy === LoggedEmail && (
                                    <>
                                        <button className="edit-button" onClick={() => handleEditButton(singleBlog.id)} ><i class="fa fa-pencil" aria-hidden="true"></i> Edit</button>
                                        <button className={`delete-button ${blogs.length === 1 ? 'disabled' : ''}`}
                                            disabled={blogs.length === 1} onClick={() => handleDeleteButton(singleBlog.id)}><i class="fa fa-trash-o" aria-hidden="true"></i> Delete</button>
                                    </>
                                )}
                            </div>

                        </div>
                    </div>
                })}

            </div>
        </div>
    );
}
export default BlogsList;