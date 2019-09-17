

import React from "react"
import "./card.css"

function Card(addToDo) {

    // function createCard() {
    //     console.log("...createing card")
    // }

    function toggleDone() {
        console.log("...toggling the button")
    }

    return(
        <div className="card-wrapper">
            <div className="card w-50">
                <div className="card-body">
                    <h5 className="card-title">Card title {"This text will be the todo name"}</h5>
                    <a className="btn btn-primary" onClick={toggleDone}>Completed</a>
                </div>
            </div>
        </div>
    )
}

export default Card