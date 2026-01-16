import { useState } from "react";
export default function Likebutton() {
    let [isLiked, setisLiked] = useState(false);
    let toggleLike = () => {
        setisLiked(!isLiked);
    }
    let Likedstyle ={color:"red"}
    return (
        <div>
            <p onClick={toggleLike}>
                {
                    isLiked ? (

                 < i class="fa-solid fa-heart" style={Likedstyle}></i>
            ): (
                  <i class="fa-regular fa-heart"></i>
            ) }
                
           
        </p>

        </div >
    )
}