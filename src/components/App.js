import React from "react";
import SearchBar from "./SearchBar"
import MovieList from "./MovieList"
import axios from "axios";


// process.env.REACT_APP_API_KEY





class App extends React.Component {

    state = {
        movies: [],

        searchQuerry: ""
    }

    // async componentDidMount(){
    //     const baseURL = "http://localhost:3002/movies"
    //     const response = await fetch(baseURL)
    //     console.log(response)
    //     const data =  await response.json()
    //     console.log(data)
    //     this.setState({movies: data})
    // }

    async componentDidMount(){
        const response = await axios.get(`https://api.themoviedb.org/3/list/8247519?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`); 
        console.log(response.data.items)
        this.setState({movies: response.data.items})
    }

    // deleteMovie = (movie) => {

    //     const newMovieList = this.state.movies.filter(
    //         m => m.id !== movie.id
    //     )
    //     // this.setState(
    //     //     {movies: newMovieList}
    //     // )

    //     this.setState(state => ({
    //         movies: newMovieList
    //     }))

    // }


    // FETCH API

    // deleteMovie = async (movie) => {
    //     const baseURL = `http://localhost:3002/movies/${movie.id}`
    //     await fetch(baseURL, 
    //     {method:"DELETE"}   )
    //     const newMovieList = this.state.movies.filter(
    //         m => m.id !== movie.id
    //     )
    //     // this.setState(
    //     //     {movies: newMovieList}
    //     // )

    //     this.setState(state => ({
    //         movies: newMovieList
    //     }))

    // }


    //AXİOS API

    deleteMovie = async (movie) => {
        axios.post(`https://api.themoviedb.org/3/list/8247519/remove_item?media_id=${movie.id}&session_id=${process.env.REACT_APP_SESSION_ID}&api_key=${process.env.REACT_APP_API_KEY}`)
        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
        )
        // this.setState(
        //     {movies: newMovieList}
        // )

        this.setState(state => ({
            movies: newMovieList
        }))

    }

    searchMovie = (e) => {
        //console.log(e.target.value)
        this.setState({ searchQuerry: e.target.value })
    }
    render() {

        let filteredMovies = this.state.movies.filter(
            (movie) => {
                 if(movie.name){
                return movie.name.toLowerCase().indexOf(this.state.searchQuerry.toLowerCase()) !== -1
            }else{
                return movie.title.toLowerCase().indexOf(this.state.searchQuerry.toLowerCase()) !== -1
            }   
            }
        )

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">

                        <SearchBar
                            searchMovieProp={this.searchMovie}
                        />
                    </div>
                </div>

                <MovieList
                    movies={filteredMovies}
                    deleteMovieProp={this.deleteMovie} />
            </div>
        );
    }


};

export default App;