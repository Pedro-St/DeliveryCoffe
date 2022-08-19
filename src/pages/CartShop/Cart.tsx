import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCart } from "../../components/ShoppingCart.tsx/ShoppingCart";
import { CartShopping } from "./style";
import React from 'react';

 export function Cart() {
    
    function CardCredit(e: any) {
        e.preventDefault();
        console.log('Cartão de Credito');
      }

      function CardDebit(e: any) {
        e.preventDefault();
        console.log('Cartão de Debito')
      }

      function Pix(e: any) {
        e.preventDefault();
        console.log('Pix');
      }
        
 
    return(
        <CartShopping>
           

          <h1 className= "titlePageForm">Complete seu Pedido</h1>
            <div className="forms">
               <form action="" method="post"  className="form">
                <div className="formTitle">
                    <MapPinLine size={24}  />
                    <span>
                        <h2>Endereço de Entrega</h2>
                        <h3>Informe o endereço onde deseja receber seu pedido</h3>
                    </span>
                </div>
                <div> 

                <input type="text" name="cep" placeholder="Cep" className="cep" required />
                
                <input 
                type="textarea" 
                name="rua" 
                placeholder="Rua" 
                className="rua" 
                required/>

                    <div>
                    
                    <input type="textarea" name="num" id="num" placeholder="Numero" className="num"  required/>
                    <input type="text" name="complementp" id="complemento" placeholder="Complemento" className="complemento" />
                    </div>
                    
                    <input type="textarea" name="bairro" id="bairro" placeholder="Bairro"  className="bairro" required/>
                    <input type="textarea" name="cidade" id="cidade" placeholder="Cidade"  className="cidade" required/>
                    <input type="textarea" name="estado" id="estado" placeholder="UF" className="estado" required/>
                
                </div>

                <div className="payment">
                    <div className="paymentTitle">
                        <CurrencyDollar size={24} />
                            <span>
                                <h2>Pagamento</h2>
                                <h3>O pagamento é feito na entrega. Escolha a forma que deseja pagar</h3>
                            </span>
                    </div>
                   
                    <div className="buttons">


                        <button type="submit" onClick={CardCredit} > <CreditCard size={18} className="CreditCard"/>Cartão de Crédito </button>
                        <button type="submit" onClick={CardDebit}> <Bank size={18} className="CreditCard"  /> Cartão de Débito</button>
                        <button type="submit" onClick={Pix}> <Money size={18} className="CreditCard" />Dinheiro</button>
                    </div>
                </div>

               
                <NavLink to="/checkout">
                <button type="submit" className="buttonForm" >
                    Confirma Pedido
                </button>
                </NavLink>
               </form>
            </div>
                <ShoppingCart />
        </CartShopping>        
    )
} 

