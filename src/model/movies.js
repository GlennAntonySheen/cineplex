import axios from 'axios'

export default class MoviesModel {
    addNewMovie(movieDetails) {
        console.log("🚀 ~ file: movies.js:7 ~ MoviesModel ~ addNewMovie ~ movieDetails", movieDetails)
        axios.post('http://localhost:4000/movies/addNewMovie', movieDetails).then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
          });
    }

    getAllMovie() {
        axios.get('http://localhost:4000/movies/').then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
          });
    }
}