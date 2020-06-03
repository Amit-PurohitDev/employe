import React from 'react';
import {CardWrapper, ImageContainer, NameInfo, ButtonBlock, MoreInfo} from '../../GlobalComponent/MainStyle';

const Card =(props)=>{
    return(
        <CardWrapper>
            <ImageContainer>
                <img src={props.listData.avatar_url} alt=""/>
            </ImageContainer> 
                <ButtonBlock>
                    <MoreInfo>More info</MoreInfo>
                </ButtonBlock>
                <NameInfo>{props.listData.login}</NameInfo>
        </CardWrapper>
    );
}


export default Card;