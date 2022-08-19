import styled from "styled-components";

export const TableOfSelected = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 8px 4px;
    gap: 59px;
    width: 368px;
    height: 80px; 
    
    .SelectedCoffes {
        display: flex;
        flex-direction: column;
        
        img{
            width: 80px;
            height: 80px;
        
        }     
      
    }
    .box-product{

        .box-name{
        
        display: flex;
        flex-direction: row;
        align-items: center;
        font-family: 'Roboto';
        font-weight: 400;
        width: 368px;
        gap: 10px;
        margin-left: -40px;
        line-height: 21px;
        font-size: 1rem;
        
        color: ${(props)=> props.theme['base-subtitle']};
    }

}
     .countButton{
                    display: flex;
                    align-items: center;
                    flex-direction: row;
                    justify-content: center;
                    gap: 5px;
                    width: 272px;
                    height: 38px;
                    margin-left: -15px;
                    border-radius: 6px;
                    font-size:1rem;
                    margin-left: -260px;
                    margin-right: 250px;
                    margin-top: 31px;
                    height: 32px;
                    z-index: 5;
                    
                    background: ${(props)=> props.theme['base-button']};
                    
                    button{
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;
                        border: transparent;
                        align-items: center;
                        background: transparent;
                        
                        font-size: 1.5rem;
                        cursor: pointer;
                        margin-left: -20px;
                        margin-right: -20px;
                        width: 76px;
                        height:25px;
                            
                        margin-top: -5px;
                        color: ${(props)=> props.theme['purple']};
                    }
                    
                    .quantity{
                        margin-top: -2px;
                    }
                } 

            .price{
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 700;
                font-size: 1rem;
                margin-left: -200px;
                line-height: 21px;

                display: flex;
                align-items: center;
                text-align: right;

                color: ${(props)=> props.theme['base-text']}

                
            }

            .priceX{
                margin-left: -200px;
                font-family: 'Roboto';
                font-weight: 700;
                font-size: 1rem;
                line-height: 21px;

                display: flex;
                align-items: center;
                text-align: right;

                color: ${(props)=> props.theme['base-text']}
                
            }

            .removeButt{
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                padding: 0px 8px;

                gap: 8px;

                width: 100px;
                height: 32px;
                margin-top: 30.5px;
                margin-left: -100px;
                cursor: pointer;
                
                background: ${(props) => props.theme['base-button']};
                color: ${(props)=> props.theme['base-text']};
                border: none;
                border-radius: 6px;

                text-transform: uppercase;
                font-family: 'Roboto';
                font-size: 12px;
                line-height: 19px;

                .removeButt:hover{
                    background: ${(props) => props.theme['base-hover']};
                }

                .trashIcon{
                    color: ${(props) => props.theme['purple']};
                    margin-top: -2px;
                }
            }
       

`