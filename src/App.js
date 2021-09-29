import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
    const [name, setName] = useState("אוכל");
    const [color, setColor] = useState("red");
    const colorsArr = [
        { value: "red", name: "אדום" },
        { value: "blue", name: "כחול" },
        { value: "green", name: "ירוק" },
        { value: "yellow", name: "צהוב" },
    ];

    return (
        <div className="app">
            <Card name={name} color={color} />
            <div className="updating-console">
                <div>
                    <p>צבע רקע - שם קטגוריה</p>
                    <select
                        className="dropdown-color-change"
                        onChange={(e) => setColor(e.target.value)}
                    >
                        {colorsArr.map((color) => {
                            return (
                                <option
                                    value={color.value}
                                    style={{ background: color.value }}
                                >
                                    {color.name}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div>
                    <p>שם קטגוריה</p>
                    <input
                        value={name}
                        className="input-name-change"
                        onChange={(e) => setName(e.target.value)}
                    ></input>
                </div>
            </div>
        </div>
    );
}

export default App;
