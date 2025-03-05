import './App.css'
import './ExerciseSearch.tsx'
import { Route, Routes } from 'react-router-dom'
import HomePage from "./HomePage.tsx";
import ExerciseSearchPage from "./ExerciseSearchPage.tsx";

function App() {
    return (
        <Routes>
            <Route path="/" Component={HomePage} />
            <Route path="/exerciseSearch" Component={ExerciseSearchPage} />
        </Routes>
    )
}

export default App;
