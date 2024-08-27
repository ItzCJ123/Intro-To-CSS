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
  } catch (error) {
    console.error(error);
  }

};
// getMovies();
