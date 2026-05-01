import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Movies.css'

const AnimatedShows =[
    {
        id: "A1",
        name: "Chhota Bheem",
        Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNehQL2hOL1zs1YSxa-gPyME8e-gCb6OuKwQ&s",
        Poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStmJYz42tyvokzT9m_-ObkZWkYy55kRHM1Qg&s",
    },
    {
        id : "A2",
        name: "Avatar: The Last Airbender",
        Image: "https://m.media-amazon.com/images/I/81ebGZWsmpL._AC_UF1000,1000_QL80_.jpg",
        Poster: "",
    },
     {
        id : "A3",
        name: "Mighty Raju",
        Image: "https://images.justwatch.com/poster/334099834/s718/mighty-raju.jpg",
        Poster: "",
    },
     {
        id : "A4",
        name: "Mighty Little Bheem",
        Image: "https://upload.wikimedia.org/wikipedia/en/1/19/Mighty_Little_Bheem_poster.jpg",
        Poster: "", 
    },
     {
        id : "A5",
        name: "Zig & Sharko",
        Image: "https://m.media-amazon.com/images/M/MV5BODZiMzEzYTMtYThiZC00NzE1LTk2NTQtYTUwMTk3ZDMwZGVjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        Poster: "",
    },
     {
        id : "A6",
        name: "Grizzy and the Lemmings",
        Image: "https://m.media-amazon.com/images/M/MV5BMjMyODdlMDYtMGY1YS00NTQ3LTgyMTgtMzExNTk1YmI1ZWY5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
       Poster: "",
    },
     {
        id : "A7",
        name: "Kung Fu Panda: The Dragon Knight",
        Image: "https://upload.wikimedia.org/wikipedia/en/c/c2/Kung_Fu_Panda_The_Dragon_Knight_poster.png",
       Poster: "",
    }
]

const MurderShows = [
    {
        id: "M1",
        name: "Kohrra",
        Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTal1OGPmGM0YQt_II05AoUtJEZdizE_1CHuX9cD2KTI2KtYfS0HdUhKpgfqcfbYUIIAzN0&s=10",
         Poster: "https://resizing.flixster.com/1F3YtnqLNv7CLIt6_E3kgKcncks=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p24931249_b_h9_aa.jpg",
    },
     {
        id: "M2",
        name: "Mai",
        Image: "https://m.media-amazon.com/images/M/MV5BY2Q2NWYwMGItNzZlZS00NGQwLTgyMjYtZDhmMjI4NzBlOTU5XkEyXkFqcGc@._V1_.jpg",
         Poster: "https://media-cache.cinematerial.com/p/500x/dgolsclg/mai-indian-movie-poster.jpg?v=1649922311",
    },
     {
        id: "M3",
        name: "Scoop",
        Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNb7abzjYkEJO1qjm8Tko3NmYVVBQDxCVk9Q&s",
         Poster: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202306/scoop_review-sixteen_nine.jpg?VersionId=k4dq.zAIwDeMZW3kcLh8wun9le.4dvBb",
    },
     {
        id: "M4",
        name: "Killer Soup",
        Image: "https://m.media-amazon.com/images/M/MV5BYjNiYTRjYjQtOWI1Yy00OTZlLWI4YTItMTkxMDA4NzkyNThjXkEyXkFqcGc@._V1_.jpg",
         Poster: "",
    },
     {
        id: "M5",
        name: "Aranyak",
        Image: "https://resizing.flixster.com/GjjY9TPaPYeoImMrC1KC70-MySc=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p20990107_b_v13_aa.jpg",
         Poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsc1UR8NlheTZBiYMDIzJnxILWGSIlLf7RpA&s",
    },
     {
        id: "M6",
        name: "Catching Killers",
        Image: "https://timesofindia.indiatimes.com/thumb/89439016.cms?width=136&height=195&quality=80&imgsize=55874",
         Poster: "",
    },
     {
        id: "M7",
        name: "Murderville",
        Image: "https://m.media-amazon.com/images/M/MV5BOTcwZmVhNDMtMDg4Ny00ZDRlLWIzNDctZDdlZWNlM2M4ZmQxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
         Poster: "",
    },
]

const RealityShows = [
    {
        id: "R1",
        name: "Haunted",
        Image: "https://m.media-amazon.com/images/M/MV5BMjUyNzc5NDk2MF5BMl5BanBnXkFtZTgwMDAzODI1NjM@._V1_FMjpg_UX1000_.jpg",
         Poster: "",
    },
    {
        id: "R2",
        name: "Social Currency",
        Image: "https://m.media-amazon.com/images/M/MV5BOWMyYWY3YjUtZWZjOS00OTE4LTkxZGQtMDQxNzQxZWY3YTM1XkEyXkFqcGc@._V1_.jpg",
         Poster: "",
    },
     {
        id: "R3",
        name: "Indian Matchmaking",
        Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXbGqKKel9kob9WU2a9byYDSMDSS1w9s7X6Q&s",
         Poster: "",
    },
     {
        id: "R4",
        name: "Young, Famous & African",
        Image: "https://upload.wikimedia.org/wikipedia/en/d/d7/Young%2C_Famous_%26_African.jpg",
         Poster: "",
    },
     {
        id: "R5",
        name: "IRL: In Real Love",
        Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsBq2V_DMWZWV8HxR0HVzoSmwRmLUrRnBAsA&s",
         Poster: "",
    },
     {
        id: "R6",
        name: "What The Love? With Karan Johar",
        Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdtmnfhga0_QIMfIiBV95GqZggDOqw_3bVrw&s",
         Poster: "",
    },
     {
        id: "R7",
        name: "Social Currency",
        Image: "https://m.media-amazon.com/images/M/MV5BOWMyYWY3YjUtZWZjOS00OTE4LTkxZGQtMDQxNzQxZWY3YTM1XkEyXkFqcGc@._V1_.jpg",
         Poster: "",
    },
]

const GoogleTreanding = [
    {
        id: "G1",
        name: "C.I.D",
        Image: "https://m.media-amazon.com/images/M/MV5BYWQyNzkxMDItZmNiNS00NTRkLTk0NTYtMWEzOTg4YjYwNTE0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
         Poster: "",
    },
     {
        id: "G2",
        name: "Maamla Legal Hai",
        Image: "https://m.media-amazon.com/images/M/MV5BY2QyNjUyN2MtMjRiNC00ZmFiLTg0YjQtNTQ3MWQ3MmQ4NWIzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
         Poster: "",
    },
     {
        id: "G3",
        name: "One Piece",
        Image: "https://m.media-amazon.com/images/M/MV5BMTNjNGU4NTUtYmVjMy00YjRiLTkxMWUtNzZkMDNiYjZhNmViXkEyXkFqcGc@._V1_.jpg",
         Poster: "",
    },
     {
        id: "G4",
        name: "The Great Indian Kapil Show",
        Image: "https://m.media-amazon.com/images/M/MV5BMGE5Y2ZiNWYtODA4Mi00M2YxLWFjNzQtZWVmZDRiNmE1YjVjXkEyXkFqcGc@._V1_.jpg",
         Poster: "",
    },
     {
        id: "G5",
        name: "Phantom Lawyer",
        Image: "https://m.media-amazon.com/images/M/MV5BN2Q3YTE2NjYtMTM4My00ZWIxLTgwNTAtZWVkN2ExNWNjMjg3XkEyXkFqcGc@._V1_QL75_UY281_CR3,0,190,281_.jpg",
         Poster: "",
    },
     {
        id: "G6",
        name: "Still Shining",
        Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRA0p0WtCen3eaBqWFYjMV91MEZrVJ2NyBzg&s",
         Poster: "",
    },
     {
        id: "G7",
        name: "Hell's Paradise",
        Image: "https://m.media-amazon.com/images/M/MV5BZjhmMjhkNjUtMGU2MC00N2IzLTg1YzItZDk5ODMxMDYxODc0XkEyXkFqcGc@._V1_QL75_UX190_CR0,5,190,281_.jpg",
         Poster: "",
    },
]
const TvShows = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="movies-section">
      <h2>Animated shows on Netflix</h2>
      <div className="movies-row">
        {AnimatedShows.map((Animated) => (
         <div className="movie-card" key={Animated.id} onClick={() => navigate('/play', { state: Animated })}>
            <img src={Animated.Image} alt={Animated.name} />
            <h4>{Animated.name}</h4>
          </div>
        ))}
      </div>
    </div>

    <div className="movies-section2">
      <h2>Murder shows on Netflix</h2>
      <div className="movies-row">
        {MurderShows.map((Murder) => (
          <div className="movie-card" key={Murder.id} onClick={() => navigate('/play', { state: Murder })}>
            <img src={Murder.Image} alt={Murder.name} />
            <h4>{Murder.name}</h4>
          </div>
        ))}
      </div>
    </div>

     <div className="movies-section2">
      <h2>Reality shows on Netflix</h2>
      <div className="movies-row">
        {RealityShows.map((Reality) => (
          <div className="movie-card" key={Reality.id} onClick={() => navigate('/play', { state: Reality })}>
            <img src={Reality.Image} alt={Reality.name} />
            <h4>{Reality.name}</h4>
          </div>
        ))}
      </div>
    </div>

     <div className="movies-section2">
      <h2>Netflix shows trending on Google</h2>
      <div className="movies-row">
        {GoogleTreanding.map((Google) => (
          <div className="movie-card" key={Google.id} onClick={() => navigate('/play', { state: Google })}>
            <img src={Google.Image} alt={Google.name} />
            <h4>{Google.name}</h4>
          </div>
        ))}
      </div>
    </div>


    </>
  )
}
export {AnimatedShows , MurderShows , RealityShows ,GoogleTreanding}
export default TvShows
