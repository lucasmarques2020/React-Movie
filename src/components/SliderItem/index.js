import React from 'react'


import { 
    Container,
    BannerItem,
    Title,
    RateContainer,
    Rate } from './style'

import {Ionicons} from '@expo/vector-icons'
function SliderItem(){
    return(
        <Container activeOpacity={0.7}>
            <BannerItem
                source={{uri:'https://lumiere-a.akamaihd.net/v1/images/image_46443ba4.jpeg?region=0,0,540,810&width=480'}}
            />

            <Title numberOfLines={1}>Cruela</Title>
            <RateContainer>
                <Ionicons name="md-star" size={12} color="#e7a74e"/>
                <Rate>9/10</Rate>
            </RateContainer>
        </Container>
    )
}
export default SliderItem;