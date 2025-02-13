import { useNavigate } from "react-router-dom";
import "./Register.css"
import { useEffect, useState } from "react";
import axios from "axios";
import _ from "lodash";
function Register() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:4000/users").then((Response) => setUsers(Response.data))
    }, []);
    const navigate = useNavigate();
    const registerClick = () => {
        let errorMsg = { name: "", email: "", password: "" };
        if (formData.name === "" && formData.email === "" && formData.password === "") {
            errorMsg = "Please enter the valid field ";
        }
        else if (formData.name === "") {
            errorMsg.name = "Please enter name";
        }
        else if (formData.email === "") {
            errorMsg.email = "Please enter email";
        }
        else if (formData.password === "") {
            errorMsg.password = "Please enter password";
        }
        else {
            const newUserData = {
                ...formData,   
            };
            let existingUser = {};
            users.map((user) => {
                console.log('user: ', user);
                console.log('newUserData: ', newUserData);
                if (user.email === newUserData.email) {
                    existingUser = user;   
                }
            })
            console.log('existingUser: ', existingUser);
            if (_.isEmpty(existingUser)) {
                axios.post("http://localhost:4000/users", newUserData)
                    .then((response) => {
                        console.log("User registered:", response.data);
                        navigate("/login");
                    })
                    .catch((error) => {
                        console.error("There was an error registering the user:", error);
                    });
            } else {
                errorMsg.email = "User already exists!";
            }
        };
        setError(errorMsg);
    }
    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };
    const isFormValid = formData.name && formData.email && formData.password && !(error.name || error.email || error.password);
    return (
        <div>
            <div className="section">
                <div className="register-form-header">Blogs</div>
                <div>Publish your passions, your way ...</div>
                <hr />
                <div className="register-heading">Register</div>
                <div className="register-error">{error.name}</div>
                <div className="register-error">{error.email}</div>
                <div className="register-error">{error.password}</div>
                <div className="register-form-input-field">
                    <label className="register-name">Name</label><br />
                    <input type="text" className={`input-field-name ${error.name ? "invalid-input" : ""}`} placeholder="Firstname Lastname" id="name" value={formData.name} onChange={handleChange} /><br />
                </div>
                <div className="register-form-input-field">
                    <label className="register-name">Email id</label><br />
                    <input type="text" className={`input-field-email ${error.email ? "invalid-input" : ""}`} placeholder="test@gmail.com" id="email" value={formData.email} onChange={handleChange} /><br />
                </div>
                <div className="register-form-input-field">
                    <label className="register-name">Password</label><br />
                    <input type="text" className={`input-field-password ${error.password ? "invalid-input" : ""}`} placeholder="Test@123" id="password" value={formData.password} onChange={handleChange} /><br />
                </div>
                <button onClick={registerClick} className="register-form-button" disabled={!isFormValid} ><ins>Register</ins></button>
            </div>
        </div>
    );
}
export default Register;