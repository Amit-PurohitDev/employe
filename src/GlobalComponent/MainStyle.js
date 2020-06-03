import styled from 'styled-components';

export const MainWrapper = styled.div`
        padding:2em;
        display: flex;
        flex-wrap: wrap;
`

export const CardWrapper = styled.div`
        height: 270px;
        width: 200px;
        position:relative;
        margin:1em;
`

export const ImageContainer = styled.div`
        height:200px;
        overflow:hidden;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        img{
                width:100%;
                height: 100%;
        }
`

export const NameInfo = styled.div`
        background: #8BC34A;
        position: relative;
        top: -26px;
        height: 60px;
        color: #fff;
        text-align: center;
        line-height: 72px;
        font-size: 18px;
        font-weight: 700;
        letter-spacing: 1px;
        text-transform: capitalize;
        box-shadow: 4px 8px 9px #757171;
        &::before{
                content: "";
                width: 10px;
                height: 100%;
                position: absolute;
                background: #8BC34A;
                left: -8px;
                border-top-left-radius: 10px;
        }
        &::after{
                content: "";
                width: 10px;
                height: 100%;
                position: absolute;
                background: #8BC34A;
                right: -8px;
                border-top-right-radius: 10px;
        }
`
export const ButtonBlock = styled.div`
        text-align: center;
        color: #fff;
        background: #673AB7;
        display: block;
        margin: 0 auto;
        width: 100px;
        padding: 3px;
        border-radius: 10px;
        position: relative;
        top: -17px;
        z-index: 1;
        font-size: 10px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
`
export const MoreInfo = styled.div`
       
`

export const ContactInfo = styled.div`
       
`