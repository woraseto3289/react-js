import boy from "../assets/boy.svg";
import girl from "../assets/girl.svg";

export default function User({item,deletePerson}) {
    return (
        <div>
            <li style={{ borderStyle: "solid", borderColor: item.gender == "male" ? "green" : "orange" }}>
                <img src={item.gender == "male" ? boy : girl} width={50} height={50} />
                <p style={{ color: "pink" }}>{item.name}</p>
                <div className="control">
                    <button onClick={()=>deletePerson(item.id)}>Delete</button>
                </div>
            </li>
        </div>
    );
}