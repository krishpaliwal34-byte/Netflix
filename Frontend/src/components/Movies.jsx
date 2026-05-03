import React from 'react'
import './Movies.css'
import { useNavigate } from 'react-router-dom'
const TopPicks = [
    {
        id:"T1",
        name: "Dhurandhar",
        Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG6E23aaLvMp5LzphgI7R2fqURQRj22T0CIQ&s",
        Poster : "https://cdn.district.in/movies-assets/images/cinema/_HorizontalDhurandhar-1b8dc980-ce83-11f0-af8c-6926695421f1.jpg",
    },
    {
        id: "T2",
        name: "Vadh 2",
        Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpsgXQMOn2duvdCqjuCAHWypU9IVc7yWckSQ&s",
        Poster: "https://cdn.district.in/movies-assets/images/cinema/Horizontal-Vadh-2-Hori--d32ab9d0-01bf-11f1-8330-bfd7ab6edc8a.jpg",
    },
    {
        id: "T3",
        name: "Sector 36",
        Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqkLr6w9AoYX75m7sSAD8N45W--ASCY3xq9A&s",
        Poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw3X3027p-e4MYkSKeik5wDLLvKTcF6H6fGA&s",  
      },

    {
        id: "T4",
        name: "Border 2",
        Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNyLW5NJKBJTUVvi1uj7UZq2bQzw7e0hWR6A&s",
        Poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTFdgonRUxz6snSXJfZ0cbyWxN-oHFoRgPCA&s",
    },
    {
        id: "T5",
        name: "War Machine",
        Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJt19on97UU9n4euZg_UTnP9KGe1aZu0wp_A&s",
        Poster: "https://www.showbizjunkies.com/wp-content/uploads/2026/02/war-machine-poster-1280x720.jpg",
    },
    {
        id: "T6",
        name: "Dhadak 2",
        Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC9u-feotIot8z1xbXDWAct2pjshYNsFHSVw&s",
        Poster: "https://images.moneycontrol.com/static-mcnews/2025/05/20250526142531_dhadak-2-poster.jpg?impolicy=website&width=1280&height=720",
    },
     {
        id: "T7",
        name: "Chor Nikal Ke Bhaaga",
        Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIH2cOipp-DhqMnLbu5B_zG_9qsevBTpsffA&s",
        Poster: "https://filminformation.com/wp-content/uploads/2023/03/Chor-Nikal-Ke-Bhaga-Movie-Download-300MB-700MB-1.5GB-Film-Review.jpg",
    },
]
 const PopularMovies = [
  {
    id: "P1",
    name: "The Girlfriend",
    Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXhk2DRr5-iKzeRFTCR4JDhNOKZmXLUJFULw&s",
    Poster: "https://i.ytimg.com/vi/TYiE5GwZUdE/maxresdefault.jpg",
  },
  {
    id: "P2",
    name: "Tere Ishq Main",
    Image: "https://m.media-amazon.com/images/M/MV5BOGRjMzM1ZmUtMjk0Yi00NzA0LTk3ZWYtZWM3MWY3M2EwMjBhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    Poster: "https://www.dazzlerr.com/wp-content/uploads/2025/12/Tere-Ishk-Mein-Poster.webp",
  },
  {
    id: "P3",
    name: "Kaantha",
    Image: "https://images.filmibeat.com/ph-big/2025/10/kaantha1761823444_0.jpg",
    Poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjUOQO63sospEadY9CbGZYgm-UarIVmvrY_Q&s",
  },
  {
    id: "P4",
    name: "War",
    Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4KZu8w94zcmUJAcmbvlPvL8VmvqYzDikwFw&s",
    Poster: "https://img.theweek.in/content/dam/week/review/movies/2019/images/2019/hrithik-tiger-war.jpg.transform/schema-16x9/image.jpg",
  },
   {
    id: "P5",
    name: "Article 370",
    Image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b2/Article_370_film_poster.jpeg/250px-Article_370_film_poster.jpeg",
    Poster: "https://images.filmibeat.com/ph-big/2024/02/article-370_170714737340.jpg",
  },
   {
    id: "P6",
    name: "Saiyaara",
    Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWrIFfFfObNqbFBv7FevSl0TfrGuvu51KoVA&s",
    Poster: "https://images.filmibeat.com/ph-big/2025/07/saiyaara1753693212_8.jpg",
  },
   {
    id: "P7",
    name: "Chhaava",
    Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXMV4zxY6v2prTjiCrq_VVxfT6Op7GnsYBig&s",
    Poster: "https://i.ytimg.com/vi/8lQRlp5NW84/maxresdefault.jpg",
  },
 ]
 const BollywoodMovies =[
  {
    id: "B1",
    name: "Gumraah",
    Image: "https://m.media-amazon.com/images/M/MV5BNTUyNmJjZDktYTdkMC00MmEyLWE2MzEtYjM5NzcwZTgzOGU3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    Poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQGzXUsSkuyZfFQh1JZ0NnraVUYlQt1xWELg&s",
  },
   {
    id: "B2",
    name: "Do Patti",
    Image: "https://images.filmibeat.com/img/popcorn/movie_posters/dopatti-20241014150658-22665.jpg",
    Poster: "https://www.bollywoodhungama.com/wp-content/uploads/2024/10/Do-Patti-cover-image1.jpg",
  },
   {
    id: "B3",
    name: "Mission Majnu",
    Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHU-GzmqVpX33j3pBaEw8sXD9_XrjmQ0W9pw&s",
    Poster: "https://www.filmyfenil.com/wp-content/uploads/2023/01/Mission-Majnu-wallpaper.jpg",
  },
   {
    id: "B4",
    name: "CTRL",
    Image: "https://media.assettype.com/dt-next/import/h-upload/2024/09/25/843631-untitled.webp?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true",
    Poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYXwhcDF0oKRlZgQXDoPGKJsCGEboK8rS91g&s",
  },
   {
    id: "B5",
    name: "Faraaz",
    Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnEV-fWfOq9vdr_4MW2slhRKqdAZvePWywFA&s",
    Poster: "https://media.telanganatoday.com/wp-content/uploads/2021/08/Motion-poster-of-Hansal-Mehtas-Faraaz-unveiled.jpg",
  },
   {
    id: "B6",
    name: "Love Aaj Kal",
    Image: "https://m.media-amazon.com/images/I/81YmJwZQ0HL._AC_UF350,350_QL50_.jpg",
    Poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAkpfjMlpxOPjyMZimTHRL8k670fyGm0Ll0w&s",
  },
   {
    id: "B7",
    name: "Bheed",
    Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGAGkPD0n5qnw60pB2gbRHyx-BUtmkVFXqdw&s",
    Poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz7b6eOugSBDU-40cWxYpJplhWBAXLwKymiw&s",
  },
 ]
 const EpicsMovies = [
  {
    id: "E1",
    name: "Padmaavat",
    Image: "https://m.media-amazon.com/images/M/MV5BNjM4MzFhOTItMzNmYy00NTg4LWFjYzItMWY0ZDAxY2NmNTUyXkEyXkFqcGc@._V1_.jpg",
    Poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9-4mTFplDksNHlpY7nKRSw7_6JZkHCMg0Pw&s",
  },
  {
    id: "E2",
    name: "Son Of Sardaar 2",
    Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXEx89KJvZmE670nGc9hsmFJojkqRG-aE1IA&s",
    Poster: "https://static.toiimg.com/thumb/msid-122358234,width-1280,height-720,resizemode-4/122358234.jpg",
  },
  {
    id: "E3",
    name: "Laal Singh Chaddha",
    Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbiy4feNQBF3tX70KCRfLQbfWaO_lWQfDibw&s",
    Poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ex4Ajtx_JjLfsy6t9nzuMi4p-WwSjT1k3w&s",
  },
  {
    id: "E4",
    name: "Baahubali 2",
    Image: "https://rukminim2.flixcart.com/image/300/300/kzygpzk0/poster/r/q/s/large-movie-bahubali-2-posters-on-large-print-36x24-inches-original-imagbukjsjtksjsg.jpeg",
    Poster: "https://m.media-amazon.com/images/I/61hKZicZE5L._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: "E5",
    name: "Adipurush",
    Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUG9-wdBpKEVwRj_NnVtqMJB4_daQ-Xp0gjQ&s",
    Poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2hCSsejQv1nU83bMMxyHsXFwY3RywfgNhTg&s",
  },
  {
    id: "E6",
    name: "RRR",
    Image: "https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg",
    Poster: "https://www.theroxytheater.org/wp-content/uploads/2022/05/rrr20again.jpg",
  },
  {
    id: "E7",
    name: "Kalki 2898 AD",
    Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuQmSW17wrGcXbADd0fd4IB_2ja-RxYelcmQ&s",
    Poster: "https://images.indianexpress.com/2024/04/kalki-2898.jpg",
  },
 ]

const Movies = ({search}) => {
  const navigate = useNavigate();

  const MoviesList = [
  ...TopPicks,
  ...PopularMovies,
  ...BollywoodMovies,
  ...EpicsMovies,
]

const filterMovies = MoviesList.filter((movie) => 
 movie.name.toLowerCase().includes(search.toLowerCase())
)
  return (
    <>
  
   { search ? (
     <div className="movies-section">
      <h2>Search Result</h2>
      <div className="movies-row">
        {filterMovies.map((Tmovie) => (
          <div className="movie-card" key={Tmovie.id} onClick={() => navigate('/play', { state: Tmovie })}>
            <img src={Tmovie.Image} alt={Tmovie.name} />
            <h4>{Tmovie.name}</h4>
          </div>
        ))}
      </div>
    </div>
   ):(
    <>
     <div className="movies-section">
      <h2>Top Picks On Netflix</h2>
      <div className="movies-row">
        {TopPicks.map((Tmovie) => (
          <div className="movie-card" key={Tmovie.id} onClick={() => navigate('/play', { state: Tmovie })}>
            <img src={Tmovie.Image} alt={Tmovie.name} />
            <h4>{Tmovie.name}</h4>
          </div>
        ))}
      </div>
    </div>

    <div className="movies-section2">
      <h2>Popular films on Netflix</h2>
      <div className="movies-row">
        {PopularMovies.map((Pmovie) => (
        <div className="movie-card" key={Pmovie.id} onClick={() => navigate('/play', { state: Pmovie })}>
            <img src={Pmovie.Image} alt={Pmovie.name} />
            <h4>{Pmovie.name}</h4>
          </div>
        ))}
      </div>
    </div>

     <div className="movies-section2">
      <h2>Bollywood films on Netflix</h2>
      <div className="movies-row">
        {BollywoodMovies.map((Bmovie) => (
         <div className="movie-card" key={Bmovie.id} onClick={() => navigate('/play', { state: Bmovie })}>
            <img src={Bmovie.Image} alt={Bmovie.name} />
            <h4>{Bmovie.name}</h4>
          </div>
        ))}
      </div>
    </div>

   <div className="movies-section2">
      <h2>Epics on Netflix</h2>
      <div className="movies-row">
        {EpicsMovies.map((Emovie) => (
         <div className="movie-card" key={Emovie.id} onClick={() => navigate('/play', { state: Emovie })}>
            <img src={Emovie.Image} alt={Emovie.name} />
            <h4>{Emovie.name}</h4>
          </div>
        ))}
      </div>
    </div>
    </>
   )

   }


    </>
  )
}

export {TopPicks , PopularMovies ,BollywoodMovies , EpicsMovies}
export default Movies