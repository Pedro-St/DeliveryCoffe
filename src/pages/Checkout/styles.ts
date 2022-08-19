import styled from "styled-components";

export const CheckoutBOX = styled.div`

.Title{
    h1{

        position: absolute;
        width: 393px;
        height:42px;
        left: calc(50% - 330px/2 - 383.5px);
        top: 184px;
        
        font-family: 'Baloo 2';
        font-size: 2rem;
        font-weight: 800;
        line-height: 42px;

        color: ${(props) => props.theme['yellow-dark']};
    }

    h3{
        position: absolute;
        width: 552px;
        left: calc(50% - 330px/2 - 383.5px);
        top: 210px;

        font-family: 'Baloo 2';
        font-size: 20px;
        font-weight: 800;
        line-height: 42px;

    }

  
}

.Box{
        box-sizing: border-box;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        padding: 40px;
        gap: 32px;

        position: absolute;
        width: 526px;
        height: 270px;
        left: calc(50% - 506px/2 - 297px);
        top: 296px;

        padding: 25px;
    
   
        border-radius: 6px 36px;
        border: 1px solid black;

   
    }   

   div{
    display: flex;
    flex-direction: column;

    h2{
        display: flex;
        gap: 12px;
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 16px;
        line-height: 21px;
        color: ${(props)=> props.theme['color-text']};
        .map{
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 8px;
            gap: 8px;

            width: 32px;
            height: 32px;

            background: ${(props) => props.theme['purple']};
            border-radius: 1000px;
            color: white;
        }
    }

    .timerDelivery{
        display: flex;
        gap: 12px;
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 16px;
        line-height: 21px;
        margin-top: 32px;
        color: ${(props)=> props.theme['color-text']};
    }

    .timer{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 12px;
        padding: 8px;
        width: 32px;
        height: 32px;


        background: ${(props) => props.theme['yellow']};
        border-radius: 1000px;
        color: white;
    }

    .Payment{
        display: flex;
        gap: 12px;
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 16px;
        line-height: 21px;
        margin-top: 32px;
        color: ${(props)=> props.theme['color-text']};
    }

    .currencyDolar{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 12px;
        padding: 8px;
        width: 32px;
        height: 32px;

        background: ${(props) => props.theme['yellow-dark']};
        border-radius: 1000px;
        color: ${(props)=> props.theme['white']};
    }

   }
    
   img{
    margin-left: 550px;
    margin-top: -257px;
    
   }

`