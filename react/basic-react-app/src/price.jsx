export default function Price({oldPrice,newPrice}) {   
    let oldstyles ={
        textDecoration : "line-through",
    };
    let newStyles={
        fontWeight : "bold",

    };
    let styles= {
        backgroundColor : "yellow",
        height:"30px",
        width :"200px",
        borderBottomLeftRadius:"5px",
        borderBottomRightRadius:"5px",

    };
    return (
        <div style={styles}>

      <span style ={oldstyles}>{oldPrice}</span>
      &nbsp; &nbsp; &nbsp;
     <span style={newStyles}>{newPrice} </span>

        </div>
        
    );
}  