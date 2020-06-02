import React from 'react';
import {CardWrapper, ImageContainer, CaptionBox, NameInfo, ButtonBlock, MoreInfo, ContactInfo} from '../../GlobalComponent/MainStyle';

const Card =(props)=>{
    return(
        <CardWrapper>
            <ImageContainer>

            </ImageContainer> 
            <CaptionBox>
                <NameInfo>Name</NameInfo>
                <ButtonBlock>
                    <MoreInfo>More info</MoreInfo>
                    <ContactInfo>Call me</ContactInfo>
                </ButtonBlock>
            </CaptionBox>
        </CardWrapper>
    );
}


export default Card;