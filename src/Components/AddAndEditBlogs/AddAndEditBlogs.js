import { Navigate, useNavigate } from "react-router-dom";
import "./AddAndEditBlogs.css"
import { useState } from "react";
function AddAndEditBlogs() {
    const [addAndEditData,setAddAndEditData]=useState({
        title:"",
        description:"",
    });
    const navigate=useNavigate();
    const handleLogoutClick=()=>{
        console.log("add and Edit Data:",addAndEditData);
        navigate("/login");    
    };
    const handleCancelClick=()=>{
    console.log("cancel click");
    navigate(-1);
    }
    const handleSaveClick=()=>{
        console.log("save click");
        navigate("/blogsList");
    }
    const handleTitleChange=(event)=>{
     let addEditData={...addAndEditData}
     addEditData.title=event.target.value
     setAddAndEditData(addEditData);
    }
    const handleDescriptionChange=(event)=>{
        let addEditData={...addAndEditData}
        addEditData.description=event.target.value;
        setAddAndEditData(addEditData);
    }
    return (
        <div>
            <div className="title-form">
                    <input type="text" placeholder="Title" id="title" value={addAndEditData.title} onChange={handleTitleChange} className="title-name"/>
                    <textarea className="text-description" id="description" value={addAndEditData.description} onChange={handleDescriptionChange} >Description</textarea>
                <div className="title-form-button">
                    <button  onClick={handleCancelClick} className="title-cancel-button">Cancel</button>
                    <button onClick={handleSaveClick} className="title-save-button">Save</button>
                </div>
            </div>    
        </div>
    );
}
export default AddAndEditBlogs;
