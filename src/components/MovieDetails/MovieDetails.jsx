import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { useEffect } from 'react';


function MovieDetails() {

    const details = useSelector(store => store.details);
    const movies = useSelector(store => store.movies);
    const genres = useSelector(store => store.genres);
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    // const fetchDetails = () => {
    //     const action = { type: 'FETCH_DETAILS', payload: details.id};
    //     dispatch(action);
    // }

    const fetchDetails = () => {
        dispatch({ type: 'FETCH_DETAILS '});
    }

    useEffect(() => {
        fetchDetails();
    }, []);

    const previousPage = () => {
        history.goBack('/');
    }

    return (
        <>
            <h3>Movie Details</h3>
            <section className="details">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title}/>
                            <h4>{movie.description}</h4>
                            <h4>{genres.name}</h4>
                        </div>
                    );
                })}
            </section>
            <button onClick={previousPage}>Back to List</button>
        </>
    )
}

export default MovieDetails;