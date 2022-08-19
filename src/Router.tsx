import {Routes, Route} from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'


import { Checkout } from './pages/Checkout/checkout'
import { Home } from './pages/Home'
import { Cart } from './pages/CartShop/Cart'



export function Router(){
    return(
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
            </Route>
        </Routes>
      
    )
}