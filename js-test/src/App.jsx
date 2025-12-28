import Header from "./components/Header";
import PersonList from "./components/PersonList";
import { useState, useEffect } from "react";
import AddForm from "./components/AddForm";
import "./App.css";

function App() {
  const [data, setData] = useState([
    { id: 1, name: "สมพงศ์", gender: "male" },
    { id: 2, name: "สมศรี", gender: "female" },
    { id: 3, name: "สมชาย", gender: "male" },
    { id: 4, name: "สมทรง", gender: "female" }
  ]);

  const [theme,setTheme] = useState(localStorage.getItem("mode") || "lgiht")

  function deletePerson(id) {
    const result = data.filter((user) => user.id !== id)
    setData(result)
  }

  useEffect(() => {
    localStorage.setItem("mode",theme)
  },[theme])

  return (
    <div className={theme}>
    <div className="app">
      <Header title="ข้อมูลประชากร" theme={theme} setTheme={setTheme}/>
      <main>
        <AddForm data={data} setData={setData} />
        <PersonList data={data} deletePerson={deletePerson} />
      </main>
    </div>
    </div>
  );
}

export default App
