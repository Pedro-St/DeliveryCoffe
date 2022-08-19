import { Trash } from "phosphor-react"
import { useShoppingCart } from "../../context/ShoppingCartContext"
import storeItems from "../../data/items.json"
import { formatCurrency } from "../../ultilities/formatCurrency"
import { TableOfSelected } from "./style"

type CartItemProps = {
    id: number
    quantity: number
    cifra : string
    price: number
}

export function CartItem({id, quantity} : CartItemProps) {
    const {
        increaseCartQuantity, 
        decreaseCartQuantity, 
        removeFromCart } = useShoppingCart()

    const item = storeItems.find(i => i.id === id)
    if(item === null) return null

    return (
        <TableOfSelected>
        
        <div className="SelectedCoffes">
            <img src={item?.image} alt="" />
        </div>
  
      <div className="box-product">
            <div className="box-name">
                {item?.title}
                {quantity > 1 &&  <span>
                {quantity}x
                </span>  }
       
            </div> 
        </div>
        <div className="price">
            {formatCurrency(item?.price)}
        </div>
        <div className="priceX">
            </div>
        <button className="removeButt"onClick={()=> removeFromCart(item.id)}>
        <Trash size={32} weight="thin" className="trashIcon"/> remover
        </button>
         
        <div className="countButton">
            <button type="button" onClick={() => decreaseCartQuantity(id)}> - </button>
                                    
                        <span className="quantity">{quantity}</span>
                                    
            <button type="button" onClick={() => increaseCartQuantity(id)} > + </button>
        </div>
        
               
        </TableOfSelected>
    )
}