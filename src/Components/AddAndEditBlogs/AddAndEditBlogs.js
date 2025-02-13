import { useNavigate, useParams } from "react-router-dom";
import "./AddAndEditBlogs.css"
import { useEffect, useState } from "react";
import axios from "axios";
import _, { isEmpty } from "lodash";
function AddAndEditBlogs() {
    const LoggedEmail = localStorage.getItem("email");
    console.log("logged Email:", LoggedEmail);
    const [addAndEditData, setAddAndEditData] = useState({
        title: "",
        description: "",
        createdBy: LoggedEmail 
    });
    const [error, setError] = useState({
        title: "",
        description: "",
        
        
    });
    const { id } = useParams();
    console.log("id:", id)
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:4000/posts/${id}`)
                .then((Response) => {
                    console.log('Response: ', Response);
                    setAddAndEditData(Response.data)
                })
        }
    }, [id])
    const navigate = useNavigate();
    
    const handleCancelClick = () => {
        console.log("cancel click");
        navigate(-1);
    }
    const handleSaveClick = () => {
        let errorMsg = { title: "", description: "" }
        if (addAndEditData.title === "" && addAndEditData.description === "") {
            errorMsg = "Please enter valid field";
        } else if (addAndEditData.title === "" && addAndEditData.description !== "") {
            errorMsg.title = "Please enter title";
        } else if (addAndEditData.title !== "" && addAndEditData.description === "") {
            errorMsg.description = "Please enter description";
        } else {
            const newBlogsData = {
                ...addAndEditData,
            };
            let addAndEditBlogs = {};
            blogs.map((blogs) => {
                console.log('blogs:', blogs);
                console.log('addAndEditData:', addAndEditData)
                if (blogs.title === addAndEditData.title) {
                    addAndEditBlogs = blogs;
                }
            });
            if (_.isEmpty(addAndEditBlogs)) {
                if (id) {
                    EditNewBlogData();
                }
                else {
                    addNewBlogData();
                }
            }
            else {
                errorMsg.title = "Blog already exist";
            }
        }
        setError(errorMsg);
    }
    const addNewBlogData = () => {
        axios.post("http://localhost:4000/posts", addAndEditData)
            .then((response) => {
                console.log("blogs data save:", response.data);
                navigate("/blogsList");
            })
            .catch((error) => {
                console.error("There was an error blogs", error);
            });
    }
    const EditNewBlogData = () => {
        axios.put(`http://localhost:4000/posts/${id}`, addAndEditData)
            .then((response) => {
                console.log("blogs data save:", response.data);
                navigate("/blogsList");
            })
            .catch((error) => {
                console.error("There was an error blogs", error);
            });
    }
    const handleTitleChange = (event) => {
        let addEditData = { ...addAndEditData }
        addEditData.title = event.target.value
        setAddAndEditData(addEditData);
    }
    const handleDescriptionChange = (event) => {
        let addEditData = { ...addAndEditData }
        addEditData.description = event.target.value;
        setAddAndEditData(addEditData);
    }
    const isFormValid = addAndEditData.title && addAndEditData.description && !(error.title || error.description);
    return (
        <div>
            <div className="title-form">
                <div className="addAndEdit-error">{error.title}</div>
                <div className="addAndEdit-error">{error.description}</div>
                <input type="text" placeholder="Title" id="title" value={addAndEditData.title} onChange={handleTitleChange} className={`title-name ${error.title ? "invalid-input" : ""}`} />
                <textarea className={`text-description ${error.description ? "invalid-input" : ""}`} id="description" value={addAndEditData.description} onChange={handleDescriptionChange} >Description</textarea>
                <div className="title-form-button">
                    <button onClick={handleCancelClick} className="title-cancel-button">Cancel</button>
                    <button onClick={handleSaveClick} className="title-save-button" disabled={!isFormValid}>Save</button>
                </div>
            </div>
        </div>
    );
}
export default AddAndEditBlogs;
