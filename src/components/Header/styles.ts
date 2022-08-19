import styled from "styled-components";

export const HeaderContainer = styled.header`

    display: flex;  
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 32px 115px;
    gap: 785px;

    position: absolute;
    height: 104px;

    nav{
        display: flex;
        gap: 0.8rem;
    }
   
 .Locale{
    display: flex;
    align-items: center;
    gap: 11px;
   
    p{
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: roboto, sans-serif;
        font-size: 1rem;
        gap: 4px;
        width: 143px;
        height: 38px;
        padding: 5px;
        border-radius: 8px;
        background: ${(props) => props.theme['purple-light']};
        color: ${(props) => props.theme['purple-dark']};
    }
}

.IconCart{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        width: 38px;
        height: 38px;
        padding: 5px;
        border-radius: 8px;
        color: ${(props) => props.theme['yellow-dark']};
        background-color: ${(props) => props.theme['yellow-light']};
}

.quantityCart{
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-right: 5px;
    padding-top: 2px;

    position: absolute;
    width:25px;
    height:25px;
    right: -9.35px;
    top: -5px;

    background-color: ${(props) => props.theme['yellow-dark']};
    border-radius: 1000px;

    width: 20px;
    height: 20px;

    font-family: 'Roboto';
    font-weight: 700px;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    letter-spacing: -0.6rem;

    color: ${(props) => props.theme['white']}
}
`