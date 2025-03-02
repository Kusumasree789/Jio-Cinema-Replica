import { useState, useEffect } from 'react'
import Carousel from "../components/carousel/Carousel"
import Channels from "../components/channels/Channels"
import Featured from "../components/featured/Featured"
import Header from "../components/header/Header"
import Shows from "../components/shows/Shows"
import Tags from "../components/tags/Tags"
import Footer from '../components/footer/Footer'

export default function Home()
{


    let [movies,setMovies] = useState([]);
    let [featuredMovies,setFeaturedMovies] = useState([]);
    let [dramaMovies,setDramaMovies] = useState([]);
    let [topMovies,setTopMovies] = useState([]);
    let [teluguMovies,setTeluguMovies] = useState([]);
    let [hindiMovies,setHindiMovies] = useState([]);
    let [englishMovies,setEnglishMovies] = useState([]);



    useEffect(() => {
        async function fetchData() {
            try {
                const apiUrl = import.meta.env.REACT_APP_API_URL || 'http://localhost:3000';
                let movieResponse = await fetch(`${apiUrl}/movies`);
                let moviesData = await movieResponse.json();
                setMovies(moviesData);

                // filter for featured movies
                let featMovies = moviesData.filter((movie)=>{return movie.featured==true})
                setFeaturedMovies(featMovies.slice(0, 5))

                // filter for drama movies
                let draMovies = moviesData.filter((movie)=>{return movie.genre.includes("Drama")})
                setDramaMovies(draMovies.slice(0, 6))

                // filter for toprated movies
                let topRatedMovies = moviesData.filter((movie)=>{return movie.imdb>=8.5})
                setTopMovies(topRatedMovies.slice(0, 6))

                // filter for telugu movies
                let telMovies = moviesData.filter((movie)=>{return movie.language==="Telugu"})
                setTeluguMovies(telMovies.slice(0, 6))

                // filter for hindi movies
                let hinMovies = moviesData.filter((movie)=>{return movie.language==="Hindi"})
                setHindiMovies(hinMovies.slice(0, 6))

                // filter for english movies
                let engMovies = moviesData.filter((movie)=>{return movie.language==="English"})
                setEnglishMovies(engMovies.slice(0, 6))

            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    },[])


    return (
        <>
            <Header movies = {movies}/>
            <Tags />
            <Carousel />
            <Channels />
            <Featured movies={featuredMovies}/>
            <Shows title="Drama Movies" movies={dramaMovies} />
            <Shows title="Top Rated Movies" movies={topMovies} />
            <Shows title="Telugu Movies" movies={teluguMovies}/>
            <Shows title="Hindi Movies" movies={hindiMovies}/>
            <Shows title="English Movies" movies={englishMovies}/>
            <Footer />

        </>
    )
}