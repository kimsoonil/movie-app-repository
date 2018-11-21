import React, { Component } from 'react';
import PropType from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis'
import './Movie.css';

function Movie({title, poster, genres, synopsis}) {

        //console.log(this.props)
        return (
        <div className="Movie">
            <div className="Movie_columns">
            <MoviePoster poster={poster}/>
            </div>  
            <div className="Movie_columns">
                <h1>{title}</h1>
                <div className="Movie_Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                <p className="Movie_Syopsis">
                <LinesEllipsis
                    text={synopsis}
                    maxLine='3'
                    ellipsis='...'
                    trimRight
                    baseOn='letters'
                    />
                </p>
            </div>
        </div>
        );
    }
// class MoviePoster extends Component{
//     render() {
//         return (
//             <img src={this.props.poster}></img>
//         );
//     }
// }

function MoviePoster({poster,alt}){
    return(
        <img src={poster} alt={alt} title={alt} className="Movie_Poster" />
    )
}
function MovieGenre({genre}){
    return(
        <span className ="Movie_Genre">{genre}</span>
        )
}
// Movie.porpTypes = {
//     title:PropTypes.string.isRequired,
//     poster:PropTypes.string.isRequired,
//     genres:PropTypes.string.isRequired,
//     synopsis:PropTypes.string.isRequired
// }
// MoviePoster.porpTypes = {
//     poster:PropTypes.string.isRequired
// }
export default Movie;