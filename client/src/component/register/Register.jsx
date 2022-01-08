import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(null);
  const [PhoneNumber, setPhoneNumber] = useState(null);
  const [presentAdress, setPresentAdress] = useState("");
  const [blood, setBlood] = useState("");
  const [result, setResult] = useState(false);

  const handlerSubmit = (e) => {
    e.preventDefault();
    const postAllData = async () => {
      const allData = {
        fullname: name,
        email,
        age,
        phoneNumber: PhoneNumber,
        presentAdress,
        bloodGourp: blood,
      };
      const data = await axios.post("http://localhost:7000/register", allData);
      console.log(allData);
      setResult(true);
    };
    postAllData();
    // console.log(blood);
  };
  return (
    <div className="register">
      {!result ? (
        <>
          <div className="regLog">
          <h1>Registration Form</h1>
          <Link className="link" to="/login"><p className="login">Login</p></Link>
          
          </div>
          <form className="form" onSubmit={handlerSubmit}>
            <label className="label">Full Name</label>
            <input
              type="text"
              required
              placeholder="Your Name.."
              onChange={(e) => setname(e.target.value)}
            />

            <label>Email</label>
            <input
              type="email"
              required
              placeholder="Your Email.."
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Age</label>
            <input
              type="number"
              required
              placeholder="Your Age.."
              onChange={(e) => setAge(e.target.value)}
            />
            <label>Phone number</label>
            <input
              type="text"
              required
              placeholder="Your number.."
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <label>Present Adress</label>
            <input
              type="text"
              required
              placeholder="Your Adress.."
              onChange={(e) => setPresentAdress(e.target.value)}
            />
            <label>Blood Group</label>
            <input
              type="text"
              required
              placeholder="Your Blood group.."
              onChange={(e) => setBlood(e.target.value)}
            />
            <>
              <button className="btnSubmit" type="submit">
                Submit
              </button>
            </>
          </form>
        </>
      ) : (
        <>
          <h1>SuccessFull Registration.</h1>
        </>
      )}
    </div>
  );
}
