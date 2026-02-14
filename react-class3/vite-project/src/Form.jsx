// import { useState } from "react";
// export default function Form(){
//     let [FormData,setFormData]=useState({
//         fullname:"",
//         username:"",
//         password:""
//     });
    

// //     let handlNameChange=(event)=>{
// //  setFullName(event.target.value);

// //     };
// //     let handlUserName=(event)=>{
// //  setUserName(event.target.value);


// //     };
// let handleInputChange=(event)=>{
//     setFormData((currData)=>{
//      return {...currData, [event.target.name]:event.target.value}; //spread operator to create a new object with updated values
//     })

// }  

// let handleSubmit=(event)=>{
//     event.preventDefault(); //prevent the default form submission behavior
//     console.log(FormData);
//    setFormData({
//     fullname:"",
//     username:"",
//     password:""
//    });
// };
//     return (
//         <form onSubmit={handleSubmit}>
//         <label htmlFor="name">Name:</label>
            
//             <input type="text" placeholder="Enter your name"
//              value={FormData.fullname} 
//               onChange={ handleInputChange}
//              id="name"
//              name="fullname"
//              />
             
           
//             <br></br>  
//             <label htmlFor="username">UserName:</label>
            
//             <input type="text" placeholder="Enter your username"
//              value={FormData.username} 
//              onChange={ handleInputChange}
//              id="username"
//                 name="username"
//              />
//              <br></br>  
//             <label htmlFor="password">Password:</label>
            
//             <input type="password"
//              placeholder="Enter your password"
//              value={FormData.username} 
//              onChange={ handleInputChange}
//              id="password"
//             name="password"
//              />
//             <button>Submit</button>
    
//         </form>
//     );
// }