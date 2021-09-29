import React from "react";
import { View, Text } from 'react-native'

import { Container, SearchContainer, SearchButton, Input } from './style'
import { Feather } from '@expo/vector-icons'

import Header from '../../components/Header'


function Home(){
    return(
        <Container>
            <Header title="React Prime"/>
            <SearchContainer>
                <Input 
                placeholder="Pesquisar"
                placeholderTextColor="#ddd"
                />
                <SearchButton>
                    <Feather
                    name="search"
                    size={30}
                    color="white"
                    />
                </SearchButton>
            </SearchContainer>
        </Container>
    )
}

export default Home;