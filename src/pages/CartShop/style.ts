import styled from "styled-components";

export const CartShopping = styled.div`
    
    display: flex;
    flex-direction: row;
    gap: 410px;
    height: 380px;
    top: 144px;
    margin-left: 115px;
   


    font-family: 'Roboto';
    font-size: 2rem;
    color: ${(props) => props.theme['base-text']};

    
    .titlePageForm{
        
        position: absolute;
        width: 170px;
        height: 23px;
        left: 120px;
        top: 185px;

    

        font-family: 'Baloo 2';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 130%;
    

        display: flex;
        align-items: center;

     

        color: #403937;
    }

    .forms{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding:0px;
        gap: 12px;

        position: absolute;
        width: 610px;
        height: 372px;
        left: 115px;
        margin-top: 230px;
        border-radius: 6px;

        background: ${(props) => props.theme['base-card']};

        .form{
            display: flex;
            flex-direction: column;

            .formTitle{
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                line-height: 21px;
                font-size: 1rem;
                gap: 8px;
                color: ${(props) => props.theme['yellow-dark']};
                height: 44px;
                width: 560px;
                margin-top: 40px;
                margin-left: 40px;

            }

            span{
                h2{
                    font-family: 'Roboto';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 1rem;
                    line-height: 21px;

                    display: flex;
                    align-items: center;
                    color: ${(props) => props.theme['base-subtitle']}
                }

                h3{
                    font-family: 'Roboto';
                    font-style: normal;
                    font-weight:400;
                    font-size: 0.9rem;
                    line-height: 18px;

                    display: flex;
                    align-items: center;
                    color: ${(props) => props.theme['base-text']}

                }
            }
        
            .cep{
                box-sizing: border-box;

                display: flex;
                flex-direction:row;
                align-items: center;
                padding: 12px;
                gap: 4px;

                width: 200px;
                height: 42px;
                margin-left: 40px;
                margin-top: 32px;

                background: ${(props) => props.theme['base-input']};
                border: 1px solid ${(props) => props.theme['base-button']};
                border-radius: 4px;

            }

            .rua{
                box-sizing: border-box;

                display: flex;
                flex-direction: row;
                align-items: center;
                padding: 12px;
                gap: 4px;

                width: 520px;
                height: 42px;
                margin-left: 40px;
                margin-top: 16px;

                background: ${(props) => props.theme['base-input']};
                border: 1px solid ${(props) => props.theme['base-button']};
                border-radius: 4px;
            }

            
            .num{
                box-sizing: border-box;

                display: flex;
                flex-direction: row;
                align-items:center;
                padding: 12px;
                gap: 4px;

                width: 200px;
                height: 42px;
                margin-left: 40px;
                margin-top: 16px;

                background: ${(props) => props.theme['base-input']};
                border: 1px solid ${(props) => props.theme['base-button']};
                border-radius: 4px;

            }

            .complemento{
                box-sizing: border-box;

                display: flex;
                flex-direction: row;
                align-items:center;
                padding: 12px;
                gap: 4px;

                width: 310px;
                height: 42px;
                margin-left: 250px;
                margin-top: -41px;

                background: ${(props) => props.theme['base-input']};
                border: 1px solid ${(props) => props.theme['base-button']};
                border-radius: 4px;

            }

            .bairro{
                box-sizing: border-box;

                display: flex;
                flex-direction: row;
                align-items:center;
                padding: 12px;
                gap: 4px;

                width: 200px;
                height: 42px;
                margin-left: 40px;
                margin-top: 16px;

                background: ${(props) => props.theme['base-input']};
                border: 1px solid ${(props) => props.theme['base-button']};
                border-radius: 4px;
            }

            .cidade{
                box-sizing: border-box;

                display: flex;
                flex-direction: row;
                align-items:center;
                padding: 12px;
                gap: 4px;

                width: 250px;
                height: 42px;
                margin-left: 250px;
                margin-top: -41px;

                background: ${(props) => props.theme['base-input']};
                border: 1px solid ${(props) => props.theme['base-button']};
                border-radius: 4px;
            }

            .estado{
                box-sizing: border-box;

                display: flex;
                flex-direction: row;
                align-items:center;
                padding: 12px;
                gap: 4px;

                width: 50px;
                height: 42px;
                margin-left: 510px;
                margin-top: -41px;

                background: ${(props) => props.theme['base-input']};
                border: 1px solid ${(props) => props.theme['base-button']};
                border-radius: 4px;
            }
        }
    }

    .payment{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 40px;
        gap: 12px;

        position: absolute;
        width: 610px;
        height: 207px;
        left: 0px;
        margin-top: 385px;
        border-radius: 6px;

        background: ${(props) => props.theme['base-card']};
        color: ${(props) => props.theme['purple']};

        .paymentTitle{
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            gap: 8px;

            width: 560px;
            height: 44px;

            
        }

       span{
        h2{
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            font-size: 1rem;
            line-height: 21px;

            display: flex;
            align-items: center;
            color: ${(props) => props.theme['base-subtitle']}
        }

        h3{
            font-family: 'Roboto';
            font-style: normal;
            font-weight:400;
            font-size: 0.9rem;
            line-height: 18px;

            display: flex;
            align-items: center;
            color: ${(props) => props.theme['base-text']}         
        }
       }

       .buttons{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 12px;
        
        .CreditCard{
            color: ${(props) => props.theme['purple']};
            gap: 2px;
            margin-top: -2px;
            margin-right: 5px;
        }

        .radio{
            font-size: 0.7rem;
        }

        button{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 172px;
        height: 51px;
        padding: 16px;
        margin-top: 32px;
        cursor: pointer;
        
        font-family: 'Roboto';
        font-style: normal;
        font-size: 12px;
        
        text-transform: uppercase;
        color: ${(props) => props.theme['base-text']};


        background: ${(props) => props.theme['base-button']};
        border: transparent;
        border-radius: 6px;

        &:focus{
            background: ${(props) => props.theme['purple-light']};
            border: 1px solid ${(props) => props.theme['purple-dark']};
            color: ${(props) => props.theme['purple-dark']};

        }
        }

        button:hover{
            background: ${(props) => props.theme['base-hover']};
        }

    }


    }

    .buttonForm{
        position: absolute;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 12px 8px;
        gap: 4px;
        cursor: pointer;
        z-index: 2;
        width: 368px;
        height: 46px;

        background: ${(props) => props.theme['yellow']};
        border-radius: 6px;
        border: none;
        transition: 2s;

        color: ${(props) => props.theme['white']};
        text-transform: uppercase;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 0.9rem;
        font-stretch: 100;

        margin-top: 80px;
        margin-left: 675px;
        
    }

    .buttonForm:hover{
        background: ${(props) => props.theme['yellow-dark']};
       
    }
`

export const Checkout = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

`