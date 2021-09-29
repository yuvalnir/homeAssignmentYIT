import React from "react";
import landScape from "../landscape_207075.jpg"

function Card({name, color}) {
    return (
        <div className="card">
            <img className="img-area" src={landScape} alt="landscape" />
            <div className="text-area">
                <div className="category" style={{backgroundColor: color}}>
                    <span>{name}</span>
                </div>
                <div className="title">
                    <p>סיור קולינרי בין המסעדות הערביות הכי טובות בחיפה</p>
                </div>
                <div className="sub-title">
                    <p>
                        גם אני, שעסוק כל השבוע, מתפנה לצפות בטלוויזיה רק בסופי
                        השבוע, ונוכחתי שרוב תוכניות הטלוויזיה בכל הערוצים הן
                        תוכניות אוכל.
                    </p>
                </div>
                <div className="author">
                    <p>שירית גל</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
