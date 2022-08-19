import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import imgBanner from '../../assets/Imagem.svg'
import { CoffeBox } from '../../components/CoffeBox/CoffeBox';
import { BannerDiv } from './styles';


export function Home() {
    return (
        <BannerDiv>
        <div className="banner">
            <div>
                <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                <h3>Com o Coffe Delivery você recebe seu café one estiver, a <br></br> qualquer hora</h3>
                <div className="miniBanner">
                    <span> 
                        <div className="descricao"> <ShoppingCart size={32}  weight="fill" className="cartIcon" /> Compra Simples e segura </div> 
                        <div className="descricao"> <Timer size={32} weight="fill" className='timerIcon' /> Entrega rápida e rastreada</div>
                        <div className="descricao"> <Package size={32} weight="fill" className="boxIcon"/> Embalagem mantém o café intacto</div>
                        <div className="descricao"> <Coffee size={32} weight="fill" className="coffeIcon" /> O café chega fresquinho até você</div>
                    </span>
                    
                </div>
            </div>
                       
            <img src={imgBanner} alt="Logo" />

        </div>

        <div className="coffesSelect">
            <h1>Nossos Cafés</h1>
        </div>

            <CoffeBox/> 
            

        </BannerDiv>
    );

}