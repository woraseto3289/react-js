import { useState } from "react";
import "./PersonList.css";
import User from "./User";

const PersonList = ({data,deletePerson}) => {
    const [show, setShow] = useState(true);
    const myStyle = {
        color: "salmon",
        fontSize: "45px"
    }
    return (
        <div className="container">
            <div className="header">
                <h1 style={myStyle}>จำนวนประชากร {data.length} คน</h1>
                <button onClick={() => setShow(!show)}>{show ? "ซ่อน" : "แสดง"}</button>
            </div>
            <ul>
                {show && data.map((item) => (
                    <User key={item.id} item={item} deletePerson={deletePerson}/>
                ))}
            </ul>
        </div>
    )
}

export default PersonList;