import { createContext } from "react";
import products from "../requiredForShopping/all_product";
import new_collections from "../requiredForShopping/newCollection";
import react,{ useState } from "react";
import toast from 'react-hot-toast';


export const ShopContext = createContext(null);
const getDefaultCart = () => {
    let cart = {}
    for (let index = 0; index < products.length + 1; index++) {
        cart[index] = 0;

    }
    return cart;
}


const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())
    const addToCart = (itemId) => {
        toast.success("Item added to Cart Successfully! ")
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))

    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        toast.success("Item removed! Click to Shop now.")

    }
    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if(cartItems[item]>0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem
    }
    const contextValue = { products, new_collections,cartItems,addToCart,removeFromCart,getTotalCartItems };
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )

}
export default ShopContextProvider;













