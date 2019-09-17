import React from "react"

function TodoForm() {

    function handleFormSubmit(event) {
        // setValue(event.target.value)
        // console.log(event.target.value)
        console.log("...adding to the list")
    }

    function getFormInfo(event) {
        console.log(event.target)
    }

    return(
        <div>
            {/* todo input box */}
           <form>
               <div>
                    <label>
                    <input type="text" placeholder="Enter a todo" onChange={getFormInfo}></input>
                </label>
               </div>
           </form>

           {/* Button that will grab our data on submit button */}
           <button type="submit" onClick={handleFormSubmit}>Add</button>
        </div>
        
    );
};

export default TodoForm


