function formsubmit(event){
    console.log("form was submitted")
    event.preventDefault(); 
    console.log(event);
}

export default function Form(){
    return (
        <form onSubmit={formsubmit}>

            <input placeholder="enter your name" type="text" />
            <br/>
            <button>submit</button>
        </form>

    )
} 