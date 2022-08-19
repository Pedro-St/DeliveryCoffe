import { useShoppingCart } from "../../context/ShoppingCartContext"
import { formatCurrency } from "../../ultilities/formatCurrency"
import { CartItem } from "../CartItem/CartItem"
import { SelectedCoffes } from "./style"
import storeItems  from "../../data/items.json"

export function ShoppingCart() {
    const {cartItems} = useShoppingCart()
    return(
        <SelectedCoffes>

        <h1 className='coffeTitle'>Café Selecionados</h1>
            <div className="SelectedProducts">
                {cartItems.map(item => (
                <CartItem price={0} cifra={""} key={item.id} {...item} />
                ))}
                <div>
                    <hr />
                </div>
                <div className="totaletter">
                    Total {" "}
                </div>
                <div className="total">
                {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find(i => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity + 3.50
              }, 0)
            )}
                </div>
                <div className="totalItemsLetter">
                    Total de itens{" "}
               </div>
                <div className="totalItems"> 
                {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                const item = storeItems.find(i => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity 
              }, 0)
            )} 
            </div>
                <div className="entraga-letter">
                        Entrega 
                </div>
                <div className="entrega">
                    
                    {formatCurrency(3.50)}</div>
                </div>
          

        </SelectedCoffes>
    )
}