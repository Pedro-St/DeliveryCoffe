import styled from "styled-components";

export const SelectedCoffes = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    z-index: 1;

    .coffeTitle{
        position: absolute;
        width: 156px;
        height: 23px;
        left: 752px;
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


   .SelectedProducts{
    
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px;
    gap: 56px;
    position: absolute;
    
    width: 448px;
    height: 498px;
    left: 750px;
    top: 230px;
    border-radius: 6px 44px;
    

    background: ${(props) => props.theme['base-card']}
   }

   .total{
    
    width: 120px;
    font-family: "Roboto";
    font-size: 20px;
    line-height: 26px;
    font-weight: 700;

    display: flex;
    align-items: center;
    text-align: right;
    flex-direction: row;

    position: absolute;
    height: 848px;
    margin-left: 290px;
    margin-top: -75px;

    color: ${(props) => props.theme['base-subtitle']};
   }

   .totaletter{
    width: 120px;
    font-family: "Roboto";
    font-size: 20px;
    line-height: 26px;
    font-weight: 700;

    display: flex;
    align-items: center;
    text-align: right;
    flex-direction: row;

    position: absolute;
    height: 848px;
    margin-left: 2px;
    margin-top: -75px;

    color: ${(props) => props.theme['base-subtitle']};
   }

   .totalItems{
    width: 120px;
    font-family: "Roboto";
    font-size: 14px;
    line-height: 26px;
    font-weight: 400;

    display: flex;
    align-items: center;
    text-align: right;
    flex-direction: row;

    position: absolute;
    height: 700px;
    margin-left: 315px;
    margin-top: -75px;

    color: ${(props) => props.theme['base-text']};

   }

   .totalItemsLetter{
            width: 120px;
            font-family: "Roboto";
            font-size: 14px;
            line-height: 26px;
            font-weight: 400;
            width: 150px;

            display: flex;
            align-items: center;
            text-align: right;
            flex-direction: row;

            position: absolute;
            height: 700px;
            margin-left: 2px;
            margin-top: -75px;

            color: ${(props) => props.theme['base-subtitle']};

        }

        .entrega{
            width: 120px;
            font-family: "Roboto";
            font-size: 14px;
            line-height: 26px;
            font-weight: 400;
            width: 150px;

            display: flex;
            align-items: center;
            text-align: right;
            flex-direction: row;

            position: absolute;
            height: 770px;
            margin-left: 320px;
            margin-top: -75px;

            color: ${(props) => props.theme['base-subtitle']};

        }

        .entraga-letter{
            
            width: 120px;
            font-family: "Roboto";
            font-size: 14px;
            line-height: 26px;
            font-weight: 400;
            width: 150px;

            display: flex;
            align-items: center;
            text-align: right;
            flex-direction: row;

            position: absolute;
            height: 770px;
            margin-left: 2px;
            margin-top: -75px;
            color: ${(props) => props.theme['base-text']};
        }

`