function Dosomething (event){
    console.log("hello button clicked ")
    console.log(event);
}
function click(){
    console.log("hello paragraph clicked ")
}
function hover(){
    console.log("hello paragraph hovered ")
}
function handleDoubleClick(){
    console.log("hello paragraph double clicked ")
}
export default function Button() {
    return (<div>
        <button onClick={Dosomething}>click me </button>
        <p onMouseOver={click} > 50lpa  </p>
        <p onMouseOver={hover} > 100lpa  </p>
        <button onDoubleClick={handleDoubleClick}>double click</button>
    </div>
    )
}
