import { createContext, ReactNode, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "../components/ShoppingCart.tsx/ShoppingCart";

type ShoppingCartContextProvicdeProps = {
    children: ReactNode
}

type CartItem = {
    id: number
    quantity: number
}

export enum PaymentMethod {
    CREDIT_CARD = "Cartão de Crédito",
    BANK = "Cartão de Débito",
    MONEY = "Dinheiro",
  }


type ShoppingCartContext = {
    cartQuantity: number
    cartItems: CartItem[]
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider( {children}: 
    ShoppingCartContextProvicdeProps ) {
        const [cartItems, setCartItems] = useState<CartItem[]>([])


        const cartQuantity = cartItems.reduce(
        (quantity, item) => 
        item.quantity + quantity,
         0
        )

        function getItemQuantity(id: number) {
            return cartItems.find(item => item.id === id)?.quantity || 0
        }

        function increaseCartQuantity(id: number) {
            setCartItems(currItems => {
                if (currItems.find(item => item.id === id) == null) {
                    return [...currItems, {id, quantity: 1}]
                } else {
                    return currItems.map(item => {
                        if(item.id === id) {
                            return {...item, quantity: item.quantity + 1}
                        } else {
                            return item
                        }
                    })
                }
            })
        }

        function decreaseCartQuantity(id: number) {
            setCartItems(currItems => {
                if (currItems.find(item => item.id === id)?.quantity === 1) {
                    return currItems.filter(item => item.id !== id)
                } else {
                    return currItems.map(item => {
                        if(item.id === id) {
                            return {...item, quantity: item.quantity - 1}
                        } else {
                            return item
                        }
                    })
                }
            })
        }

        function removeFromCart(id: number) {
            setCartItems(currItems => {
                return currItems.filter(item => item.id !== id)
             
            })
        }

  
       
        return (
        <ShoppingCartContext.Provider 
        value={ 
            {getItemQuantity, 
            increaseCartQuantity,
            decreaseCartQuantity,
            removeFromCart,
            cartItems,
            cartQuantity,
            }}
            >
            {children}
            
        </ShoppingCartContext.Provider>
    )
}