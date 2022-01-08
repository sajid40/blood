import axios from "axios";
import React, { useState } from "react";
import "./login.css";
import { useHistory, useLocation } from "react-router-dom";
export default function Login() {
    const [logInput, setLoginput] = useState("");
    const [blood, setBlood] = useState("");
    const [isLogged, setIsLogged] = useState(false);
    const [isLogged1, setIsLogged1] = useState(false);
    const history = useHistory();
    const location = useLocation();
    const handleLoingSubmit = async (e) => {
        // console.log(logInput);
        e.preventDefault();

        try {
            const data = await axios.post("http://localhost:7000/login", {
                phoneNumber: logInput,
            });
            console.log(data.data);
            if (data.data.success === true) {
                setBlood(data.data.mgs);
                setIsLogged(true);

                localStorage.setItem("isLogged", true);
                window.location.replace('/service')
                history.push("/");
            } else if (data.data.success === false) {
                window.alert(data.data.msg);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="Login">
                <h1 className="titleLogin">Login Form</h1>
                <label>Enter Your phone number</label>
                <input
                    type="text"
                    placeholder="Phone..."
                    autoFocus
                    onChange={(e) => setLoginput(e.target.value)}
                />
                <button
                    className="btnSubmit"
                    type="submit"
                    onClick={handleLoingSubmit}
                >
                    Submit
                </button>
            </div>
            {isLogged &&
                (blood == logInput ? (
                    <>
                        <h1 className="doesnotmatch">SuccessFull Login</h1>
                    </>
                ) : (
                    <>
                        <h1 className="doesnotmatch">phone number wrong!</h1>
                    </>
                ))}
        </>
    );
}
