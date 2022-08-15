import {useEffect, useState} from 'react';

import MovieCard from './MovieCard';
 
import './App.css';
import SearchIcon from './search.svg';

/*Appel de l'api permettant de chercher les movies */
const API_LINK = 'https://www.omdbapi.com?apikey=689eb960' 

/*la fonction App, tout le programme a l'intérieur*/
const App = () =>{

    /*useState syntaxe:const [state, setState] = useState(initialState); */
    /*Usage: Renvoie une valeur avec état et une fonction pour la mettre à jour*/
    /*Une première valeur , qui sera changée dynamiquement au fil du temps*/
    /*Normalement, les variables « disparaissent » quand la fonction s’achève 
    mais les variables d’état sont préservées par React. */
    const [movies, setMovies] = useState([]);

    const [searchTerm, setSearchTerm] = useState('');

    /*Appel de l'api*/
    const searchMovies = async (title) =>{
        const response = await fetch(`${API_LINK}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    /*Que fait useEffect ? On utilise ce Hook pour indiquer à React 
    que notre composant doit exécuter quelque chose après chaque affichage. 
    React enregistre la fonction passée en argument 
    (que nous appellerons « effet »), et l’appellera plus tard, 
    après avoir mis à jour le DOM.*/

    /*Elle est exécutée par défaut après le premier affichage 
    et après chaque mise à jour. */

    useEffect(() =>{
        searchMovies('The Man from Toronto');
    }, []);

    /*JSX syntax*/
    return(
        /*className instead of class in JSX */
        <div className='app'>
            <h1>MovieLand</h1>

            <div className='search'>
                <input
                    placeholder='Search a movie'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt='Error'
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {
                movies?.length > 0
                    ? (
                        <div className='container'>
                            {movies.map((movie)=>(
                                <MovieCard movie={movie} />
                            ))}
                        </div>
                    ) : (
                            <div className='empty'>
                                <h2>No movies found</h2>
                            </div>
                    )}
         </div>
    );
}


export default App;