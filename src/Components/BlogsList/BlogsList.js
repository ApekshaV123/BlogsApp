import { useNavigate } from "react-router-dom";
import "./BlogsList.css"
import { useState } from "react";
function BlogsList() {
    const [blogs, setBlogs] = useState([{
        title: "Hello World",
        createdby: "apekshavishwasrao2002@gmail.com",
        createdAtDate: "30 jan, 2025",
        blogDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsumLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        likes: 0,
        disLikes: 0,
    },
    {
        title: "hello world1",
        createdby: "apekshaVishwasrao@2002gmail.com1",
        createdAtDate: "31 jan, 2025",
        blogDescription: "I am New",
        likes: 0,
        disLikes: 0,
    }]);
    function handlelikes(index) {
        let tempBlogs = [...blogs];
        tempBlogs[index].likes++;
        setBlogs(tempBlogs);
    }
    function handleDisLike(index) {
        let tempBlogs = [...blogs];
        tempBlogs[index].disLikes++;
        setBlogs(tempBlogs);
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
                            <button className="thumb-down-button" onClick={()=>handleDisLike(index)}><i class="fa fa-thumbs-down" aria-hidden="true"></i>{singleBlog.disLikes}</button>
                        </div>
                    </div>
                })}
            </div>
        </div>
    );
}
export default BlogsList;