import Card from "./components/Card";
import axios from "axios";
import { useEffect, useState } from "react";
import "./app.css"

const App = () => {
  const[categories, setCategories] = useState([]);

  useEffect(()=>{
    axios.get("https://api.chucknorris.io/jokes/categories")
       .then((response) => {
        console.log(response);
        setCategories(response.data);
        console.log("After === ",setCategories);
      })
  },[])

  return (
    <div className="App">
      <span className="bouncy-txt">Chuck Norries</span>
      <Card categories={categories}/>
    </div>
  );
}

export default App;
