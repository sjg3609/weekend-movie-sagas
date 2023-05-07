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
                        <div key={movies.id} >
                            <h3>{movies.title}</h3>
                            <img src={movies.poster} alt={movies.title}/>
                            <h4>{movies.description}</h4>
                            <h4>{genres.name}</h4>
                        </div>   
            </section>
            <button onClick={previousPage}>Back to List</button>
        </>
    )
}

export default MovieDetails;