import Product from "./product.jsx";


function ProductTab (){
    // let option=["4gb ram","64 gb rom","4000 mah battery"];
    // let option2=["8gb ram","128 gb rom","5000 mah battery"];
    let styles = {
        display:"flex", 
        flexWrap:"wrap",
        justifyContent:"align-center",
        alignItems:"center",
    };
return (
    <div style={styles}>
        
    <Product title ="logitech Mx master" idx={0}/>
    <Product title ="apple pemcil 2nd  gen" idx={1}/>
    <Product  title="zebronic zeb transfer" idx={2}/>
    <Product  title ="Petronics 23" idx={3}/>
     </div>
       );

}

export default ProductTab;