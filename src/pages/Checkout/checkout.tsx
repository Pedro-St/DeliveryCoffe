import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import entregador from "../../assets/illustration.svg";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { CheckoutBOX } from "./styles";


export function Checkout() {
    
    return(
        <CheckoutBOX>

        <div>
            <article className="Title">
                <h1>Uhu! Pedido Confirmado</h1>
                <h3>Agora é só aguardar que logo o café chegará até você</h3>
            </article>
            <div className="Box">
                <div>
                        <h2>
                        <MapPin size={32} weight="fill" className="map" /> 
                        <p>
                            Entrega em "<strong>Rua Severino José da Silva, 148</strong> <br />
                            Ponte dos Carvalhos - Cabo de Santo Agostinho, PE" 
                        </p> 
                        
                        </h2>
                        
                         <h3 className="timerDelivery">
                         <Timer size={32} weight="fill" className="timer" />
                            <p> 
                                Previsão de entrega <br /> "<strong>20min - 30min</strong>"
                            </p>
                        </h3>
                        
                        <h4 className="Payment">
                        <CurrencyDollar size={32} weight="fill" className="currencyDolar" />
                            <p>
                                Pagamento na Entrega <br />
                                <strong> "Cartão de Credito"</strong> 
                            </p>
                        </h4>
                        
                 </div>
                    <img src={entregador} alt="" /> 
            </div>
        </div>
    </CheckoutBOX>
    );
}