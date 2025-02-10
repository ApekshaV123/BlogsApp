import { Navigate, useNavigate } from "react-router-dom";
import "./AddAndEditBlogs.css"
import { useState } from "react";
function AddAndEditBlogs() {
    const [addAndEditData,setAddAndEditData]=useState({
        title:"",
        description:"",
    });
    const [error,setError]=useState({
        title:"",
        description:"",
    });

    const navigate=useNavigate();
    const handleCancelClick=()=>{
    console.log("cancel click");
    navigate(-1);
    }
    const handleSaveClick=()=>{
        let errorMsg={title:"",description:""}
        if(addAndEditData.title==="" && addAndEditData.description===""){
             errorMsg="Please enter valid field";
        }else if(addAndEditData.title==="" && addAndEditData.description !==""){
             errorMsg.title="Please enter title";
        }else if(addAndEditData.title !=="" && addAndEditData.description ===""){
             errorMsg.description="Please enter description";
        }else{
            navigate("/login");
        }
        setError(errorMsg);
        console.log("error:",error);
        console.log("add and Edit Data:",addAndEditData);
        console.log("save click");
        // navigate("/blogsList");
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
    const isFormValid=addAndEditData.title && addAndEditData.description && !(error.title || error.description);
    return (
        <div>
            
            <div className="title-form">
            <div className="addAndEdit-error">{error.title}</div>
            <div className="addAndEdit-error">{error.description}</div>
                    <input type="text" placeholder="Title" id="title" value={addAndEditData.title} onChange={handleTitleChange} className={`title-name ${error.title ? "invalid-input" :""}`}/>
                    <textarea className={`text-description ${error.description ? "invalid-input" :""}`} id="description" value={addAndEditData.description} onChange={handleDescriptionChange} >Description</textarea>
                <div className="title-form-button">
                    <button  onClick={handleCancelClick} className="title-cancel-button">Cancel</button>
                    <button onClick={handleSaveClick}  className="title-save-button" disabled={!isFormValid}>Save</button>
                </div>
            </div>    
        </div>
    );
}
export default AddAndEditBlogs;
