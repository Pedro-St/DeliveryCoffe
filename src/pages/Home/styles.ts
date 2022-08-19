import styled from "styled-components";

export const BannerDiv = styled.div`
    
    .banner{
      position: absolute;
      height: 544px;
      top: 104px;
      display: flex;
      justify-content: center;
      padding-top: 50px;
      padding-left: 110px;
      padding-right: 95px;
      
      
    }
    
    div{
        h1{
          font-family: 'Baloo 2', cursive;
          font-size: 3rem;
          line-height: 3.9rem
          
        }
        h3{
            font-family: 'Roboto';
            font-size: 20px;
            line-height: 26px;
            font-weight: 400;
        }

    }

    img{
        width: 476px;
        height: 360px;
        left: calc(50% - 476px/2 + 322px);
        top: calc(50% - 360px/2)
    }

    .miniBanner{
        position: absolute;
        width: 567px;
        height: 84px;
        left: calc(50% - 567px/2 - 226.5px);
        top: calc(50% - 84px/2 + 66px);
    }
    
    .descricao {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        gap: 12px;
        margin-left: -35px;
        font-size: 1rem;
        font-family: 'roboto';
        line-height: 130%;
        color: ${(props) => props.theme['base-text']};
        
        .cartIcon {
            padding: 8px;
            gap: 8px;
            width: 40px;
            height: 40px;
            border-radius: 1000px;
            background: ${(props) => props.theme['yellow-dark']};
            color: ${(props) => props.theme['background']}
        }

        .timerIcon{
            margin-top: 65px;
            margin-bottom: 65px;
            padding: 8px;
            gap: 8px;
            width: 40px;
            height: 40px;
            border-radius: 1000px;
            background: ${(props) => props.theme['yellow']};
            color: ${(props) => props.theme['background']}
        }

        .boxIcon{
            margin-left: 280px;
            padding: 8px;
            gap: 8px;
            width: 40px;
            height: 40px;
            border-radius: 1000px;
            background: ${(props) => props.theme['base-text']};
            color: ${(props) => props.theme['background']}
        }

        .coffeIcon{
            margin-top: 65px;
            margin-bottom: 65px;
            margin-left: 280px;
            padding: 8px;
            gap: 8px;
            width: 40px;
            height: 40px;
            border-radius: 1000px;
            background: ${(props) => props.theme['purple']};
            color: ${(props) => props.theme['background']}
        }

    }

    .coffesSelect{
        position: absolute;
        height: 1645px;
        margin-top: 620px;
        
        h1{
            margin-left: 110px;
            font-family: 'Baloo 2';
            font-size: 2rem;
            line-height: 41.6px;
            color: ${(props) => props.theme['base-text']};
        }
    }


`