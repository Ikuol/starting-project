import React from 'react';

/*Création d'un component 'MovieCard'
Utile lorsqu'un composant sera répété
plusieurs fois sur la page*/

/*Conceptuellement, les composants sont
 comme des fonctions JavaScript. 
 Ils acceptent des entrées quelconques
(appelées « props ») et renvoient 
des éléments React décrivant ce 
qui doit apparaître à l’écran. */

/* movie ici est un props */

    const MovieCard = ({ movie }) =>{
        return(
            <div className='movie'>
                        <div>
                            <p>{movie.Year}</p>
                        </div>

                        <div>
                            <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />
                        </div>

                        <div>
                             <span>{movie.Type}</span>
                             <h3>{movie.Title}</h3>
                        </div>
            </div>
        )
    }

    export default MovieCard;