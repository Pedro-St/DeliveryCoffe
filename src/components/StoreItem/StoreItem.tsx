import { ShoppingCartSimple } from "phosphor-react"
import { useShoppingCart } from "../../context/ShoppingCartContext"
import { formatCurrency } from "../../ultilities/formatCurrency"
import { Coffe } from "./style"


type StoreItemProps = {
    id: number 
    image: string | undefined
    label: string | undefined
    title: string  | undefined
    description: string  | undefined
    price: number
    cifra: string 
} 
export function StoreItem({id, image, label, title, description, price, cifra } : 
    StoreItemProps) {
        const {
            getItemQuantity, 
            increaseCartQuantity, 
            decreaseCartQuantity,
            removeFromCart,
        } = useShoppingCart()   
        const quantity = getItemQuantity(id)
        return(

            <Coffe>
            <div className="coffeBox">
               
                    <div className="box">

                        <img src={image} alt="" className="img" />
                
                        <h4>{label}</h4>
                
                        <h2>{title}</h2>

                        <legend>{description}</legend>

                     <span className="count">
                        <p className="cifra">R$</p>
                        <p className="value">{price}</p>
                       
                        <div className="countButton">
                           {quantity === 0 ? 
                            <button onClick={() => increaseCartQuantity(id)} > 
                                <ShoppingCartSimple 
                                size={32} 
                                weight="fill" 
                                className="CartSelector" 
                                />
                            </button>
                           : <div >
                                <div>
                                    <button type="button" onClick={() => decreaseCartQuantity(id)}> - </button>
                                    
                                        <span className="quantity">{quantity}</span>
                                    
                                    <button type="button" onClick={() => increaseCartQuantity(id)} > + </button>
                                </div>
                            </div>} 

                         </div>
                         
                    </span>  
            
                </div>
            </div>
        </Coffe>
        );
    }