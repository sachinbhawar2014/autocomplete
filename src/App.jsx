import { useState } from "react";
import "./App.css";
import Autocomplete from "./components/Autocomplete";

function App() {
    return (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1>Autocoplete</h1>
            <Autocomplete />
        </div>
    );
}

export default App;
