import React from 'react'
import './Movies.css'

const TopPicks = [
    {
        id:"T1",
        name: "Dhurandhar",
        Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG6E23aaLvMp5LzphgI7R2fqURQRj22T0CIQ&s",
    },
    {
        id: "T2",
        name: "Vadh 2",
        Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpsgXQMOn2duvdCqjuCAHWypU9IVc7yWckSQ&s",
    },
    {
        id: "T3",
        name: "Sector 36",
        Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqkLr6w9AoYX75m7sSAD8N45W--ASCY3xq9A&s",
    },
    {
        id: "T4",
        name: "Border 2",
        Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNyLW5NJKBJTUVvi1uj7UZq2bQzw7e0hWR6A&s",
    },
    {
        id: "T5",
        name: "War Machine",
        Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJt19on97UU9n4euZg_UTnP9KGe1aZu0wp_A&s",
    },
    {
        id: "T6",
        name: "Dhadak 2",
        Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC9u-feotIot8z1xbXDWAct2pjshYNsFHSVw&s",
    },
     {
        id: "T7",
        name: "Chor Nikal Ke Bhaaga",
        Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIH2cOipp-DhqMnLbu5B_zG_9qsevBTpsffA&s",
    },
]
 const PopularMovies = [
  {
    id: "P1",
    name: "The Girlfriend",
    Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXhk2DRr5-iKzeRFTCR4JDhNOKZmXLUJFULw&s",
  },
  {
    id: "P2",
    name: "Tere Ishq Main",
    Image: "https://m.media-amazon.com/images/M/MV5BOGRjMzM1ZmUtMjk0Yi00NzA0LTk3ZWYtZWM3MWY3M2EwMjBhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: "P3",
    name: "Kaantha",
    Image: "https://images.filmibeat.com/ph-big/2025/10/kaantha1761823444_0.jpg",
  },
  {
    id: "P4",
    name: "War",
    Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4KZu8w94zcmUJAcmbvlPvL8VmvqYzDikwFw&s",
  },
   {
    id: "P5",
    name: "Article 370",
    Image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b2/Article_370_film_poster.jpeg/250px-Article_370_film_poster.jpeg",
  },
   {
    id: "P6",
    name: "Saiyaara",
    Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWrIFfFfObNqbFBv7FevSl0TfrGuvu51KoVA&s",
  },
   {
    id: "P7",
    name: "Chhaava",
    Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXMV4zxY6v2prTjiCrq_VVxfT6Op7GnsYBig&s",
  },
 ]

const Movies = () => {
  return (
    <>
  
    <div className="movies-section">
      <h2>Top Picks On Netflix</h2>

      <div className="movies-row">
        {TopPicks.map((Tmovie) => (
          <div className="movie-card" key={Tmovie.id}>
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
          <div className="movie-card" key={Pmovie.id}>
            <img src={Pmovie.Image} alt={Pmovie.name} />
            <h4>{Pmovie.name}</h4>
          </div>
        ))}
      </div>
    </div>

    </>
  )
}


export default Movies