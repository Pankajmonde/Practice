import { useState } from "react"
export default function CommmentsForm(){

    let [formData,setFormData]=useState({
        username:"",
        remarks:"",
        rating:5
    });

    let handInputChange=(event)=>{
      setFormData((currData)=>{
return{...currData,[event.target.name]:event.target.value}
      });

    }
    let handlSubmit=(event)=>{
        event.preventDefault();
        console.log(formData);
       
    }
    return (
        <div>
            <h4>Give a comment</h4>
            <form onSubmit={handlSubmit}>
                <label htmlFor="username">Username:</label>
                <input placeholder="username" type="text" value={formData.username} onChange={handInputChange} id="username" name="username"/>
                <br></br>  <br></br>
                <label htmlFor="remarks">Remarks:</label>
                <textarea value={formData.remarks} placeholder=" add fe remarks" onChange={handInputChange} id="remarks" name="remarks">REmakrs</textarea>
                <br></br>  <br></br>

                <label htmlFor="rating">Rating:</label>       
                <input placeholder="rating" type="number" min={1} max={5} value={formData.rating} onChange={handInputChange} id="rating" name="rating"/>
                <br></br>  <br></br>
                <button>Add comments</button>
                

            </form>
        </div>
    )
}