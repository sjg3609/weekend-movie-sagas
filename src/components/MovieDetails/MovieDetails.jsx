import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { useEffect } from 'react';


function MovieDetails() {
    // Don't think details is a necessary reducer anymore. We can just use the genres and movies reducers to get what we
    // const details = useSelector(store => store.details);
    const movies = useSelector(store => store.movies);
    const genres = useSelector(store => store.genres);
    const { id } = useParams();
    const movie = movies.find((movie) => movie.id === Number(id));
    
    console.log(id);

    const dispatch = useDispatch();
    const history = useHistory();


    // Do not need to make a separate function to retrieve the details, I believe, either

    // const fetchDetails = () => {
    //     const action = { type: 'FETCH_DETAILS', payload: details.id};
    //     dispatch(action);
    // }

    // const fetchDetails = () => {
    //     dispatch({ type: 'FETCH_DETAILS' });
    // }

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);


    // Code that we were trying to use during office hours and Marc was helping me with

    // if (movies.length != 0) {
    //     for (let i = 0; movies.length > 0; i++) {
    //         if (movies[i].id === id) {
    //             movie = movies[i]
    //             console.log(movie);
    //         }
    //     }
    // }

    const previousPage = () => {
        history.goBack('/');
    }

    return (
        <div className="movieDetails">
            <h3>Movie Details {id}</h3>
            <button onClick={previousPage}>Back to List</button>
            <h4>{genres.name}</h4>
            {
                movies.length === 0 ? (
                    <div>Loading...</div>
                ) : (
                    <div key={movie.id} >
                        <h3>{movie.title}</h3>
                        <img src={movie.poster} alt={movie.title} />
                        <h4>{movie.description}</h4>
                    </div>
                )
            }
        </div>
    )
}

export default MovieDetails;