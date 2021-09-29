import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
    const [name, setName] = useState("אוכל");
    const [color, setColor] = useState("red");

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
                        <option value="red" style={{ background: "red" }}>
                            אדום
                        </option>
                        <option value="blue" style={{ background: "blue" }}>
                            כחול
                        </option>
                        <option value="green" style={{ background: "green" }}>
                            ירוק
                        </option>
                        <option value="yellow" style={{ background: "yellow" }}>
                            צהוב
                        </option>
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

/* A. Create a component like in a sketch folder that includes:
            1. component with fixed height and width. Add box shadow to your component (you can see an example example2904.png)
            2. image, with fixed height and width,  should be with zoom animation on hover
            3. category name - with dynamic width due to the length of the text
            4. title - with dynamic height due to the length of the text, maximum 2 rows
            5. sub title - with dynamic height due to the length of the text, maximum 3 rows
            6. author name - with dynamic width due to the length of the text

In the example (test-absolute.html) all divs in component are in position absolute, just so you can use the placements and sizes.
You need to make it more dynamic and flexible.

  B.  Create div with fields for updating component:
        1. input to edit category name
        2. dropdown select to choose a background color of category name.
*/
