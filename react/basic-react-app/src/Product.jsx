import "./Product.css";
import Price from "./price.jsx";


function Product({ title, idx }) {
    let oldPrices = ["12,000", "11,000", "1,599", "599"];
    let newPrices = ["10,999", "9,999", "1,299", "499"];
    let descriptions = [
        ["8,000 DPI", "5 prograamble buttons"],
        ["intiutive touch", "desgined for ipad pro"],
        ["fast data transfer", "high quality sound"],
        ["23 inch full HD", "frameless design"]
    ];
    return (
        <div className="product">
            <h4>{title}</h4>
            <p>{descriptions[idx][0]}</p>
            <p>{descriptions[idx][1]}</p> 
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />


        </div>

    );
}
export default Product;


