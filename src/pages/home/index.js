import React, { useState, useEffect } from "react";
import { ScrollView} from 'react-native'

import { Container,
     SearchContainer, 
     SearchButton, 
     Input, 
     Title, 
     BannerButton,
     Banner,
     SliderMovie } from './style'

import { Feather } from '@expo/vector-icons'

import Header from '../../components/Header'

import SliderItem from '../../components/SliderItem'

import api, { key } from '../../services/api'

import { getListMovies } from '../../utils/movie'

function Home(){

    const [nowMovies, setNowMovies] = useState([])
    const [popularMovies, setPopularMovies] = useState([])
    const [TopMovies, setTopMovies] = useState([])

    useEffect(()=>{
       let isActive = true

       async function getMovies(){
        //const response = await api.get('/movie/now_playing',{
        //    params:{
        //        api_key: key,
         //       language: 'pt-BR',
          //      page: 1,
         //  }
      //  })
        const [nowData,popularData,topData] = await Promise.all([
            api.get('/movie/now_playing',{
            params:{
                api_key: key,
                language: 'pt-BR',
                page: 1,
                }  
            }),
            api.get('/movie/popular',{
                params:{
                    api_key: key,
                    language: 'pt-BR',
                    page: 1,
                    }  
                }),
            api.get('/movie/top_rated',{
                params:{
                    api_key: key,
                    language: 'pt-BR',
                    page: 1,
                    }  
                }),

        ])
        
        const nowList = getListMovies(10, nowData.data.results)
        const popularList = getListMovies(5, popularData.data.results)
        const topList = getListMovies(5, topData.data.results)

        setNowMovies(nowList)
        setPopularMovies(popularList)
        setTopMovies(topList)
        
       }
       getMovies()
    })
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

            <ScrollView showsVerticalScrollIndicator={false}>
               <Title>Em cartaz</Title> 
               <BannerButton activeOpacity={0.6} onPress={ () => alert('FILME NÃO DISPONIVEL')}>
                   <Banner
                   resizeMethod="resize"
                   source={{uri: 'https://cdn.pixabay.com/photo/2014/10/31/17/41/dancing-dave-minion-510835_960_720.jpg'}}
                   />
               </BannerButton>
            <SliderMovie
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={[1,2,3,4]}
                renderItem={ ({ item }) => <SliderItem/> }
            />
                <Title>Populares</Title> 

            <SliderMovie
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={[1,2,3,4]}
                renderItem={ ({ item }) => <SliderItem/> }
            />

                <Title>Mais Votados</Title> 

            <SliderMovie
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={[1,2,3,4]}
                renderItem={ ({ item }) => <SliderItem/> }
            />

            </ScrollView>

        </Container>
    )
}

export default Home;