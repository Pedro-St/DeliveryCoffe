import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import logoCoffe from '../../assets/Logo.svg'
import { useShoppingCart } from '../../context/ShoppingCartContext'
import { HeaderContainer } from './styles'

export function Header() {
    const {cartQuantity} = useShoppingCart()
   return(
    <HeaderContainer>
        <NavLink to='/'>
            <img src={logoCoffe} alt="" />

        </NavLink>
         <nav>
            <div className="Locale">
                <p>
                    <MapPin size={20} weight="fill" href="/"/>
                       Recife, PE
                </p> 
            </div>
           
            <NavLink to="/cart" className="IconCart" title="Cart">
                <ShoppingCart size={20} weight="fill" />
                <div className="quantityCart">
                    {cartQuantity}
                </div>
            </NavLink>
        </nav> 
    </HeaderContainer>
       )
}