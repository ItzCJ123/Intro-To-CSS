const url = "https://imdb-top-100-movies.p.rapidapi.com/";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "7312852481msh2d606734cdf5f0bp12d6d9jsn65323dabeb0b",
    "x-rapidapi-host": "imdb-top-100-movies.p.rapidapi.com",
  },
};

const getMovies = async () => {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    const container =document.getElementsByClassName("container")[0]
    result.forEach((movie) =>{
        const div = document.createElement('div')
        div.className = "movie-card"
        div.innerHTML = `<figure>
                        <img src=${movie.image} alt="">
                    </figure>
                    <div class="title-sec">
                        <h3 class="title">${movie.title}</h3>
                        <p class="year">${movie.year}</p>
                    </div>
                    <p class="desc"><span>Sypnosis:</span>${movie.description}</p>
                    <div class="genre-sec">
                        <p class="genre">${movie.genre.join(', ')}</p>
                        <p class="rating"> <i class="fa-solid fa-star"></i> ${movie.rating}</p>
                    </div>`;

                    container.prepend(div)
    })
  } catch (error) {
    console.error(error);
  }

};
// getMovies();
