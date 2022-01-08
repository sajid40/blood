import axios from "axios";
import React, { useEffect, useState } from "react";
import "./services.css";
import { useHistory } from "react-router-dom";
export default function Services() {
    const [arr, setArr] = useState([]);
    const history = useHistory();
    useEffect(() => {
        const getFunc = async () => {
            const data = await axios.get("http://localhost:7000/get");

            setArr(data.data.data);
        };
        const auth = localStorage.getItem("isLogged") || false;
        if (auth) getFunc();
        else {
            history.push("/login");
        }
    }, []);
    return (
        <div className="service">
            <table className="customers">
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Adress</th>
                    <th>Blood-Goup</th>
                </tr>
                {arr.map((ele, ind) => (
                    <tr>
                        <td>{ele.fullname}</td>
                        <td>{ele.age}</td>
                        <td>{ele.email}</td>
                        <td>{ele.phoneNumber}</td>
                        <td>{ele.presentAdress}</td>
                        <td>{ele.bloodGourp}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
}
