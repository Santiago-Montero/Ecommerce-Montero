import React,{ useState } from "react";



const CartContext = React.createContext();


export const CartContextProvider = ({ children }) =>{
    const [cartQuantity, setCartQuantity] = useState(0) 
    const [cartItems , setCartItems] = useState([])
    const [itemsPrice , setItemsPrice] = useState(0)


    const addToCart  = (item, quantity, waistItem) =>{
        let quantityCart = cartQuantity + quantity
        let priceItem = itemsPrice + (quantity * item.price)
        if(inCart(item.id)){
            const cartItemsReload = cartItems.map((i) => {
                let quantityOld = i.quantityItem
                if(i.id === item.id){
                    return{
                        ...i,
                        quantityItem : quantity + quantityOld,
                        waistItem : waistItem
                    }
                    
                }else{
                    return i
                }
            })
            setCartItems(cartItemsReload)
            setItemsPrice(priceItem)
            setCartQuantity(quantityCart)
            
        }else{
            const newItem = {
                ...item,
                quantityItem : quantity,
                waistItem : waistItem
                } 
                setCartItems([...cartItems, newItem])
                setItemsPrice(priceItem)
                setCartQuantity(quantityCart)
        }
    }

    const inCart = (id) =>{
        return cartItems.some(item => item.id === id)
    }
    const removeToCart  = (id, price , quantity) =>{
        const removeItem = cartItems.filter(item => item.id !== id)
        const removePrice = price * quantity
        console.log(id)
        setCartQuantity(cartQuantity - quantity)
        setCartItems(removeItem)
        console.log(removeItem)
        setItemsPrice(itemsPrice - removePrice)
    }

    const clear = () =>{
        setCartQuantity(0)
        setCartItems([])
        setItemsPrice(0)
    }
    const buy = () =>{
        setCartQuantity(0)
        setCartItems([])
        setItemsPrice(0)
    }

    return(
        <CartContext.Provider 
        value={{
            cartQuantity,
            cartItems,
            itemsPrice,
            addToCart,
            removeToCart,
            buy,
            clear
        }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContext

