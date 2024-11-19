import React  from "react";
import './Form.css'

function Form(){
    return(
        <>
    <div className="Form">
        <h2 className="text-center mb-4 ">Contact Now</h2>
        <form>
            <label>Name</label>
            <input type="text" placeholder="Name" />
            <label>Email</label>
            <input type="Email" placeholder="Email" />
            <label>Phone No.</label>
            <input type="number" placeholder="Phone No." />
            <label>Massage</label>
            <textarea cols={5} placeholder="Massage" ></textarea>
            <button className="button bg-dark">Submit</button>
        </form>
    </div>
        
        </>
    )
}
export default Form