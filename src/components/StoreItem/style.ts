import styled from "styled-components";

export const Coffe = styled.div`

  .coffeBox{
        

     
        .box{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 256px;
            height: 310px;
            background: ${(props) => props.theme['base-card']};
            border-radius: 6px 36px;


                img{
                width: 100px;
                height: 100px;
                margin-top: -25px;
                }

            }
        }

        h4{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
            font-family: 'Roboto';
            width: 75px;
            height: 13px;
            margin-top: -16px;
            font-size: 0.625rem;
            line-height: 130%;
            color: ${(props) => props.theme['yellow-dark']};
            text-transform: uppercase;

            background: ${(props) => props.theme['yellow-light']};
            padding: 4px 8px;
            border-radius: 100px;
        }

        h2{ 
            display: flex;
            align-items: flex-end;
            text-align: center; 
            font-family: 'Baloo 2';
            margin-top: -16px;
            font-size: 1.25rem;
            line-height: 130%;
            color: ${(props)=> props.theme['base-text']};
        }

        legend{
            margin-left: 20px;
            margin-right: 20px;
            font-family: 'Roboto';
            font-size: 0.875rem;
            line-height: 130%;
            margin-top: -8px;
            text-align: center;
            color: ${(props)=> props.theme['base-label']};
        }

        .count{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 0px;
            gap: 29px;
            font-family: 'Roboto';
            color: ${(props)=> props.theme['base-text']};
            margin-left: -35px;

            .cifra{
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: -25px;
                margin-top: 20px;
                font-family: 'Roboto';
                font-size: 0.8rem;
                line-height: 18px;
                color: ${(props)=> props.theme['base-text']};    
            }
            
            .value{
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: 15px;
                font-family: 'Baloo 2';
                font-size: 1.5rem;
                color: ${(props)=> props.theme['base-text']};
                
            }

             
            .countButton{
                    display: flex;
                    align-items: center;
                    flex-direction: row;
                    justify-content: center;
                    gap: 5px;
                    width: 72px;
                    height: 38px;
                    margin-left: -15px;
                    border-radius: 6px;
                   
                    
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
                        margin-top: -5px;
                        color: ${(props)=> props.theme['purple']};
                    }
                    
                    .quantity{
                        margin-top: -2px;
                    }
                }
                
                .CartSelector{
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    margin-left: 130px;
                    margin-top: 5px;
                    padding: 8px;
                    width: 38px;
                    height: 38px;
                    border-radius: 6px;
                    background: ${(props) => props.theme['purple']};
                    color: ${(props) => props.theme['background']};
                }  
            
            } 

`