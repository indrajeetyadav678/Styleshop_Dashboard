import { useSelector, useDispatch } from "react-redux";
import Product_details from "./Product_details";
import { addtocart } from "../contoller/AddcartSlice";


const Product_info = () => {
    const mylikeproduct = useSelector(state => state.mydatailpage.call_product_deatil);
    const dispatch = useDispatch();
    const setcarddata = (image1, details, price, offer, originprice, brand, id, quantity1) => {
        let cartdata = { image: image1, detail: details, price: price, offer: offer, originalprice: originprice, brand: brand, id: id, quantity: quantity1 }
        dispatch(addtocart(cartdata));
    }
    const answer = mylikeproduct.map(key => {
        return (
            <>
                <Product_details 
                Pdatabase={mylikeproduct}
                Pid={key.id}
                pid={"like"+(key.id)}
                image1={key.image1} 
                image2={key.image2} 
                image3={key.image3} 
                image4={key.image4}
                function={() => { setcarddata(key.image1, key.details, key.price, key.offer, key.MRP, key.brand, key.id, 1) }}
                name={key.name}
                brand={key.brand}
                price={key.price}
                MRP={key.originalprice}
                offer={key.offer}
                details={key.details}
                color={key.color}
                oigin={key.origin}
                />
            </>
        );
    })
    return (
        <>
            {answer}
        </>
    );
}
export default Product_info;