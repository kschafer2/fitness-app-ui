import './App.css'
import './ExerciseListSearch.tsx'
import ExerciseListSearch from "./ExerciseListSearch.tsx";
import TextField from "@mui/material/TextField";
import {useState} from "react";


function App() {

    const [inputText, setInputText] = useState("");

    const inputHandler = (e: { target: { value: string; }; }) => {

        //convert input text to lower case

        const lowerCase = e.target.value.toLowerCase();

        setInputText(lowerCase);

    };

  return (
        <div className="main">
            <h1>Exercise Search</h1>
            <div className="search">
                <TextField
                    id="outlined-basic"
                    onChange={inputHandler}
                    variant="outlined"
                    fullWidth
                    label="Search"
                />
            </div>
            {<ExerciseListSearch userInput={inputText}/>}
        </div>
  )
}

export default App
