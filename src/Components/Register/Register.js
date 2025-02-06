import { useNavigate } from "react-router-dom";
import "./Register.css"
import { useState } from "react";
function Register() {
    const [formData, setFormData]=useState({
        name: "",
        email: "",
        password: "",
    });
    const [error,seterror]=useState({});
    const navigate=useNavigate();
    const loginClick=()=>{
        console.log("Register button click");
        console.log("form Data:",formData)
        navigate("/login");
    }
     const handleChange=(event)=>{
        const{id, value}=event.target;
        setFormData((prevData)=>({
            ...prevData,
            [id]:value
        }));
     };

     
     

    
    return (
        <div>
            <div className="section">
                <div className="register-form-header">Blogs</div>
                <div>Publish your passions, your way ...</div>
                <hr />
                <div className="register-heading">Register</div>
                <div className="register-form-input-field">
                    <label className="register-name">Name</label><br />
                    <input type="text" placeholder="Firstname Lastname" id="name" value={formData.name}  onChange={handleChange} className="input-field-name" /><br />
                </div>
                <div className="register-form-input-field">
                    <label className="register-name">Email id</label><br />
                    <input type="text" placeholder="test@gmail.com" id="email" value={formData.email} onChange={handleChange} className="input-field-email"/><br />
                </div>
                <div className="register-form-input-field">
                    <label className="register-name">Password</label><br />
                    <input type="text" placeholder="Test@123" id="password" value={formData.password} onChange={handleChange} className="input-field-password"/><br />
                </div>
                <button className="register-form-button" onClick={loginClick}><a href="">Register</a></button>
            </div>   
        </div>
    );
}

export default Register;