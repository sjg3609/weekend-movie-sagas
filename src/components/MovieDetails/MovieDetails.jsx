import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';


function MovieDetails() {

    const movies = useSelector(store => store.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_DETAILS' });
    }, []);

    return (
        <>
            <h3>Movie Details</h3>
            {
                movies.map(movie => {
                    <div className="movieDetails" key={movie.id}>
                         <h4>{movies.description}</h4>
                    </div>
                    
                })
            }
        </>
    )
}

export default MovieDetails;